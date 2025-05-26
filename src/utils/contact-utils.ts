import { Contact, ContactRecord, IntegrationProvider } from '@/types';

/**
 * Transforms a contact record from the API into our Contact interface
 */
export function transformContactRecord(
  contact: ContactRecord,
  provider: IntegrationProvider
): Contact {
  return {
    id: contact.id,
    name: contact.fields?.name || "Unnamed Contact",
    email: contact.fields?.email,
    [`${provider}Url`]: contact.uri,
    updatedAt: contact.updatedTime || "",
  };
}

/**
 * Merges contacts from multiple providers, removing duplicates based on email
 */
export function mergeContacts(
  contacts1: Contact[],
  contacts2: Contact[]
): Contact[] {
  const contactMap = new Map<string, Contact>();

  // Add contacts from first provider
  contacts1.forEach((contact) => {
    const key = contact.email || contact.id;
    contactMap.set(key, contact);
  });

  // Merge contacts from second provider
  contacts2.forEach((contact) => {
    const key = contact.email || contact.id;
    const existing = contactMap.get(key);
    
    if (existing) {
      // Merge URLs from both providers
      contactMap.set(key, {
        ...existing,
        ...contact,
        // Preserve URLs from both providers
        hubspotUrl: existing.hubspotUrl || contact.hubspotUrl,
        pipedriveUrl: existing.pipedriveUrl || contact.pipedriveUrl,
      });
    } else {
      contactMap.set(key, contact);
    }
  });

  return Array.from(contactMap.values()).sort((a, b) => 
    new Date(b.updatedAt).getTime() - new Date(a.updatedAt).getTime()
  );
}

/**
 * Checks if two contact arrays are equal
 */
export function areContactsEqual(
  contacts1: Contact[],
  contacts2: Contact[]
): boolean {
  if (contacts1.length !== contacts2.length) return false;
  
  return contacts1.every((contact1, index) => {
    const contact2 = contacts2[index];
    return (
      contact1.id === contact2.id &&
      contact1.name === contact2.name &&
      contact1.email === contact2.email &&
      contact1.updatedAt === contact2.updatedAt
    );
  });
}

/**
 * Formats a date string for display in the contacts table
 */
export function formatContactDate(dateString: string): string {
  const date = new Date(dateString);
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    timeZone: "Asia/Karachi",
  });
}

/**
 * Validates contact form data
 */
export function validateContactForm(data: {
  fullName: string;
  email: string;
  [key: string]: string;
}): { isValid: boolean; errors: string[] } {
  const errors: string[] = [];

  if (!data.fullName.trim()) {
    errors.push("Full name is required");
  }

  if (!data.email.trim()) {
    errors.push("Email is required");
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
    errors.push("Please enter a valid email address");
  }

  return {
    isValid: errors.length === 0,
    errors,
  };
} 