import React, { useState } from 'react';
import css from './ContactForm.module.css';

import {
  useGetContactsQuery,
  useAddContactMutation,
} from 'redux/contactsSlice';

export function ContactForm() {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const { data: contacts } = useGetContactsQuery();
  const [addContact, result] = useAddContactMutation();

  const handleAddContact = e => {
    e.preventDefault();
    if (contacts.some(contact => contact.name === name)) {
      alert(`${name}, is already in contacts.`);
      return;
    }
    const contact = { name, phone };
    addContact(contact);
    if (result.isSuccess) {
    }
    setName('');
    setPhone('');
  };

  const handleChange = e => {
    switch (e.target.name) {
      case 'name':
        setName(e.target.value);
        break;
      case 'number':
        setPhone(e.target.value);
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
          value={phone}
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
