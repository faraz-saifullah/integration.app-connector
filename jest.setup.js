// Add jest-dom's custom assertions
import '@testing-library/jest-dom';

// Mock fetch globally
// This is needed because we're using fetch in our code
// and we want to mock it in our tests
global.fetch = jest.fn();

// Mock environment variables
process.env.NEXT_PUBLIC_BASE_URL = 'http://localhost:3000';
