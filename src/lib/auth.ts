interface AuthTokenResponse {
  token: string;
  [key: string]: unknown; // Allow for additional properties
}

/**
 * Fetches an authentication token from the API
 * @returns {Promise<string>} The JWT token
 * @throws {Error} If the token cannot be fetched or is invalid
 */
export async function getAuthToken(): Promise<string> {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL || ''}/api/auth/token`,
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status} ${response.statusText}`);
    }
    
    const data: AuthTokenResponse = await response.json();
    
    if (!data.token) {
      throw new Error('Invalid token received from server');
    }
    
    return data.token;
  } catch (error) {
    console.error('Error in getAuthToken:', error);
    throw new Error(
      error instanceof Error 
        ? error.message 
        : 'Failed to fetch authentication token'
    );
  }
} 