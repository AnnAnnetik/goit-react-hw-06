import { createSlice, nanoid } from '@reduxjs/toolkit';

export const INITIAL_STATE = {
  contacts: { items: [] },
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: INITIAL_STATE.contacts,
  reducers: {
    addContact: (state, action) => {
      const { name, number } = action.payload;
      state.items.push({
        id: nanoid(),
        name,
        number,
      });
    },
    deleteContact(state, action) {
      const contactIndex = state.items.findIndex(
        contact => contact.id === action.payload
      );
      state.items.splice(contactIndex, 1);
    },
  },
});

export const { addContact, deleteContact } = contactsSlice.actions;
export const selectContacts = state => state.contacts.items;
export default contactsSlice.reducer;
