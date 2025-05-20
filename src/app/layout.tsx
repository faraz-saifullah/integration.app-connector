'use client';

import { Geist, Geist_Mono } from "next/font/google";
import { IntegrationProvider } from "@/providers/IntegrationProvider";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// For client components, we don't need to export metadata
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <title>CRM Contact Manager</title>
        <meta name="description" content="Create and manage contacts across multiple CRMs" />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} font-sans`}>
        <IntegrationProvider>
          <main className="min-h-screen bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
              {children}
            </div>
          </main>
        </IntegrationProvider>
      </body>
    </html>
  );
}
