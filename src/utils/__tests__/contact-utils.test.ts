import { describe, it, expect } from 'vitest'
import {
  transformContactRecord,
  mergeContacts,
  areContactsEqual,
  validateContactForm,
  formatContactDate,
} from '../contact-utils'
import type { ContactRecord, Contact } from '@/types'

describe('contact-utils', () => {
  describe('transformContactRecord', () => {
    it('should transform a complete contact record correctly', () => {
      const record: ContactRecord = {
        id: '123',
        fields: {
          name: 'John Doe',
          email: 'john@example.com',
        },
        uri: 'https://crm.example.com/contact/123',
        updatedTime: '2024-01-01T00:00:00Z',
      }

      const result = transformContactRecord(record, 'hubspot')

      expect(result).toEqual({
        id: '123',
        name: 'John Doe',
        email: 'john@example.com',
        hubspotUrl: 'https://crm.example.com/contact/123',
        updatedAt: '2024-01-01T00:00:00Z',
      })
    })

    it('should handle missing optional fields', () => {
      const record: ContactRecord = {
        id: '123',
        fields: {
          name: 'Jane Doe',
        },
      }

      const result = transformContactRecord(record, 'pipedrive')

      expect(result).toEqual({
        id: '123',
        name: 'Jane Doe',
        email: undefined,
        pipedriveUrl: undefined,
        updatedAt: '',
      })
    })

    it('should handle missing fields object', () => {
      const record: ContactRecord = {
        id: '123',
      }

      const result = transformContactRecord(record, 'hubspot')

      expect(result.name).toBe('Unnamed Contact')
      expect(result.email).toBeUndefined()
    })
  })

  describe('mergeContacts', () => {
    it('should merge contacts from different sources', () => {
      const hubspotContacts: Contact[] = [
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
          hubspotUrl: 'https://hubspot.com/contact/2',
          updatedAt: '2024-01-01T00:00:00Z',
        },
      ]

      const pipedriveContacts: Contact[] = [
        {
          id: '3',
          name: 'Bob Johnson',
          email: 'bob@example.com',
          pipedriveUrl: 'https://pipedrive.com/contact/3',
          updatedAt: '2024-01-02T00:00:00Z',
        },
        {
          id: '4',
          name: 'John Doe',
          email: 'john@example.com', // Same email as contact 1
          pipedriveUrl: 'https://pipedrive.com/contact/4',
          updatedAt: '2024-01-03T00:00:00Z',
        },
      ]

      const result = mergeContacts(hubspotContacts, pipedriveContacts)

      expect(result).toHaveLength(3) // John Doe should be merged
      
      const johnDoe = result.find(c => c.email === 'john@example.com')
      expect(johnDoe?.hubspotUrl).toBe('https://hubspot.com/contact/1')
      expect(johnDoe?.pipedriveUrl).toBe('https://pipedrive.com/contact/4')
    })

    it('should handle empty arrays', () => {
      expect(mergeContacts([], [])).toEqual([])
      
      const contacts: Contact[] = [{
        id: '1',
        name: 'Test',
        email: 'test@example.com',
        updatedAt: '2024-01-01T00:00:00Z',
      }]
      
      expect(mergeContacts(contacts, [])).toHaveLength(1)
      expect(mergeContacts([], contacts)).toHaveLength(1)
    })

    it('should sort contacts by updatedAt in descending order', () => {
      const contacts1: Contact[] = [{
        id: '1',
        name: 'Old Contact',
        email: 'old@example.com',
        updatedAt: '2024-01-01T00:00:00Z',
      }]

      const contacts2: Contact[] = [{
        id: '2',
        name: 'New Contact',
        email: 'new@example.com',
        updatedAt: '2024-01-02T00:00:00Z',
      }]

      const result = mergeContacts(contacts1, contacts2)
      
      expect(result[0].name).toBe('New Contact')
      expect(result[1].name).toBe('Old Contact')
    })
  })

  describe('areContactsEqual', () => {
    const baseContacts: Contact[] = [
      {
        id: '1',
        name: 'John Doe',
        email: 'john@example.com',
        updatedAt: '2024-01-01T00:00:00Z',
      },
      {
        id: '2',
        name: 'Jane Smith',
        email: 'jane@example.com',
        updatedAt: '2024-01-01T00:00:00Z',
      },
    ]

    it('should return true for identical contact arrays', () => {
      const contacts1 = [...baseContacts]
      const contacts2 = [...baseContacts]

      expect(areContactsEqual(contacts1, contacts2)).toBe(true)
    })

    it('should return false for arrays with different lengths', () => {
      const contacts1 = [...baseContacts]
      const contacts2 = [baseContacts[0]]

      expect(areContactsEqual(contacts1, contacts2)).toBe(false)
    })

    it('should return false for contacts with different properties', () => {
      const contacts1 = [...baseContacts]
      const contacts2 = [
        { ...baseContacts[0], name: 'Different Name' },
        baseContacts[1],
      ]

      expect(areContactsEqual(contacts1, contacts2)).toBe(false)
    })

    it('should handle empty arrays', () => {
      expect(areContactsEqual([], [])).toBe(true)
    })
  })

  describe('validateContactForm', () => {
    it('should return valid for complete form data', () => {
      const formData = {
        fullName: 'John Doe',
        email: 'john@example.com',
        phone: '+1234567890',
        companyName: 'Acme Corp',
        pronouns: 'he/him',
      }

      const result = validateContactForm(formData)

      expect(result.isValid).toBe(true)
      expect(result.errors).toEqual([])
    })

    it('should return errors for missing required fields', () => {
      const formData = {
        fullName: '',
        email: '',
      }

      const result = validateContactForm(formData)

      expect(result.isValid).toBe(false)
      expect(result.errors).toContain('Full name is required')
      expect(result.errors).toContain('Email is required')
    })

    it('should validate email format', () => {
      const formData = {
        fullName: 'John Doe',
        email: 'invalid-email',
      }

      const result = validateContactForm(formData)

      expect(result.isValid).toBe(false)
      expect(result.errors).toContain('Please enter a valid email address')
    })

    it('should allow valid email formats', () => {
      const formData = {
        fullName: 'John Doe',
        email: 'john.doe+test@example.com',
      }

      const result = validateContactForm(formData)

      expect(result.isValid).toBe(true)
      expect(result.errors).toEqual([])
    })
  })

  describe('formatContactDate', () => {
    it('should format ISO date string correctly', () => {
      const date = '2024-01-15T10:30:00Z'
      const result = formatContactDate(date)

      // The function formats with Asia/Karachi timezone
      expect(result).toMatch(/January 15, 2024/)
    })

    it('should handle different date formats', () => {
      const date = '2024-12-25T23:59:59.999Z'
      const result = formatContactDate(date)

      expect(result).toMatch(/December (25|26), 2024/)
    })

    it('should handle invalid dates gracefully', () => {
      const result = formatContactDate('invalid-date')
      
      // Invalid dates will still return a string, but it might be "Invalid Date"
      expect(typeof result).toBe('string')
    })
  })
}) 