import Contact from '../Contact/Contact';

const ContactList = ({ contacts, onDeleteContact }) => {
  return (
    <ul>
      {Array.isArray(contacts) &&
        contacts.map(contact => {
          return (
            <Contact
              key={contact.id}
              contact={contact}
              onDeleteContact={onDeleteContact}
            />
          );
        })}
    </ul>
  );
};

export default ContactList;
