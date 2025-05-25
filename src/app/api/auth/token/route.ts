import { NextResponse } from "next/server";
import jwt from "jsonwebtoken";
import { getCurrentUser, getAuth } from "@/lib/server-auth";

// This is a secure server-side route that generates a JWT token for the Integration.app SDK
export async function GET() {
  try {
    // Check if user is authenticated
    const { userId } = await getAuth();
    if (!userId) {
      return NextResponse.json(
        { error: "Unauthorized - Please sign in" },
        { status: 401 }
      );
    }

    // Get the current user information from Clerk
    const user = await getCurrentUser();
    if (!user) {
      return NextResponse.json({ error: "User not found" }, { status: 404 });
    }

    const workspaceKey = process.env.NEXT_PUBLIC_WORKSPACE_KEY;
    const workspaceSecret = process.env.WORKSPACE_SECRET;

    if (!workspaceKey || !workspaceSecret) {
      console.error("Missing required environment variables");
      return NextResponse.json(
        { error: "Server configuration error" },
        { status: 500 }
      );
    }

    // Use real user information from Clerk
    const userFullName =
      user.fullName ||
      `${user.firstName || ""} ${user.lastName || ""}`.trim() ||
      "Unknown User";
    const userEmail = user.emailAddresses?.[0]?.emailAddress || "";

    // Create the token payload with real user data
    const payload = {
      id: userId, // Real Clerk user ID
      name: userFullName, // Real user's full name
      email: userEmail, // Real user's email
      // Any additional user fields you want to include
      fields: {
        username: user.username,
        createdAt: user.createdAt,
        // Add any custom fields you need
      },
    };

    // Sign the token with your workspace secret
    const token = jwt.sign(payload, workspaceSecret, {
      issuer: workspaceKey,
      expiresIn: "1h", // Token expires in 1 hour
      algorithm: "HS256",
    });

    return NextResponse.json({ token });
  } catch (error) {
    console.error("Error generating token:", error);
    return NextResponse.json(
      { error: "Failed to generate authentication token" },
      { status: 500 }
    );
  }
}
