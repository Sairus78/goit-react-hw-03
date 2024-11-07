import css from './ContactList.module.css';

import Contact from '../Contact/Contact';

const ContactList = ({ dataInfo, onDelete }) => {
  return (
    <>
      {dataInfo.length > 0 ? (
        <ul className={css.contactList}>
          {dataInfo.map(({ id, name, number }) => {
            return (
              <li key={id}>
                <Contact
                  id={id}
                  name={name}
                  number={number}
                  onDelete={onDelete}
                />
              </li>
            );
          })}
        </ul>
      ) : (
        <p className={css.emptyList}>List is empty</p>
      )}
    </>
  );
};

export default ContactList;
