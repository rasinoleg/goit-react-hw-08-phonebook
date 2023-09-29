import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import Layout from './Layout';
import PrivateRoute from './PrivateRoute';
import RestrictedRoute from './RestrictedRoute';
import React, { lazy } from 'react';

const HomePage = lazy(() => import('Pages/Home/Home'));
const RegisterPage = lazy(() => import('Pages/Register/Register'));
const LoginPage = lazy(() => import('Pages/Login/Login'));

export const App = () => {
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);
  return isRefreshing ? (
    <b>Refreshing user...</b>
  ) : (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route
          path="/register"
          element={
            <RestrictedRoute redirectTo="tasks" component={<RegisterPage />} />
          }
        />
        <Route
          path="/login"
          element={
            <RestrictedRoute redirectTo="tasks" component={<LoginPage />} />
          }
        />
        <Route
          path="/сontacts"
          element={
            <RestrictedRoute redirectTo="login" component={<TaskPage />} />
          }
        />
      </Route>
    </Routes>
  );
};

export default App;

// import React from 'react';
// import ContactList from './ContactList/ContactList';
// import Filter from './Filter/Filter';
// import ContactForm from './ContactForm/ContactForm';

// export const App = () => {
//   return (
//     <div>
//       <h1>Phonebook</h1>
//       <ContactForm />
//       <h2>Contacts</h2>
//       <Filter />
//       <ContactList />
//     </div>
//   );
// };
// export default App;

// import ContactList from './ContactList/ContactList';
// import Filter from './Filter/Filter';
// import ContactForm from './ContactForm/ContactForm';
