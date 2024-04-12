import { FaUser } from 'react-icons/fa';
import { FaPhone } from 'react-icons/fa6';
import style from './Contact.module.css';
const Contact = ({ contact, onDeleteContact }) => {
  return (
    <li className={style.contactItem}>
      <div>
        <div className={style.contactInf}>
          {' '}
          <FaUser />
          <p>{contact.name}</p>
        </div>
        <div className={style.contactInf}>
          <FaPhone />
          <p>{contact.number}</p>
        </div>
      </div>
      <button
        onClick={() => {
          onDeleteContact(contact.id);
        }}
      >
        Delete
      </button>
    </li>
  );
};

export default Contact;
