import { useDispatch, useSelector } from 'react-redux';
import s from './ContaactList.module.css';
import { deleteContactOperation } from 'strore/contacts/Operations';
import { RotatingLines } from 'react-loader-spinner';

const ContactList = () => {
  const { contacts, filter, isLoading } = useSelector(state => state.contacts);
  const dispatch = useDispatch();

  const deleteContact = contactId => {
    dispatch(deleteContactOperation(contactId));
  };

  const filteredContacts = contacts.filter(el =>
    el.name.toLowerCase().includes(filter.toLowerCase())
  );
  return (
    <>
      {isLoading ? (
        <RotatingLines
          strokeColor="grey"
          strokeWidth="5"
          animationDuration="0.75"
          width="96"
          visible={true}
        />
      ) : (
        <ul className={s.contactList}>
          {filteredContacts.map(contact => (
            <li className={s.listItem} key={contact.id}>
              <p className={s.name}>{contact.name}: </p> <p>{contact.number}</p>
              <button
                className={s.deleteButton}
                type="button"
                onClick={e => deleteContact(contact.id)}
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      )}

      <p className={s.totalContacts}>Total contacts {contacts.length}</p>
    </>
  );
};

export default ContactList;
