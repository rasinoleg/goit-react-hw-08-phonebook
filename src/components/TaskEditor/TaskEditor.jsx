import { useDispatch } from 'react-redux';
import { addContacts } from 'redux/contacts/operations';
import { fetchContacts } from 'redux/contacts/operations'; 

import css from './TaskEditor.module.css';

export const TaskEditor = () => {
  const dispatch = useDispatch();

  const handleSubmit = async e => {
    e.preventDefault();
    const form = e.currentTarget;
    const name = form.elements.text.value;
    const number = form.elements.number.value;

    if (name !== '' && number !== '') {
      await dispatch(addContacts({ name, number }));
      form.reset();
      dispatch(fetchContacts());
     
      return;
    }
    alert('Name and number cannot be empty. Enter some text and a number!');
  };

  return (
    <form className={css.form} onSubmit={handleSubmit}>
      <input
        name="text"
        type="text"
        className={css.input}
        placeholder="Name"
      />
      <input
        name="number"
        type="tel"
        className={css.inputNumber}
        placeholder="Number"
      />
      <button type="submit" className={css.button}>
        Add Contacts
      </button>
    </form>
  );
};




// import { useDispatch } from 'react-redux';
// import { addContacts } from 'redux/contacts/operations';
// import css from './TaskEditor.module.css';

// export const TaskEditor = () => {
//   const dispatch = useDispatch();

//   const handleSubmit = e => {
//     e.preventDefault();
//     const form = e.currentTarget;
//     const name = form.elements.text.value;
//     const number = form.elements.number.value; 

//     if (name !== '' && number !== '') { 
//       dispatch(addContacts({ name, number })); 
//       form.reset();
//       return;
//     }
//     alert('Task and number cannot be empty. Enter some text and a number!');
//   };

//   return (
//     <form className={css.form} onSubmit={handleSubmit}>
//       <input name="text" type="text"className={css.input} placeholder="Name" />
//       <input name="number" type="tel" className={css.inputNumber} placeholder="Number" /> 
//       <button type="submit" className={css.button}>
//         Add Contacts
//       </button>
//     </form>
//   );
// };


