import style from './ContactList.module.css';
import { useSelector } from 'react-redux';
import Contact from '../Contact/Contact';

const ContactList = () => {
  const contacts = useSelector(state => state.contacts.contacts.items);
  const filter = useSelector(state => state.filters.filters.name);
  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <ul>
      {Array.isArray(contacts) &&
        filteredContacts.map(contact => (
          <li key={contact.id} className={style.contactItem}>
            <Contact contact={contact} />
          </li>
        ))}
    </ul>
  );
};

export default ContactList;
