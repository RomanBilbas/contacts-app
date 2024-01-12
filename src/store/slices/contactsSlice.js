import { createSlice } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';

const initialState = {
  contacts: [
    {
      id: uuidv4(),
      isFavorite: false,
      fullName: 'Roman',
      phoneNumber: '+380987654321',
    },
    {
      id: uuidv4(),
      isFavorite: false,
      fullName: 'Anton',
      phoneNumber: '+380987654321',
    },
    {
      id: uuidv4(),
      isFavorite: false,
      fullName: '1',
      phoneNumber: '+380987654321',
    },
    {
      id: uuidv4(),
      isFavorite: false,
      fullName: '2',
      phoneNumber: '+380987654321',
    },
    {
      id: uuidv4(),
      isFavorite: false,
      fullName: '3',
      phoneNumber: '+380987654321',
    },
  ],
};

const contactSlice = createSlice({
  initialState,
  name: 'contacts',
  reducers: {
    createContact: (state, { payload }) => {
      state.contacts.push({ ...payload, isFavorite: false, id: uuidv4() });
    },
    deleteContact: (state, { payload }) => {
      state.contacts = state.contacts.filter(c => c.id !== payload);
    },
    updateContact: (state, { payload: { id, date } }) => {
      const updateContactIndex = state.contacts.findIndex(c => c.id === id);
      state.contacts[updateContactIndex] = {
        ...state.contacts[updateContactIndex],
        ...date,
      };
    },
  },
});

const { reducer, actions } = contactSlice;

export const { createContact, deleteContact, updateContact } = actions;

export default reducer;
