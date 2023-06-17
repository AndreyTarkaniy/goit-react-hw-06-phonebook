import { createSlice, nanoid } from '@reduxjs/toolkit';

import ContactsData from 'components/data/contacts.json';

export const contactsSlice = createSlice({
  name: 'contatcs',
  initialState: { contacts: ContactsData, filter: '' },
  reducers: {
    addContact: {
      reducer: (state, { payload }) => {
        state.contacts.push(payload);
      },
      prepare: newConact => ({
        payload: { ...newConact, id: nanoid() },
      }),
    },
    deleteContact: (state, { payload }) => {
      state.contacts = state.contacts.filter(contact => contact.id !== payload);
    },
  },
});

export const { addContact, deleteContact } = contactsSlice.actions;
