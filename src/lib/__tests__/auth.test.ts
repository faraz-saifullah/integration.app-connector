import { getAuthToken } from '../auth';

// Mock the global fetch
const mockFetch = jest.fn();
global.fetch = mockFetch as jest.MockedFunction<typeof fetch>;

describe('getAuthToken', () => {
  beforeEach(() => {
    jest.clearAllMocks();
    process.env.NEXT_PUBLIC_BASE_URL = 'http://localhost:3000';
  });

  it('should return a token on successful response', async () => {
    const mockToken = 'test-token-123';
    mockFetch.mockResolvedValueOnce({
      ok: true,
      json: async () => ({ token: mockToken }),
    } as Response);

    const token = await getAuthToken();
    expect(token).toBe(mockToken);
    expect(fetch).toHaveBeenCalledWith(
      'http://localhost:3000/api/auth/token',
      expect.objectContaining({
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      })
    );
  });

  it('should throw an error when response is not ok', async () => {
    mockFetch.mockResolvedValueOnce({
      ok: false,
      status: 401,
      statusText: 'Unauthorized',
    } as Response);

    await expect(getAuthToken()).rejects.toThrow('HTTP error! status: 401 Unauthorized');
  });

  it('should throw an error when no token is returned', async () => {
    mockFetch.mockResolvedValueOnce({
      ok: true,
      json: async () => ({}),
    } as Response);

    await expect(getAuthToken()).rejects.toThrow('Invalid token received from server');
  });

  it('should handle fetch errors', async () => {
    const errorMessage = 'Network error';
    mockFetch.mockRejectedValueOnce(new Error(errorMessage));

    await expect(getAuthToken()).rejects.toThrow(errorMessage);
  });
});
