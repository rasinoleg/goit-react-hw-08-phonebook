import { useEffect, lazy } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import { Layout } from './Layout';
import { PrivateRoute } from './PrivateRoute';
import { RestrictedRoute } from './RestrictedRoute';
import { refreshUser } from 'redux/auth/operations';
import { useAuth } from 'hooks/useAuth';
// import Register from './Pages/Register/Register';

const Home = lazy(() => import('../Pages/Home/Home'));
const Register = lazy(() => import('../Pages/Register/Register'));
const Login = lazy(() => import('../Pages/Login/Login'));
const Сontacts = lazy(() => import('../Pages/Contacts/Contacts'));

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
        <Route index element={<Home />} />
        <Route
          path="/register"
          element={
            <RestrictedRoute redirectTo="/register" component={<Register />} />
          }
        />
        <Route
          path="/login"
          element={
            <RestrictedRoute redirectTo="/login " component={<Login />} />
          }
        />
        <Route
          path="/tasks"
          element={
            <PrivateRoute redirectTo="/Сontacts" component={<Сontacts />} />
          }
        />
      </Route>
    </Routes>
  );
};






