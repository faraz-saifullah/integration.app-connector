import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest'
import { render, screen, waitFor } from '@testing-library/react'
import { ContactsProvider, useContacts } from '../ContactsContext'
import { useIntegrationApp, useConnections } from '@integration-app/react'
import type { Contact } from '@/types'

// Mock the integration app hooks
vi.mock('@integration-app/react', () => ({
  useIntegrationApp: vi.fn(),
  useConnections: vi.fn(),
}))

// Test component to access the context
function TestComponent() {
  const { contacts, isLoading, error, loadContacts } = useContacts()

  return (
    <div>
      <div data-testid="loading">{isLoading ? 'loading' : 'not-loading'}</div>
      <div data-testid="error">{error || 'no-error'}</div>
      <div data-testid="contacts-count">{contacts.length}</div>
      <button onClick={() => loadContacts()} data-testid="load-contacts">
        Load Contacts
      </button>
      <button onClick={() => loadContacts(true)} data-testid="refresh-contacts">
        Refresh Contacts
      </button>
      <div data-testid="contacts">
        {contacts.map(contact => (
          <div key={contact.id} data-testid={`contact-${contact.id}`}>
            {contact.name}
          </div>
        ))}
      </div>
    </div>
  )
}

function TestWrapper({ children }: { children: React.ReactNode }) {
  return (
    <ContactsProvider>
      {children}
    </ContactsProvider>
  )
}

describe('ContactsContext', () => {
  const mockIntegrationApp = {
    integration: vi.fn(),
  }

  const mockConnections = [
    { integration: { key: 'hubspot' } },
    { integration: { key: 'pipedrive' } },
  ]

  const mockContacts: Contact[] = [
    {
      id: '1',
      name: 'John Doe',
      email: 'john@example.com',
      hubspotUrl: 'https://hubspot.com/contact/1',
      updatedAt: '2024-01-01T00:00:00Z',
    },
    {
      id: '2',
      name: 'Jane Smith',
      email: 'jane@example.com',
      pipedriveUrl: 'https://pipedrive.com/contact/2',
      updatedAt: '2024-01-02T00:00:00Z',
    },
  ]

  beforeEach(() => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    vi.mocked(useIntegrationApp).mockReturnValue(mockIntegrationApp as any)
    vi.mocked(useConnections).mockReturnValue({
      connections: mockConnections,
      loading: false,
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } as any)

    // Mock the integration methods
    mockIntegrationApp.integration.mockReturnValue({
      action: vi.fn().mockResolvedValue({
        output: {
          records: mockContacts.map(contact => ({
            id: contact.id,
            fields: {
              name: contact.name,
              email: contact.email,
            },
            uri: contact.hubspotUrl || contact.pipedriveUrl,
            updatedTime: contact.updatedAt,
          })),
        },
      }),
    })
  })

  afterEach(() => {
    vi.clearAllMocks()
  })

  it('should show loading state during contact fetch', async () => {
    // Mock a delayed response
    mockIntegrationApp.integration.mockReturnValue({
      action: vi.fn().mockImplementation(() =>
        new Promise(resolve =>
          setTimeout(() => resolve({
            output: { records: [] }
          }), 100)
        )
      ),
    })

    render(
      <TestWrapper>
        <TestComponent />
      </TestWrapper>
    )

    // Should show loading initially
    expect(screen.getByTestId('loading')).toHaveTextContent('loading')

    // Wait for loading to complete
    await waitFor(() => {
      expect(screen.getByTestId('loading')).toHaveTextContent('not-loading')
    })
  })

  it('should not load contacts when connections are loading', () => {
    vi.mocked(useConnections).mockReturnValue({
      connections: [],
      loading: true,
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } as any)

    render(
      <TestWrapper>
        <TestComponent />
      </TestWrapper>
    )

    expect(screen.getByTestId('contacts-count')).toHaveTextContent('0')
    expect(mockIntegrationApp.integration).not.toHaveBeenCalled()
  })

  it('should not load contacts when no connections exist', () => {
    vi.mocked(useConnections).mockReturnValue({
      connections: [],
      loading: false,
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } as any)

    render(
      <TestWrapper>
        <TestComponent />
      </TestWrapper>
    )

    expect(screen.getByTestId('contacts-count')).toHaveTextContent('0')
    expect(mockIntegrationApp.integration).not.toHaveBeenCalled()
  })

  it('should throw error when useContacts is used outside provider', () => {
    // Suppress console.error for this test
    const consoleSpy = vi.spyOn(console, 'error').mockImplementation(() => { })

    expect(() => {
      render(<TestComponent />)
    }).toThrow('useContacts must be used within a ContactsProvider')

    consoleSpy.mockRestore()
  })
}) 