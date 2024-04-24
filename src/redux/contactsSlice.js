import { createSlice, nanoid } from '@reduxjs/toolkit';

export const INITIAL_STATE = {
  contacts: { items: [] },
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: INITIAL_STATE,
  reducers: {
    addContact: (state, action) => {
      const { name, number } = action.payload;
      state.contacts.items.push({
        id: nanoid(),
        name,
        number,
      });
    },
    deleteContact(state, action) {
      const contactIndex = state.contacts.items.findIndex(
        contact => contact.id === action.payload
      );
      state.contacts.items.splice(contactIndex, 1);
    },
  },
});

export const { addContact, deleteContact } = contactsSlice.actions;

export default contactsSlice.reducer;
