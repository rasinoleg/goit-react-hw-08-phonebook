import { useSelector } from 'react-redux';
import { Task } from '../Task/Task';
import { selectAllContacts } from 'redux/contacts/selectors';
import css from './TaskList.module.css';

export const TaskList = () => {
  const Contacts = useSelector(selectAllContacts);
// console.log(Contacts)
  return (
    <ul className={css.list}>
      {Contacts.map(({ id, name, number }) => (
        <li key={id}>
          <Task id={id} text={name} number={number} />
        </li>
      ))}  
    </ul>
    
  );
};



