import PropTypes from 'prop-types';
import css from './ContactItem.module.css';
import { useDeleteContactMutation } from 'redux/contactsSlice';
import { successToast } from 'utils/notifications';

export const ContactItem = ({ name, phone, id }) => {
  const [deleteContact, { isSuccess, isLoading }] = useDeleteContactMutation();

  if (isSuccess) {
    successToast('Contact deleted');
  }

  return (
    <li className={css.contactItem}>
      <p>{name}</p>
      <p>{phone}</p>

      <button
        className={css.button}
        onClick={() => deleteContact(id)}
        type="button"
        disabled={isLoading}
      >
        {isLoading ? 'Deleting...' : 'Delete'}
      </button>
    </li>
  );
};

ContactItem.propTypes = {
  name: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};
