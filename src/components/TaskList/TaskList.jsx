import { useSelector } from 'react-redux';
import { Task } from '../Task/Task';
import { selectAllContacts } from 'redux/contacts/selectors';
import css from './TaskList.module.css';

export const TaskList = () => {
  const Contacts = useSelector(selectAllContacts);
console.log(Contacts)
  return (
    <ul className={css.list}>
      {Contacts.map(({ id, text }) => (
        <li key={id}>
          <Task id={id} text={text} />
        </li>
      ))}
      <Task/>
    </ul>
    
  );
};




// import { useSelector, useDispatch } from 'react-redux';
// import { useEffect } from 'react';
// import { Task } from '../Task/Task';
// import { selectAllContacts } from 'redux/contacts/selectors';
// import { fetchContacts } from 'redux/contacts/operations'; 
// import css from './TaskList.module.css';

// export const TaskList = () => {
//   const Contacts = useSelector(selectAllContacts);
//   const dispatch = useDispatch(); 

//   useEffect(() => {
    
//     dispatch(fetchContacts());
//   }, [dispatch]);

//   console.log(Contacts);

//   return (
//     <ul className={css.list}>
//       {Contacts.map(({ id, text }) => (
//         <li key={id}>
//           <Task id={id} text={text} />
//         </li>
//       ))}
//     </ul>
//   );
// };

