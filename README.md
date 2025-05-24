# CRM Contact Manager

This is a [Next.js](https://nextjs.org) project with [Clerk](https://clerk.com) authentication integration, bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Features

- ✅ Next.js 15 with App Router
- ✅ Clerk Authentication (Sign In/Sign Up/User Management)
- ✅ TypeScript support
- ✅ Tailwind CSS for styling
- ✅ Integration management dashboard
- ✅ Contact management system

## Getting Started

### 1. Environment Setup

Create a `.env.local` file in the root directory and add your Clerk keys:

```bash
# Get these values from https://dashboard.clerk.com/
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=pk_test_your_publishable_key_here
CLERK_SECRET_KEY=sk_test_your_secret_key_here

# Optional: Customize URLs
NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=/dashboard
NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=/dashboard
```

### 2. Install Dependencies

```bash
npm install --force
```

Note: We use `--force` to resolve peer dependency conflicts between React 19 and some testing libraries.

### 3. Run the Development Server

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### 4. Set Up Clerk

1. Go to [Clerk Dashboard](https://dashboard.clerk.com/)
2. Create a new application
3. Copy your publishable key and secret key
4. Add them to your `.env.local` file
5. Configure your sign-in and sign-up settings in the Clerk dashboard

## Authentication Features

- **Sign In/Sign Up**: Modal-based authentication using Clerk's components
- **User Management**: Built-in user profile management with UserButton
- **Protected Routes**: Authentication protection on all dashboard features
- **Server-side Auth**: Utilities for API routes and server components
- **Client-side Auth**: Utilities for client components

## File Structure

```
├── src/
│   ├── middleware.ts       # Clerk middleware for route protection
│   ├── app/
│   │   ├── layout.tsx      # Root layout with ClerkProvider
│   │   ├── page.tsx        # Main dashboard with auth protection
│   │   └── api/            # API routes
│   ├── lib/
│   │   ├── auth.ts         # Client-side auth utilities
│   │   └── server-auth.ts  # Server-side auth utilities
│   └── components/         # React components
```

## Authentication Utilities

### Server-side (use in API routes and server components):
```typescript
import { getAuth, getCurrentUser, isAuthenticated } from '@/lib/server-auth';
```

### Client-side (use in client components):
```typescript
import { getAuthToken } from '@/lib/auth';
```

## Learn More

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Clerk Documentation](https://clerk.com/docs) - learn about Clerk authentication.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Remember to add your Clerk environment variables to your Vercel deployment settings.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
