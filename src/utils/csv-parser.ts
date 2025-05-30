export interface ContactFormData {
  fullName?: string;
  email?: string;
  phone?: string;
  companyName?: string;
  pronouns?: string;
}

export interface RequiredContactFormData {
  fullName: string;
  email: string;
  phone: string;
  companyName: string;
  pronouns: string;
}

/**
 * Parses CSV text and converts it to contact form data
 * Supports flexible header naming (e.g., "name", "full name", "fullname")
 */
export const parseContactsCSV = (csvText: string): ContactFormData[] => {
  const lines = csvText.split('\n').filter(line => line.trim());
  if (lines.length < 2) return [];

  const headers = lines[0].split(',').map(h => h.trim().toLowerCase());
  const contacts: ContactFormData[] = [];

  for (let i = 1; i < lines.length; i++) {
    const values = lines[i].split(',').map(v => v.trim());
    if (values.length !== headers.length) continue;

    const contact: ContactFormData = {};
    
    headers.forEach((header, index) => {
      const value = values[index];
      if (!value) return; // Skip empty values

      // Map CSV headers to form field names
      switch (header) {
        case 'name':
        case 'full name':
        case 'fullname':
        case 'contact name':
          contact.fullName = value;
          break;
        case 'email':
        case 'email address':
        case 'e-mail':
          contact.email = value;
          break;
        case 'phone':
        case 'phone number':
        case 'telephone':
        case 'tel':
          contact.phone = value;
          break;
        case 'company':
        case 'company name':
        case 'organization':
        case 'org':
          contact.companyName = value;
          break;
        case 'pronouns':
        case 'pronoun':
          contact.pronouns = value;
          break;
      }
    });

    // Only add if we have at least fullName and email (required fields)
    if (contact.fullName && contact.email) {
      contacts.push(contact);
    }
  }

  return contacts;
};

/**
 * Converts parsed contacts to the format required by transformFormDataToPayload
 * Ensures all fields have values (empty string for missing optional fields)
 */
export const prepareContactsForTransform = (contacts: ContactFormData[]): RequiredContactFormData[] => {
  return contacts
    .filter(contact => contact.fullName && contact.email) // Double-check required fields
    .map(contact => ({
      fullName: contact.fullName!,
      email: contact.email!,
      phone: contact.phone || '',
      companyName: contact.companyName || '',
      pronouns: contact.pronouns || '',
    }));
};

/**
 * Validates CSV content and returns validation result
 */
export const validateCSV = (csvText: string): { isValid: boolean; errors: string[] } => {
  const errors: string[] = [];
  
  if (!csvText.trim()) {
    errors.push('CSV file is empty');
    return { isValid: false, errors };
  }

  const lines = csvText.split('\n').filter(line => line.trim());
  
  if (lines.length < 2) {
    errors.push('CSV must have at least a header row and one data row');
    return { isValid: false, errors };
  }

  const headers = lines[0].split(',').map(h => h.trim().toLowerCase());
  
  // Check for required headers
  const hasNameHeader = headers.some(h => ['name', 'full name', 'fullname', 'contact name'].includes(h));
  const hasEmailHeader = headers.some(h => ['email', 'email address', 'e-mail'].includes(h));
  
  if (!hasNameHeader) {
    errors.push('CSV must have a name column (name, full name, fullname, or contact name)');
  }
  
  if (!hasEmailHeader) {
    errors.push('CSV must have an email column (email, email address, or e-mail)');
  }

  return { isValid: errors.length === 0, errors };
}; 