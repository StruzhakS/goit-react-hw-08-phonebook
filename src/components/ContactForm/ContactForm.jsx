import ContactList from 'components/ContactList/ContactList';
import DoForm from 'components/DoForm/DoForm';
import Filter from 'components/FilterCOntacts/Filtercontacts';
import React from 'react';
import { useSelector } from 'react-redux';

const ContactForm = () => {
  const { contacts } = useSelector(state => state.contacts);

  return (
    <div>
      <DoForm />
      {contacts.length > 1 && <Filter />}
      <ContactList />
    </div>
  );
};

export default ContactForm;
