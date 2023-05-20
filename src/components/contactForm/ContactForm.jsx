import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';
import cssModule from './ContactForm.module.css';

const ContactForm = ({onSubmit, contactList}) => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const handleNameChange = e => {
    setName(e.currentTarget.value);
  };
  const handleNumberChange = e => {
    setNumber(e.currentTarget.value);
  };
  const handleSubmit = e => {
    e.preventDefault();
    const nameList = contactList
      ? contactList.map(con => con.name)
      : [];
    if (nameList.includes(name.trim())) {
      alert(`${name} is already in contacts`);
    } else {
      const newContact = {
        id: nanoid(),
        name: name.trim(),
        number: number.trim(),
      };
      onSubmit(newContact);
      setName('');
      setNumber('');
    }
  };
  return (
    <form onSubmit={handleSubmit} className={cssModule.form}>
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
        value={name}
        onChange={handleNameChange}
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
        value={number}
        onChange={handleNumberChange}
        className={cssModule.input}
      />
      <button type="submit" className={cssModule.btn}>
        Add contact
      </button>
    </form>
  );
};
ContactForm.protoType = {
  contactList: PropTypes.node.isRequired,
  onSubmit: PropTypes.node.isRequired,
};
export default ContactForm;
