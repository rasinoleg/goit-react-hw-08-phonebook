import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Helmet } from 'react-helmet';
import { TaskList } from 'components/TaskList/TaskLisk';
import { TaskEditor } from 'components/TaskEditor/TaskEditor';
import { fetchContacts } from 'redux/tasks/operations';
import { selectLoading } from 'redux/tasks/selectors';
export default function Contacts() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectLoading);
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
  return (
    <>
      <Helmet>
        <title>Your tasks</title>
      </Helmet>
      <TaskEditor />
      <div>{isLoading && 'Request in progress...'}</div>
      <TaskList />
    </>
  );
}





// import { useEffect, useState } from 'react';
// import { useDispatch, useSelector } from 'react-redux';

// import { fetchTasks } from 'redux/contactsOperation';
// import { selectError, selectIsLoading } from 'redux/auth/selectors';

// import { Section } from '../../../components/Section/Section';
// import ContactForm from '../../../components/ContactForm/ContactForm';
// import Filter from '../../../components/Filter/Filter';
// import ContactList from '../../../components/ContactList/ContactList';
// import {
//   AddUserIcon,
//   Button,
//   ContactNavWrapper,
//   ContentPageContainer,
//   FilterWrapper,
//   Title,
// } from './Contacts.module';
// import { Modal } from 'components/Modal/Madal';

// const Contacts = () => {
//   const dispatch = useDispatch();
//   const isLoading = useSelector(selectIsLoading);
//   const error = useSelector(selectError);
//   const [isShowModalAddUser, setIsShowModalAddUser] = useState(false);

//   useEffect(() => {
//     dispatch(fetchTasks());
//   }, [dispatch]);

//   const handleOpenModal = () => {
//     setIsShowModalAddUser(prev => !prev);
//   };

//   return (
//     <ContentPageContainer>
//       <Section>
//         <ContactNavWrapper>
//           <Title>Contacts</Title>
//           <FilterWrapper>
//             <Filter />
//             <Button type="button" onClick={handleOpenModal}>
//               <AddUserIcon />
//               New Contact
//             </Button>
//           </FilterWrapper>
//         </ContactNavWrapper>
//         {isLoading && !error && <b>Request in progress</b>}
//         <ContactList />
//       </Section>
//       {isShowModalAddUser && (
//         <Modal
//           children={
//             <Section title="Add New Contact">
//               <ContactForm onCloseModal={handleOpenModal} />
//             </Section>
//           }
//           onCloseModal={handleOpenModal}
//         ></Modal>
//       )}
//     </ContentPageContainer>
//   );
// };

// export default Contacts;

