import { useState, useEffect } from 'react';
import CreateContactForm from './CreateContactForm'; 
import { Button } from '@/components/Common/Button'; 

export default function ContactsTab() {
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);
  const [contacts, setContacts] = useState<any[]>([]); 

  useEffect(() => {
    console.log('Fetching initial contacts...');
    // In a real app, you would fetch contacts from your backend or SDK here
    // Example: setContacts(fetchedContacts);
  }, []);

  const handleOpenCreateModal = () => {
    setIsCreateModalOpen(true);
  };

  const handleCloseCreateModal = () => {
    setIsCreateModalOpen(false);
  };

  const handleContactCreated = (newContact: any) => {
    console.log('New contact created in ContactsTab:', newContact);
    setContacts((prevContacts) => [...prevContacts, newContact]);
    // Optionally, show a success message or trigger other UI updates
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold">Contacts</h2>
        <Button onClick={handleOpenCreateModal} variant="primary">
          Create New Contact
        </Button>
      </div>
      <p className="text-gray-600 mb-4">Your contacts will be displayed here.</p>
      {/* Placeholder for displaying contacts list */}
      {contacts.length > 0 ? (
        <ul className="space-y-2">
          {contacts.map((contact, index) => (
            <li key={contact.id || index} className="p-2 border rounded-md">
              {contact.fullName || 'N/A'} - {contact.email || 'N/A'}
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-gray-500">No contacts yet. Create one!</p>
      )}

      <CreateContactForm
        isOpen={isCreateModalOpen}
        onClose={handleCloseCreateModal}
        onSuccess={handleContactCreated}
      />
    </div>
  );
}
