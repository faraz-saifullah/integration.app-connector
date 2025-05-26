# CRM Contact Manager

A Next.js application that allows users to connect their CRM systems (HubSpot and Pipedrive) and create contacts through a unified interface. Built with modern React, TypeScript, and integration.app for seamless CRM connectivity.

## 🎯 Features

- **Multi-CRM Support**: Connect and manage contacts across HubSpot and Pipedrive
- **Unified Contact Creation**: Single form to create contacts in multiple CRMs simultaneously
- **Real-time Sync**: View and manage contacts from all connected CRMs in one place
- **Field Mapping**: Configure custom field mappings for each CRM (pronouns, etc.)
- **Secure Authentication**: Clerk-powered user authentication and session management
- **Responsive Design**: Modern, mobile-friendly interface built with Tailwind CSS

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ 
- npm, yarn, or pnpm
- Clerk account (for authentication)
- Integration.app account (for CRM connections)

### 1. Clone and Install

```bash
git clone <repository-url>
cd integration.app-connector
npm install
```

### 2. Environment Variables

Create a `.env.local` file in the root directory with the following variables:

```bash
# Clerk Authentication (Required)
# Get these from https://dashboard.clerk.com/
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=pk_test_your_publishable_key_here
CLERK_SECRET_KEY=sk_test_your_secret_key_here

# Integration.app Configuration (Required)
# Get these from https://app.integration.app/
NEXT_PUBLIC_WORKSPACE_KEY=your_workspace_key_here
WORKSPACE_SECRET=your_workspace_secret_here

# Application Configuration (Optional)
NEXT_PUBLIC_BASE_URL=http://localhost:3000

# Clerk URL Configuration (Optional)
NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=/
NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=/
```

### 3. Setup Instructions

#### Clerk Setup:
1. Go to [Clerk Dashboard](https://dashboard.clerk.com/)
2. Create a new application
3. Copy your publishable key and secret key
4. Add them to your `.env.local` file

#### Integration.app Setup:
1. Go to [Integration.app Dashboard](https://app.integration.app/)
2. Create a new workspace
3. Copy your workspace key and secret
4. Add them to your `.env.local` file
5. Enable HubSpot and Pipedrive integrations in your workspace

### 4. Run the Application

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the application.

## 📱 Usage

### 1. Authentication
- Sign up or sign in using the authentication modal
- User information is managed through Clerk

### 2. Connect CRMs
- Navigate to the "Connectors" tab
- Click "Connect" for HubSpot or Pipedrive
- Follow the OAuth flow to authorize the connection
- Configure field mappings for custom fields (like pronouns)

### 3. Create Contacts
- Go to the "Contacts" tab
- Click "Create Contact"
- Fill out the form with:
  - Full Name (required)
  - Email (required)
  - Phone
  - Company Name
  - Pronouns
- Select which CRMs to create the contact in
- Click "Create Contact"
- View the created contact links

### 4. Manage Contacts
- View all contacts from connected CRMs
- Search and filter contacts
- Access direct links to contacts in their respective CRMs
- Refresh contact data manually

## 🏗️ Architecture

### Tech Stack
- **Frontend**: Next.js 15 with App Router, React 18, TypeScript
- **Styling**: Tailwind CSS with custom components
- **Authentication**: Clerk
- **CRM Integration**: Integration.app React SDK
- **State Management**: React Context API
- **UI Components**: Custom components with Headless UI

### Project Structure
```
src/
├── app/                    # Next.js App Router pages
├── components/             # React components
│   ├── Common/            # Reusable UI components
│   ├── Connectors/        # CRM connection components
│   ├── Contacts/          # Contact management components
│   └── User/              # User profile components
├── contexts/              # React Context providers
├── utils/                 # Utility functions
├── types/                 # TypeScript type definitions
├── constants/             # Application constants
├── config/                # Configuration files
└── providers/             # App-level providers
```

### Key Features Implementation

#### Contact Creation Flow
1. User selects target CRMs
2. Form validation ensures required fields
3. Parallel API calls to selected CRMs
4. Success/error handling with user feedback
5. Automatic contact list refresh

#### CRM Integration
- OAuth-based connection flow
- Field mapping configuration
- Real-time connection status
- Error handling and retry logic

#### Data Management
- Unified contact interface across CRMs
- Duplicate detection and merging
- Optimistic UI updates
- Efficient data fetching and caching

## 🔧 Development

### Available Scripts

```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint
npm run type-check   # Run TypeScript checks
```

### Code Quality
- TypeScript for type safety
- ESLint for code linting
- Prettier for code formatting
- Modular component architecture
- Custom hooks for reusable logic

## 🚀 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Add environment variables in Vercel dashboard
4. Deploy automatically on push

### Environment Variables for Production
Make sure to add all the environment variables from `.env.local` to your production environment.

## 🔍 Troubleshooting

### Common Issues

**Authentication Errors**
- Verify Clerk keys are correct
- Check that Clerk domain settings match your deployment URL

**Integration Errors**
- Ensure Integration.app workspace is properly configured
- Verify CRM integrations are enabled in your workspace
- Check that OAuth redirect URLs are configured correctly

**Connection Issues**
- Verify environment variables are set correctly
- Check browser console for detailed error messages
- Ensure CRM accounts have proper permissions

## 📝 License

This project is built for demonstration purposes as part of a technical assessment.

## 🤝 Support

For questions or issues, please refer to the documentation or create an issue in the repository.
