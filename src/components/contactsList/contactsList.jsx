import React from 'react';

import css from 'components/contactsList/contactsList.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from 'redux/contacts/contactsSlice';
import { selectContacts, selectFilter } from 'redux/contacts/selectors';

const ContactsList = () => {
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectFilter);
  const dispatch = useDispatch();

  const filterContact = () => {
    const normalizeFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizeFilter)
    );
  };

  const contactsList = filterContact();

  return (
    <ul className={css.list}>
      {contactsList.map(({ id, name, number }) => (
        <li className={css.items} key={id}>
          <p className={css.content}>
            {name}: {number}
          </p>

          <button
            className={css.btn}
            type="button"
            onClick={() => dispatch(deleteContact(id))}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

export default ContactsList;
