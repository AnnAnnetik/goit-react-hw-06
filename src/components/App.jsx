import { useEffect, useState } from 'react';
import contactsData from '../contacts.json';
import ContactList from './ContactList/ContactList';
import SearchBox from './SearchBox/SearchBox';
import ContactForm from './ContactForm/ContactForm';

import { nanoid } from 'nanoid';

const App = () => {
  const [contacts, setContacts] = useState(() => {
    const stringifiedContacts = localStorage.getItem('contactsInf');
    if (!stringifiedContacts) return contactsData;
    const parsedContacts = JSON.parse(stringifiedContacts) ?? [];
    return parsedContacts.length ? parsedContacts : contactsData;
  });
  useEffect(() => {
    localStorage.setItem('contactsInf', JSON.stringify(contacts));
  }, [contacts]);

  const [filter, setFilter] = useState('');

  const onChangeFilter = e => {
    setFilter(e.target.value);
  };
  const filteredContacts = contacts.filter(
    contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase()) ||
      contact.number.toLowerCase().includes(filter.toLowerCase())
  );
  const onDeleteContact = contactId => {
    setContacts(prevContacts =>
      prevContacts.filter(contact => contact.id !== contactId)
    );
  };
  const onAddContact = fromData => {
    const finalContact = {
      ...fromData,
      id: nanoid(),
    };
    setContacts(prevState => [...prevState, finalContact]);
  };
  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm onAddContact={onAddContact} />
      <SearchBox value={filter} onChange={onChangeFilter} />
      <ContactList
        contacts={filteredContacts}
        onDeleteContact={onDeleteContact}
      />
    </div>
  );
};

export default App;
