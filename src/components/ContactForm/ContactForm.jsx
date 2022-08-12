import React, { useState } from 'react';
import { nanoid } from 'nanoid';
import css from './ContactForm.module.css';

import {
  useGetContactsQuery,
  useAddContactMutation,
} from 'redux/contactsSlice';

export function ContactForm() {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const { data: contacts, error, isLoading } = useGetContactsQuery();
  const [addContact, result] = useAddContactMutation();

  // const contacts = useSelector(getContacts);
  // const dispatch = useDispatch();

  const handleAddContact = e => {
    e.preventDefault();
    if (contacts.some(contact => contact.name === name)) {
      alert(`${name}, is already in contacts.`);
      return;
    }
    const contact = { id: nanoid(), name, number };
    addContact(contact);
 
    setName('');
    setNumber('');
  };

  const handleChange = e => {
    switch (e.target.name) {
      case 'name':
        setName(e.target.value);
        break;
      case 'number':
        setNumber(e.target.value);
        break;
      default:
        return;
    }
  };

  return (
    <form className={css.form} onSubmit={handleAddContact}>
      <label className={css.label}>
        Name
        <input
          className={css.input}
          onChange={handleChange}
          type="text"
          name="name"
          value={name}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </label>
      <label className={css.label}>
        Number
        <input
          className={css.input}
          value={number}
          onChange={handleChange}
          type="tel"
          name="number"
        ></input>
      </label>
      <button className={css.addBtn} type="submit">
        Add contact
      </button>
    </form>
  );
}
