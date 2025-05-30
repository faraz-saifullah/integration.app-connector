import React, { useEffect, useState, useRef } from 'react';
import { useIntegrationApp } from '@integration-app/react';
import { FlowRun as SDKFlowRun } from '@integration-app/sdk';
import {
  CheckCircle,
  XCircle,
  Clock,
  AlertCircle,
  Upload,
  Users,
  RotateCcw,
  X
} from 'lucide-react';
import { LoadingSpinner } from '@/components/Common/LoadingSpinner';

interface BulkUploadStatusModalProps {
  isOpen: boolean;
  flowRunId: string | null;
  onClose: () => void;
  onComplete: () => void;
}

interface NodeStatus {
  state: string;
  runs?: number;
  erroredRuns?: number;
  outputs?: number;
}

const NodeIcon: React.FC<{ status: NodeStatus }> = ({ status }) => {
  const getIcon = () => {
    if (status.state === 'completed') return <CheckCircle className="h-5 w-5 text-green-500" />;
    if (status.state === 'errored' || status.state === 'failed') return <XCircle className="h-5 w-5 text-red-500" />;
    if (status.state === 'running') return <LoadingSpinner size="sm" />;
    return <Clock className="h-5 w-5 text-gray-400" />;
  };

  return <div className="flex-shrink-0">{getIcon()}</div>;
};

const NodeStatusCard: React.FC<{
  status: NodeStatus;
  title: string;
  description: string;
}> = ({ status, title, description }) => {
  const runs = status.runs || 0;
  const erroredRuns = status.erroredRuns || 0;
  const outputs = status.outputs || 0;

  return (
    <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
      <NodeIcon status={status} />
      <div className="flex-1 min-w-0">
        <h4 className="text-sm font-medium text-gray-900">{title}</h4>
        <p className="text-xs text-gray-500">{description}</p>
        {runs > 0 && (
          <div className="text-xs text-gray-600 mt-1">
            {erroredRuns > 0 && (
              <span className="text-red-600">
                {erroredRuns} failed •
              </span>
            )}
            <span>{runs - erroredRuns} completed • {outputs} outputs</span>
          </div>
        )}
      </div>
    </div>
  );
};

