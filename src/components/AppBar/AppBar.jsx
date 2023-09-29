import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { logOut } from 'redux/auth/operations';

const AppBar = () => {
  const isAuthenticated = useSelector(state => state.auth.isAuthenticated);
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logOut());
  };

  return (
    <header>
      <nav>
        <ul>
          <li>
            <Link to="/">Головна</Link>
          </li>
          {isAuthenticated ? (
            <li>
              <button type="button" onClick={handleLogout}>
                Вийти
              </button>
            </li>
          ) : (
            <>
              <li>
                <Link to="/login">Увійти</Link>
              </li>
              <li>
                <Link to="/register">Реєстрація</Link>
              </li>
            </>
          )}
        </ul>
      </nav>
    </header>
  );
};

export default AppBar;
