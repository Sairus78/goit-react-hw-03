import css from './Contact.module.css';
import { FaPhoneAlt } from 'react-icons/fa';
import { FaUser } from 'react-icons/fa';

const Contact = ({ id, name, number, onDelete }) => {
  return (
    <div className={css.contactItem}>
      <p>
        <FaUser /> {name}
      </p>
      <p>
        <FaPhoneAlt /> {number}
      </p>
      <button
        className={css.contactButton}
        onClick={() => {
          onDelete(id);
        }}
      >
        Delete
      </button>
    </div>
  );
};

export default Contact;
