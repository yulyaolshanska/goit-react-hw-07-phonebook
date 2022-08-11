import { ContactItem } from 'components/ContactItem/ContactItem';
import css from './ContactList.module.css';
import { useSelector } from 'react-redux';
import { getContacts, getFilter } from '../../redux/contactsSlice';

export const ContactList = () => {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);

  const getFilteredContacts = () => {
    const normalizedFilter = filter.toLocaleLowerCase().trim();
    return contacts.filter(contact =>
      contact.name.toLocaleLowerCase().includes(normalizedFilter)
    );
  };

  const filteredContacts = getFilteredContacts();

  return (
    <ul className={css.contactList}>
      {filteredContacts.map(({ name, number, id }) => {
        return (
          <ContactItem
            key={id}
            id={id}
            name={name}
            number={number}
          ></ContactItem>
        );
      })}
    </ul>
  );
};
