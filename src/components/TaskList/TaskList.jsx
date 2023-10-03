import { useSelector } from 'react-redux';
import { Task } from '../Task/Task';
import { selectAllContacts } from 'redux/contacts/selectors';
import css from './TaskList.module.css';

export const TaskList = () => {
  const tasks = useSelector(selectAllContacts);

  return (
    <ul className={css.list}>
      {tasks.map(({ id, text }) => (
        <li key={id}>
          <Task id={id} text={text} />
        </li>
      ))}
    </ul>
  );
};
