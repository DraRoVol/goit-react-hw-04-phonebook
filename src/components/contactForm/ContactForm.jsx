import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import cssModule from './ContactForm.module.css';

class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };
  handleNameChange = e => {
    this.setState({ name: e.currentTarget.value });
  };
  handleNumberChange = e => {
    this.setState({ number: e.currentTarget.value });
  };
  handleSubmit = e => {
    e.preventDefault();
    const { name, number } = this.state;
    const nameList = this.props.contactList
      ? this.props.contactList.map(con => con.name)
      : [];
    if (nameList.includes(name.trim())) {
      alert(`${name} is already in contacts`);
    } else {
      const newContact = {
        id: nanoid(),
        name: name.trim(),
        number: number.trim(),
      };
      this.props.onSubmit(newContact);
      this.setState({ name: '', number: '' });
    }
  };
  render() {
    return (
      <form onSubmit={this.handleSubmit} className={cssModule.form}>
        <label htmlFor="nameInput" className={cssModule.label}>
          Name
        </label>
        <input
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          id="nameInput"
          value={this.state.name}
          onChange={this.handleNameChange}
          className={cssModule.input}
        />
        <label htmlFor="numberInput" className={cssModule.label}>
          Number
        </label>
        <input
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          id="numberInput"
          value={this.state.number}
          onChange={this.handleNumberChange}
          className={cssModule.input}
        />
        <button type="submit" className={cssModule.btn}>
          Add contact
        </button>
      </form>
    );
  }
}

export default ContactForm;
