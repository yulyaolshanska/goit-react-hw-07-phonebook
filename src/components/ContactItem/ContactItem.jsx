import PropTypes from 'prop-types';
import css from './ContactItem.module.css';
import { useDispatch } from 'react-redux';
import { useDeleteContactMutation } from 'redux/contactsSlice';

export const ContactItem = ({ name, number, id }) => {
  // const dispatch = useDispatch();
  const [deleteContact, result] = useDeleteContactMutation();
  return (
    <li className={css.contactItem}>
      <p>{name}</p>
      <p>{number}</p>

      <button className={css.button} onClick={deleteContact(id)} type="button">
        Delete
      </button>
    </li>
  );
};

ContactItem.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};
