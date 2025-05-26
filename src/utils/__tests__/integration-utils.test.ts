import { describe, it, expect } from 'vitest'
import {
  isConnectionAvailable,
  getAvailableCRMs,
  transformFormDataToPayload,
  handleIntegrationError,
  getConnectedProviders,
} from '../integration-utils'
import { CRM_OPTIONS, INTEGRATION_PROVIDERS } from '@/constants'
import type { Connection, ContactFormData } from '@/types'

describe('integration-utils', () => {
  describe('isConnectionAvailable', () => {
    it('should return true when connection exists for the CRM', () => {
      const connections: Connection[] = [
        { integration: { key: 'hubspot' } },
        { integration: { key: 'pipedrive' } },
      ]

      expect(isConnectionAvailable('hubspot', connections, false)).toBe(true)
      expect(isConnectionAvailable('pipedrive', connections, false)).toBe(true)
    })

    it('should return false when connection does not exist', () => {
      const connections: Connection[] = [
        { integration: { key: 'hubspot' } },
      ]

      expect(isConnectionAvailable('pipedrive', connections, false)).toBe(false)
    })

    it('should return false when connections are loading', () => {
      const connections: Connection[] = [
        { integration: { key: 'hubspot' } },
      ]

      expect(isConnectionAvailable('hubspot', connections, true)).toBe(false)
    })

    it('should handle empty connections array', () => {
      expect(isConnectionAvailable('hubspot', [], false)).toBe(false)
    })

    it('should handle connections without integration key', () => {
      const connections: Connection[] = [
        { integration: undefined },
        {},
      ]

      expect(isConnectionAvailable('hubspot', connections, false)).toBe(false)
    })
  })

  describe('getAvailableCRMs', () => {
    it('should return only connected CRMs', () => {
      const connections: Connection[] = [
        { integration: { key: 'hubspot' } },
      ]

      const result = getAvailableCRMs(connections, CRM_OPTIONS)

      expect(result).toHaveLength(1)
      expect(result[0].id).toBe('hubspot')
      expect(result[0].name).toBe('HubSpot')
    })

    it('should return empty array when no connections exist', () => {
      const result = getAvailableCRMs([], CRM_OPTIONS)

      expect(result).toEqual([])
    })

    it('should handle connections that do not match CRM options', () => {
      const connections: Connection[] = [
        { integration: { key: 'unknown-crm' } },
      ]

      const result = getAvailableCRMs(connections, CRM_OPTIONS)

      expect(result).toEqual([])
    })

    it('should return multiple connected CRMs', () => {
      const connections: Connection[] = [
        { integration: { key: 'hubspot' } },
        { integration: { key: 'pipedrive' } },
      ]

      const result = getAvailableCRMs(connections, CRM_OPTIONS)

      expect(result).toHaveLength(2)
      expect(result.map(crm => crm.id)).toContain('hubspot')
      expect(result.map(crm => crm.id)).toContain('pipedrive')
    })
  })

  describe('transformFormDataToPayload', () => {
    it('should transform complete form data correctly', () => {
      const formData: ContactFormData = {
        fullName: 'John Doe',
        email: 'john@example.com',
        phone: '+1234567890',
        companyName: 'Acme Corp',
        pronouns: 'he/him',
      }

      const result = transformFormDataToPayload(formData)

      expect(result).toEqual({
        name: 'John Doe',
        email: 'john@example.com',
        phone: '+1234567890',
        company: 'Acme Corp',
        pronouns: 'he/him',
      })
    })

    it('should handle missing optional fields', () => {
      const formData: ContactFormData = {
        fullName: 'Jane Doe',
        email: 'jane@example.com',
        phone: '',
        companyName: '',
        pronouns: '',
      }

      const result = transformFormDataToPayload(formData)

      expect(result).toEqual({
        name: 'Jane Doe',
        email: 'jane@example.com',
        phone: '',
        company: '',
        pronouns: '',
      })
    })

    it('should preserve all field mappings', () => {
      const formData: ContactFormData = {
        fullName: 'Test User',
        email: 'test@example.com',
        phone: '555-0123',
        companyName: 'Test Company',
        pronouns: 'they/them',
      }

      const result = transformFormDataToPayload(formData)

      expect(Object.keys(result)).toEqual(['name', 'email', 'phone', 'company', 'pronouns'])
    })
  })

  describe('handleIntegrationError', () => {
    it('should handle error with message property', () => {
      const error = new Error('Network connection failed')

      const result = handleIntegrationError(error, 'pipedrive')

      expect(result).toBe('Network connection failed')
    })

    it('should handle connection not found errors', () => {
      const error = new Error('Connection not found')

      const result = handleIntegrationError(error, 'hubspot')

      expect(result).toBe('hubspot connection not available')
    })

    it('should handle unknown error types', () => {
      const error = 'String error'

      const result = handleIntegrationError(error, 'hubspot')

      expect(result).toBe('Unknown error occurred with hubspot')
    })

    it('should handle null/undefined errors', () => {
      expect(handleIntegrationError(null, 'hubspot')).toBe('Unknown error occurred with hubspot')
      expect(handleIntegrationError(undefined, 'pipedrive')).toBe('Unknown error occurred with pipedrive')
    })
  })

  describe('getConnectedProviders', () => {
    it('should return array of connected provider keys', () => {
      const connections: Connection[] = [
        { integration: { key: 'hubspot' } },
        { integration: { key: 'pipedrive' } },
      ]

      const result = getConnectedProviders(connections)

      expect(result).toEqual([INTEGRATION_PROVIDERS.HUBSPOT, INTEGRATION_PROVIDERS.PIPEDRIVE])
    })

    it('should handle empty connections', () => {
      const result = getConnectedProviders([])

      expect(result).toEqual([])
    })

    it('should return only hubspot when only hubspot is connected', () => {
      const connections: Connection[] = [
        { integration: { key: 'hubspot' } },
      ]

      const result = getConnectedProviders(connections)

      expect(result).toEqual([INTEGRATION_PROVIDERS.HUBSPOT])
    })

    it('should return only pipedrive when only pipedrive is connected', () => {
      const connections: Connection[] = [
        { integration: { key: 'pipedrive' } },
      ]

      const result = getConnectedProviders(connections)

      expect(result).toEqual([INTEGRATION_PROVIDERS.PIPEDRIVE])
    })

    it('should handle connections without integration keys', () => {
      const connections: Connection[] = [
        { integration: undefined },
        {},
      ]

      const result = getConnectedProviders(connections)

      expect(result).toEqual([])
    })
  })
}) 