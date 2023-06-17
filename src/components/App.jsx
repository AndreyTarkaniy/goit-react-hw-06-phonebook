import React, { useEffect, useState } from 'react';
// import { nanoid } from 'nanoid';
import { Container } from 'components/container/container';
import Form from 'components/form/form';
import ContactsList from 'components/contactsList/contactsList';
import Filter from 'components/filter/filter';
import ContactsData from 'components/data/contacts.json';
import { useSelector } from 'react-redux';
import { selectContacts } from 'redux/contacts/selectors';

export const App = () => {
  const contacts = useSelector(selectContacts);
  // const dispatch = useDispatch();

  const [, setContacts] = useState(
    () =>
      JSON.parse(window.localStorage.getItem('contactsList')) ?? ContactsData
  );
  const [filter, setFilter] = useState('');

  useEffect(() => {
    if (setContacts !== contacts) {
      window.localStorage.setItem('contactsList', JSON.stringify(contacts));
    }
  }, [contacts]);

  // const addContact = contactDataForm => {
  //   const { name } = contactDataForm;

  // const existContact = contacts.find(
  //   contact => contact.name.toLowerCase() === name.toLowerCase()
  // );

  // if (existContact) {
  //   alert(`${name} is already in contacts.`);
  //   return;
  // }

  //   const newContact = { id: nanoid(), ...contactDataForm };
  //   setContacts(prevContacts => [...prevContacts, newContact]);
  // };

  const changeFilter = event => {
    setFilter(event.target.value);
  };

  const filterContact = () => {
    const normalizeFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizeFilter)
    );
  };

  const deleteContact = contactId => {
    setContacts(prevContacts =>
      prevContacts.filter(contact => contact.id !== contactId)
    );
  };

  const contactsFilter = filterContact();

  return (
    <Container>
      <h1>Phonebook</h1>
      <Form />
      {/* <Form onSubmitForm={addContact} /> */}

      <h2>Contacts</h2>
      <Filter value={filter} onChangeFilter={changeFilter} />
      <ContactsList contacts={contactsFilter} onDelete={deleteContact} />
    </Container>
  );
};
