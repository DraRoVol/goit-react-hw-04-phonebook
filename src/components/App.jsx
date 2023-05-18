import { Component } from 'react';
import ContactForm from './contactForm/ContactForm';
import ContactList from './contactList/ContactList';
import Filter from './filter/Filter';

class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };
  addContact = newContact => {
    this.setState(prevState => {
      const updatedContacts = Array.isArray(prevState.contacts)
        ? [...prevState.contacts, newContact]
        : [newContact];
      return { contacts: updatedContacts };
    });
  };
  deleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };
  handleFilterChange = e => {
    this.setState({ filter: e.currentTarget.value });
  };
  getFilteredContacts() {
    const { contacts, filter } = this.state;
    if (contacts !== null) {
      const filteredContacts = contacts.filter(contact => {
        return contact.name.toLowerCase().includes(filter.toLowerCase());
      });
      return filteredContacts;
    }
    return [];
  }
  componentDidMount() {
    const parsedContacts = JSON.parse(localStorage.getItem('contacts'));
    this.setState({ contacts: parsedContacts });
    if (parsedContacts) {
      this.setState({ contacts: parsedContacts });
    }
  }
  componentDidUpdate(prevProps, prevState) {
    if (this.state.contacts !== prevState.contacts) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }
  }
  render() {
    return (
      <div className="container">
        <h1>Phonebook</h1>
        <ContactForm
          onSubmit={this.addContact}
          contactList={this.state.contacts}
        />

        <h2>Contacts</h2>
        <Filter value={this.state.filter} onChange={this.handleFilterChange} />
        <ContactList
          contacts={this.getFilteredContacts()}
          onDeleteContact={this.deleteContact}
        />
      </div>
    );
  }
}

export default App;
