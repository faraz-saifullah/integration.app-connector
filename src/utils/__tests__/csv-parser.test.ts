import { parseContactsCSV, prepareContactsForTransform, validateCSV } from '../csv-parser';

describe('CSV Parser Utility', () => {
  describe('validateCSV', () => {
    it('should validate correct CSV format', () => {
      const csvText = 'full name,email,phone\nJohn Doe,john@example.com,123-456-7890';
      const result = validateCSV(csvText);
      expect(result.isValid).toBe(true);
      expect(result.errors).toHaveLength(0);
    });

    it('should reject empty CSV', () => {
      const result = validateCSV('');
      expect(result.isValid).toBe(false);
      expect(result.errors).toContain('CSV file is empty');
    });

    it('should reject CSV without data rows', () => {
      const csvText = 'full name,email,phone';
      const result = validateCSV(csvText);
      expect(result.isValid).toBe(false);
      expect(result.errors).toContain('CSV must have at least a header row and one data row');
    });

    it('should reject CSV without name column', () => {
      const csvText = 'email,phone\njohn@example.com,123-456-7890';
      const result = validateCSV(csvText);
      expect(result.isValid).toBe(false);
      expect(result.errors).toContain('CSV must have a name column (name, full name, fullname, or contact name)');
    });

    it('should reject CSV without email column', () => {
      const csvText = 'full name,phone\nJohn Doe,123-456-7890';
      const result = validateCSV(csvText);
      expect(result.isValid).toBe(false);
      expect(result.errors).toContain('CSV must have an email column (email, email address, or e-mail)');
    });
  });

  describe('parseContactsCSV', () => {
    it('should parse valid CSV with standard headers', () => {
      const csvText = `full name,email,phone,company,pronouns
John Doe,john@example.com,123-456-7890,Acme Corp,he/him
Jane Smith,jane@example.com,098-765-4321,Tech Inc,she/her`;

      const result = parseContactsCSV(csvText);
      expect(result).toHaveLength(2);
      expect(result[0]).toEqual({
        fullName: 'John Doe',
        email: 'john@example.com',
        phone: '123-456-7890',
        companyName: 'Acme Corp',
        pronouns: 'he/him'
      });
    });

    it('should handle alternative header names', () => {
      const csvText = `name,email address,telephone,organization,pronoun
John Doe,john@example.com,123-456-7890,Acme Corp,he/him`;

      const result = parseContactsCSV(csvText);
      expect(result).toHaveLength(1);
      expect(result[0]).toEqual({
        fullName: 'John Doe',
        email: 'john@example.com',
        phone: '123-456-7890',
        companyName: 'Acme Corp',
        pronouns: 'he/him'
      });
    });

    it('should skip rows with missing required fields', () => {
      const csvText = `full name,email,phone
John Doe,john@example.com,123-456-7890
,jane@example.com,098-765-4321
Bob Smith,,555-555-5555`;

      const result = parseContactsCSV(csvText);
      expect(result).toHaveLength(1);
      expect(result[0].fullName).toBe('John Doe');
    });

    it('should handle empty CSV', () => {
      const result = parseContactsCSV('');
      expect(result).toHaveLength(0);
    });

    it('should handle CSV with only headers', () => {
      const csvText = 'full name,email,phone';
      const result = parseContactsCSV(csvText);
      expect(result).toHaveLength(0);
    });
  });

  describe('prepareContactsForTransform', () => {
    it('should convert contacts to required format', () => {
      const contacts = [
        {
          fullName: 'John Doe',
          email: 'john@example.com',
          phone: '123-456-7890',
          companyName: 'Acme Corp',
          pronouns: 'he/him'
        },
        {
          fullName: 'Jane Smith',
          email: 'jane@example.com'
          // Missing optional fields
        }
      ];

      const result = prepareContactsForTransform(contacts);
      expect(result).toHaveLength(2);
      expect(result[0]).toEqual({
        fullName: 'John Doe',
        email: 'john@example.com',
        phone: '123-456-7890',
        companyName: 'Acme Corp',
        pronouns: 'he/him'
      });
      expect(result[1]).toEqual({
        fullName: 'Jane Smith',
        email: 'jane@example.com',
        phone: '',
        companyName: '',
        pronouns: ''
      });
    });

    it('should filter out contacts missing required fields', () => {
      const contacts = [
        {
          fullName: 'John Doe',
          email: 'john@example.com'
        },
        {
          fullName: 'Jane Smith'
          // Missing email
        },
        {
          email: 'bob@example.com'
          // Missing fullName
        }
      ];

      const result = prepareContactsForTransform(contacts);
      expect(result).toHaveLength(1);
      expect(result[0].fullName).toBe('John Doe');
    });
  });
}); 