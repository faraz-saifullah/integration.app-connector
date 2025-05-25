import { auth, currentUser } from "@clerk/nextjs/server";

/**
 * Get the current user's authentication status
 * Use this in server components or API routes
 */
export async function getAuth() {
  return await auth();
}

/**
 * Get the current user's full profile
 * Use this in server components or API routes
 */
export async function getCurrentUser() {
  return await currentUser();
}

/**
 * Check if user is authenticated
 * Use this in server components or API routes
 */
export async function isAuthenticated() {
  const { userId } = await auth();
  return !!userId;
}
