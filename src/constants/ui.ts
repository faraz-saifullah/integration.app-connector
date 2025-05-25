// Loading states
export const LOADING_MESSAGES = {
  CONNECTIONS: "Loading connected CRMs...",
  CONTACTS: "Loading contacts...",
  USER: "Loading user information...",
  CREATING_CONTACT: "Creating contact...",
} as const;

// UI Messages
export const UI_MESSAGES = {
  NO_CRMS_CONNECTED: "No CRMs Connected",
  NO_CRMS_DESCRIPTION: "Please connect to at least one CRM in the Connectors tab before creating contacts.",
  NO_USER_INFO: "No user information available",
  NO_USER_INFO_DESCRIPTION: "Please try refreshing the page.",
  WELCOME_TITLE: "Welcome!",
  WELCOME_DESCRIPTION: "Please sign in to access your integration dashboard and manage your connections.",
  GET_STARTED: "Get Started",
} as const;

// Form Labels
export const FORM_LABELS = {
  SELECT_CRMS: "Select CRMs",
  CREATE_CONTACT: "Create Contact",
  CREATING: "Creating...",
  CANCEL: "Cancel",
  CLOSE: "Close",
} as const;

// Tab Labels
export const TAB_LABELS = {
  USER_INFORMATION: "User Information",
  CONTACTS: "Contacts",
  CONNECTORS: "Connectors",
} as const; 