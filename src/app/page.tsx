"use client";

import { useState } from 'react';
import { SignedIn, SignedOut, SignInButton } from '@clerk/nextjs';
import { Tabs, Tab } from '@/components/Common/Tabs';
import UserInfoTab from '@/components/User/UserInfoTab';
import ContactsTab from '@/components/Contacts/ContactsTab';
import ConnectorsTab from '@/components/Connectors/ConnectorsTab';

export default function Home() {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabChange = (index: number) => {
    setActiveTab(index);
    console.log('Tab changed to:', index);
  };

  return (
    <div className="min-h-screen text-gray-900 bg-gray-50 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto h-screen flex flex-col">

        <SignedOut>
          <div className="bg-white rounded-lg shadow p-8 text-center">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Welcome!</h2>
            <p className="text-gray-600 mb-6">
              Please sign in to access your integration dashboard and manage your connections.
            </p>
            <SignInButton mode="modal">
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md text-base font-medium">
                Get Started
              </button>
            </SignInButton>
          </div>
        </SignedOut>

        <SignedIn>
          <div className="bg-white rounded-lg shadow overflow-hidden flex-1 mb-4">
            <Tabs
              defaultActiveTab={activeTab}
              onTabChange={handleTabChange}
            >
              <Tab label="User Information">
                <UserInfoTab />
              </Tab>
              <Tab label="Contacts">
                <ContactsTab />
              </Tab>
              <Tab label="Connectors">
                <ConnectorsTab />
              </Tab>
            </Tabs>
          </div>
        </SignedIn>
      </div>
    </div>
  );
}
