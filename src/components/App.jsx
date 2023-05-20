import React, { useState, useEffect } from 'react';
import ContactForm from './contactForm/ContactForm';
import ContactList from './contactList/ContactList';
import Filter from './filter/Filter';

const App = () => {
  const [contacts, setContacts] = useState([]);
  const [filter, setFilter] = useState('');
  const addContact = newContact => {
    setContacts(prevContacts => [...prevContacts, newContact]);
  };
  const deleteContact = contactId => {
    setContacts(prevContacts =>
      prevContacts.filter(contact => contact.id !== contactId)
    );
  };
  const handleFilterChange = e => {
    setFilter(e.currentTarget.value);
  };
  const getFilteredContacts = () => {
    if (contacts !== null) {
      const filteredContacts = contacts.filter(contact =>
        contact.name.toLowerCase().includes(filter.toLowerCase())
      );
      return filteredContacts;
    }
    return [];
  };
  useEffect(() => {
    const parsedContacts = JSON.parse(localStorage.getItem('contacts'));
    setContacts(parsedContacts);
    if (parsedContacts) {
      setContacts(parsedContacts);
    }
  }, []);
  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);
  return (
    <div className="container">
      <h1>Phonebook</h1>
      <ContactForm onSubmit={addContact} contactList={contacts} />

      <h2>Contacts</h2>
      <Filter value={filter} onChange={handleFilterChange} />
      <ContactList
        contacts={getFilteredContacts()}
        onDeleteContact={deleteContact}
      />
    </div>
  );
};

export default App;
