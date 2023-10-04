import { useDispatch } from 'react-redux';
import { deleteContacts } from 'redux/contacts/operations';
import css from './Task.module.css';

export const Task = ({ id, text }) => {
  const dispatch = useDispatch();
  const handleDelete = () => dispatch(deleteContacts(id));

  return (
    <div className={css.wrapper}>
      <p className={css.text}>{text}</p>
      <button type="button" className={css.button} onClick={handleDelete}>
        Delete Contacts
      </button>
    </div>
  );
};
