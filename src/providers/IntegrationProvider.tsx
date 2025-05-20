'use client';

import { IntegrationAppProvider } from '@integration-app/react';
import { ReactNode, useEffect, useState } from 'react';
import { getAuthToken } from '@/lib/auth';

export function IntegrationProvider({ children }: { children: ReactNode }) {
  const [token, setToken] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchToken() {
      try {
        const token = await getAuthToken();
        setToken(token);
        setError(null);
      } catch (err) {
        console.error('Error fetching token:', err);
        setError('Failed to initialize integration. Please refresh the page to try again.');
      }
    }

    fetchToken();
  }, []);

  if (error) {
    return (
      <div className="p-4 bg-red-100 text-red-700 rounded">
        <p>{error}</p>
      </div>
    );
  }

  if (!token) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  return (
    <IntegrationAppProvider token={token}>
      {children}
    </IntegrationAppProvider>
  );
}
