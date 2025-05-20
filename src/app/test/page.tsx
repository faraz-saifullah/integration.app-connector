'use client';

import { useEffect, useState } from 'react';

export default function TestPage() {
  const [token, setToken] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchToken() {
      try {
        setIsLoading(true);
        const response = await fetch('/api/auth/token');
        
        if (!response.ok) {
          throw new Error('Failed to fetch token');
        }
        
        const data = await response.json();
        setToken(data.token);
        setError(null);
      } catch (err) {
        console.error('Error fetching token:', err);
        setError('Failed to fetch authentication token. Please try again.');
      } finally {
        setIsLoading(false);
      }
    }

    fetchToken();
  }, []);

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-md">
      <h1 className="text-2xl font-bold mb-6">Token Test Page</h1>
      
      {error ? (
        <div className="p-4 mb-6 text-red-700 bg-red-100 rounded-md">
          <p className="font-medium">Error:</p>
          <p>{error}</p>
        </div>
      ) : (
        <div className="space-y-6">
          <div className="p-4 bg-green-50 border border-green-200 rounded-md">
            <h2 className="text-lg font-medium text-green-800 mb-2">Success!</h2>
            <p className="text-green-700">Token generated successfully.</p>
          </div>
          
          <div className="space-y-2">
            <h2 className="text-lg font-medium">Your JWT Token:</h2>
            <div className="p-4 bg-gray-50 rounded-md overflow-x-auto">
              <code className="text-sm break-all">{token}</code>
            </div>
            <p className="text-sm text-gray-500">
              This token is valid for 1 hour.
            </p>
          </div>
          
          <div className="p-4 bg-blue-50 border border-blue-200 rounded-md">
            <h3 className="font-medium text-blue-800 mb-2">Next Steps:</h3>
            <ul className="list-disc list-inside space-y-1 text-blue-700">
              <li>Verify the token at <a href="https://jwt.io/" target="_blank" rel="noopener noreferrer" className="underline">jwt.io</a></li>
              <li>Check the token payload for user information</li>
              <li>Proceed to implement the contact form</li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}
