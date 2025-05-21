"use client";

import { Tabs, Tab } from '@/components/Common/Tabs';
import UserInfoTab from '@/components/User/UserInfoTab';
import ContactsTab from '@/components/Contacts/ContactsTab';
import ConnectorsTab from '@/components/Connectors/ConnectorsTab';

export default function Home() {
  return (
    <div className="min-h-screen text-gray-900 bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Integration App Connector</h1>
          <p className="mt-2 text-lg text-gray-600">Connect and manage your integrations</p>
        </div>

        <div className="bg-white rounded-lg shadow overflow-hidden">
          <Tabs defaultActiveTab={2}>
            <Tab label="User Information">
              <UserInfoTab />
            </Tab>
            <Tab label="Contacts">
              <ContactsTab />
            </Tab>
            <Tab label="Connectors">
              <div className="p-6 text-gray-900">
                <h2 className="text-xl font-semibold mb-6">Available Connectors</h2>
                <ConnectorsTab />
              </div>
            </Tab>
          </Tabs>
        </div>
      </div>
    </div>
  );
}
