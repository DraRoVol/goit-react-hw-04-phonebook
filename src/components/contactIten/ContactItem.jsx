import React from 'react';
import PropTypes from 'prop-types';
import cssModule from './ContactItem.module.css';

const ContactItem = ({ contact, onDeleteContact }) => (
  <li key={contact.id} className={cssModule.item}>
    <p>
      <strong>{contact.name}:</strong> {contact.number}
    </p>
    <button type="button" onClick={() => onDeleteContact(contact.id)} className={cssModule.btn}>delete</button>
  </li>
);

ContactItem.protoType = {
    contact: PropTypes.node.isRequired,
    onDeleteContact: PropTypes.node.isRequired,
}

export default ContactItem;
