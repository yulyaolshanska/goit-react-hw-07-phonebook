import { ContactItem } from 'components/ContactItem/ContactItem';
import css from './ContactList.module.css';
import { useSelector } from 'react-redux';
import { getFilter } from 'redux/filterSlice';

import { useGetContactsQuery } from 'redux/contactsSlice';

export const ContactList = () => {
  const filter = useSelector(getFilter);
  const { data: contacts, error, isLoading } = useGetContactsQuery();

  const getFilteredContacts = () => {
    const normalizedFilter = filter.toLocaleLowerCase().trim();

    if (contacts) {
      return contacts.filter(contact =>
        contact.name.toLocaleLowerCase().includes(normalizedFilter)
      );
    }
  };

  const filteredContacts = getFilteredContacts();
  return (
    <>
      {isLoading && <div>Loading...</div>}

      {contacts && (
        <ul className={css.contactList}>
          {filteredContacts.length !== 0 ? (
            filteredContacts.map(({ name, phone, id }) => {
              return (
                <ContactItem
                  key={id}
                  id={id}
                  name={name}
                  phone={phone}
                ></ContactItem>
              );
            })
          ) : (
            <li> Contact not found </li>
          )}
        </ul>
      )}

      {error && <p>Ups, something was wrong!</p>}
    </>
  );
};
