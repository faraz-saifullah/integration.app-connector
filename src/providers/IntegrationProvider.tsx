"use client";

import { IntegrationAppProvider } from "@integration-app/react";
import { ReactNode, useCallback, useEffect, useState } from "react";
import { getAuthToken } from "@/lib/auth";

export function IntegrationProvider({ children }: { children: ReactNode }) {
  const [isInitialized, setIsInitialized] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // This function will be called by integration.app SDK automatically
  // whenever a token is needed (initial load + refresh when expired)
  const fetchToken = useCallback(async (): Promise<string> => {
    try {
      const token = await getAuthToken();
      setError(null);
      return token;
    } catch (err) {
      console.error("IntegrationProvider: Error fetching token:", err);

      // Provide more specific error messages
      let errorMessage = "Failed to get authentication token.";
      if (err instanceof Error) {
        if (err.message.includes("Unauthorized")) {
          errorMessage =
            "You need to be signed in to access integrations. Please sign in and try again.";
        } else if (err.message.includes("fetch")) {
          errorMessage =
            "Network error while fetching authentication token. Please check your connection and try again.";
        } else {
          errorMessage = `Authentication error: ${err.message}`;
        }
      }

      setError(errorMessage);
      throw err; // Re-throw so the SDK knows the fetch failed
    }
  }, []);

  // Initial check to ensure we can fetch a token
  useEffect(() => {
    async function initializeToken() {
      try {
        await fetchToken();
        setIsInitialized(true);
      } catch {
        // Error already handled in fetchToken
        setIsInitialized(true); // Still mark as initialized to show error UI
      }
    }

    initializeToken();
  }, [fetchToken]);

  if (error) {
    return (
      <div className="p-6 bg-red-50 border border-red-200 rounded-lg">
        <div className="flex items-start">
          <div className="flex-shrink-0">
            <svg
              className="h-5 w-5 text-red-400"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <div className="ml-3">
            <h3 className="text-sm font-medium text-red-800">
              Integration Setup Error
            </h3>
            <p className="mt-1 text-sm text-red-700">{error}</p>
            <div className="mt-4">
              <button
                onClick={() => window.location.reload()}
                className="bg-red-100 hover:bg-red-200 text-red-800 px-3 py-2 rounded text-sm font-medium"
              >
                Try Again
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (!isInitialized) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500 mx-auto"></div>
          <p className="mt-4 text-sm text-gray-600">
            Initializing integrations...
          </p>
        </div>
      </div>
    );
  }

  return (
    <IntegrationAppProvider fetchToken={fetchToken}>
      {children}
    </IntegrationAppProvider>
  );
}