export const BulkUploadStatusModal: React.FC<BulkUploadStatusModalProps> = ({
  isOpen,
  flowRunId,
  onClose,
  onComplete
}) => {
  const [flowRun, setFlowRun] = useState<SDKFlowRun | null>(null);
  const [error, setError] = useState<string | null>(null);
  const integrationApp = useIntegrationApp();
  const pollIntervalRef = useRef<NodeJS.Timeout | undefined>(undefined);

  const fetchFlowRunStatus = async () => {
    if (!flowRunId) return;

    try {
      const result = await integrationApp.flowRun(flowRunId).get();
      setFlowRun(result);
      setError(null);

      // Stop polling if flow is completed or errored
      if (result.state === 'completed' || result.state === 'failed') {
        if (pollIntervalRef.current) {
          clearInterval(pollIntervalRef.current);
          pollIntervalRef.current = undefined;
        }

        // Always refresh contacts and close modal after completion (success or failure)
        setTimeout(() => onComplete(), 3000);
      }
    } catch (err) {
      console.error('Error fetching flow run status:', err);
      setError('Failed to fetch upload status');
    }
  };

  useEffect(() => {
    if (isOpen && flowRunId) {
      fetchFlowRunStatus();

      // Poll every 2 seconds
      pollIntervalRef.current = setInterval(fetchFlowRunStatus, 2000);
    }

    return () => {
      if (pollIntervalRef.current) {
        clearInterval(pollIntervalRef.current);
        pollIntervalRef.current = undefined;
      }
    };
  }, [isOpen, flowRunId]);

  if (!isOpen) return null;

  const getOverallProgress = (): { completed: number; total: number; percentage: number } => {
    if (!flowRun?.nodes) return { completed: 0, total: 0, percentage: 0 };

    const nodes = Object.values(flowRun.nodes);
    const completed = nodes.filter(node => node.state === 'completed').length;
    const total = nodes.length;

    return {
      completed,
      total,
      percentage: total > 0 ? Math.round((completed / total) * 100) : 0
    };
  };

  const getContactProgress = () => {
    if (!flowRun?.nodes?.['create-contact']) return { created: 0, failed: 0, total: 0 };

    const createContactNode = flowRun.nodes['create-contact'];
    const runs = createContactNode.runs || 0;
    const erroredRuns = createContactNode.erroredRuns || 0;

    return {
      created: runs - erroredRuns,
      failed: erroredRuns,
      total: runs
    };
  };

  const progress = getOverallProgress();
  const contactProgress = getContactProgress();

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm flex items-center justify-center z-50">
      <div className="bg-white rounded-xl shadow-2xl max-w-2xl w-full mx-4 max-h-[90vh] overflow-hidden">
        {/* Header */}
        <div className="px-6 py-4 border-b border-gray-200 bg-gradient-to-r from-blue-50 to-indigo-50">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="p-2 bg-blue-100 rounded-lg">
                <Upload className="h-5 w-5 text-blue-600" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900">Bulk Contact Import</h3>
                <p className="text-sm text-gray-600">
                  {flowRun?.state === 'completed' ? 'Import completed successfully!' :
                    flowRun?.state === 'failed' ? 'Import encountered errors' :
                      flowRun?.state === 'running' ? 'Processing your contacts...' :
                        'Initializing import...'}
                </p>
              </div>
            </div>
            <button
              onClick={onClose}
              className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
            >
              <X className="h-5 w-5 text-gray-500" />
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 space-y-6 max-h-[70vh] overflow-y-auto">
          {error && (
            <div className="p-4 bg-red-50 border border-red-200 rounded-lg flex items-center space-x-3">
              <AlertCircle className="h-5 w-5 text-red-500 flex-shrink-0" />
              <div>
                <p className="text-red-800 font-medium">Error</p>
                <p className="text-red-700 text-sm">{error}</p>
              </div>
              <button
                onClick={fetchFlowRunStatus}
                className="ml-auto p-1 hover:bg-red-100 rounded"
              >
                <RotateCcw className="h-4 w-4 text-red-600" />
              </button>
            </div>
          )}

          {/* Overall Progress */}
          {flowRun && (
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <h4 className="text-sm font-medium text-gray-900">Overall Progress</h4>
                <span className="text-sm text-gray-600">
                  {progress.completed}/{progress.total} steps completed
                </span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div
                  className="bg-gradient-to-r from-blue-500 to-blue-600 h-2 rounded-full transition-all duration-500"
                  style={{ width: `${progress.percentage}%` }}
                />
              </div>

              {/* Contact Creation Summary */}
              {contactProgress.total > 0 && (
                <div className="bg-gradient-to-r from-green-50 to-emerald-50 border border-green-200 rounded-lg p-4">
                  <div className="flex items-center space-x-3">
                    <Users className="h-5 w-5 text-green-600" />
                    <div className="flex-1">
                      <h5 className="font-medium text-green-900">Contact Creation</h5>
                      <p className="text-sm text-green-700">
                        {contactProgress.created} contacts created successfully
                        {contactProgress.failed > 0 && (
                          <span className="text-red-600"> • {contactProgress.failed} failed</span>
                        )}
                      </p>
                    </div>
                    <div className="text-right">
                      <p className="text-lg font-bold text-green-800">{contactProgress.created}</p>
                      <p className="text-xs text-green-600">created</p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          )}

          {/* Node Status Details */}
          {flowRun?.nodes && (
            <div className="space-y-3">
              <h4 className="text-sm font-medium text-gray-900">Process Steps</h4>

              {flowRun.nodes['api-trigger'] && (
                <NodeStatusCard
                  status={flowRun.nodes['api-trigger']}
                  title="API Trigger"
                  description="Received CSV data and initiated processing"
                />
              )}

              {flowRun.nodes['for-each'] && (
                <NodeStatusCard
                  status={flowRun.nodes['for-each']}
                  title="Data Processing"
                  description="Processing each contact record"
                />
              )}

              {flowRun.nodes['create-contact'] && (
                <NodeStatusCard
                  status={flowRun.nodes['create-contact']}
                  title="Contact Creation"
                  description="Creating contacts in your CRM"
                />
              )}

              {flowRun.nodes['list-contacts'] && (
                <NodeStatusCard
                  status={flowRun.nodes['list-contacts']}
                  title="Final Sync"
                  description="Retrieving updated contact list"
                />
              )}
            </div>
          )}

          {/* Flow Run Details */}
          {flowRun && (
            <div className="bg-gray-50 rounded-lg p-4 space-y-2">
              <h5 className="text-sm font-medium text-gray-900">Technical Details</h5>
              <div className="grid grid-cols-2 gap-4 text-xs text-gray-600">
                <div>
                  <span className="font-medium">Flow Run ID:</span>
                  <br />
                  <code className="bg-gray-200 px-1 rounded">{flowRun.id.substring(0, 12)}...</code>
                </div>
                <div>
                  <span className="font-medium">Status:</span>
                  <br />
                  <span className={`inline-flex px-2 py-0.5 rounded-full text-xs font-medium ${flowRun.state === 'completed' ? 'bg-green-100 text-green-800' :
                    flowRun.state === 'failed' ? 'bg-red-100 text-red-800' :
                      flowRun.state === 'running' ? 'bg-blue-100 text-blue-800' :
                        'bg-gray-100 text-gray-800'
                    }`}>
                    {flowRun.state?.toUpperCase()}
                  </span>
                </div>
                <div>
                  <span className="font-medium">Started:</span>
                  <br />
                  {flowRun.startTime && new Date(flowRun.startTime).toLocaleTimeString()}
                </div>
                {flowRun.endTime && (
                  <div>
                    <span className="font-medium">Completed:</span>
                    <br />
                    {new Date(flowRun.endTime).toLocaleTimeString()}
                  </div>
                )}
              </div>
            </div>
          )}

          {/* Loading State */}
          {!flowRun && !error && (
            <div className="flex items-center justify-center py-8">
              <LoadingSpinner size="lg" />
              <span className="ml-3 text-gray-600">Loading import status...</span>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="px-6 py-4 bg-gray-50 border-t border-gray-200">
          <div className="flex justify-end space-x-3">
            {flowRun?.state === 'completed' && (
              <button
                onClick={onComplete}
                className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
              >
                View Contacts
              </button>
            )}
            <button
              onClick={onClose}
              className="px-4 py-2 bg-gray-200 text-gray-800 rounded-lg hover:bg-gray-300 transition-colors"
            >
              {flowRun?.state === 'completed' ? 'Close' : 'Close'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}; 