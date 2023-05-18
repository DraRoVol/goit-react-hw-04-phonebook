import React from 'react';
import PropTypes from 'prop-types';
import ContactItem from '../contactIten/ContactItem';
import cssModule from './ContactList.module.css';

const ContactList = ({ contacts, onDeleteContact }) => {
  return (
    <ul className={cssModule.list}>
      {contacts.map(contact => {
        return (
          <ContactItem
            contact={contact}
            key={contact.name}
            onDeleteContact={onDeleteContact}
          />
        );
      })}
    </ul>
  );
};

ContactList.protoType = {
  contacts: PropTypes.node.isRequired,
  onDeleteContact: PropTypes.node.isRequired,
};

export default ContactList;
