import { NextResponse } from "next/server";
import jwt from "jsonwebtoken";

// This is a secure server-side route that generates a JWT token for the Integration.app SDK
export async function GET() {
  try {
    const workspaceKey = process.env.NEXT_PUBLIC_WORKSPACE_KEY;
    const workspaceSecret = process.env.WORKSPACE_SECRET;

    if (!workspaceKey || !workspaceSecret) {
      console.error("Missing required environment variables");
      return NextResponse.json(
        { error: "Server configuration error" },
        { status: 500 }
      );
    }

    // For demo purposes, we're using a static user ID and name
    // In a real app, you would get this from your authentication system
    const userId = "demo-saas-customer";
    const userName = "Demo SaaS Customer";

    // Create the token payload
    const payload = {
      id: userId,
      name: userName,
      // Any additional user fields you want to include
      fields: {
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
