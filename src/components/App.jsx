// import { nanoid } from 'nanoid';
import { ContactForm } from './ContactForm/ContactForm';
import { ToastContainer } from 'react-toastify';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import css from './App.module.css';

export function App() {
  return (
    <div className={css.container}>
      <h1 className={css.title}>Phonebook</h1>
      <ContactForm />
      <h2 className={css.title}>Contacts</h2>
      <Filter />
      <ContactList />
      <ToastContainer />
    </div>
  );
}
