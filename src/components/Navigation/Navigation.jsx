import { NavLink } from 'react-router-dom';
import { useAuth } from 'hooks/useAuth';
import css from './Navigation.module.css';

export const Navigation = () => {
  const { isLoggedIn } = useAuth();

  return (
    <nav>
      <NavLink className={css.link} to="/home">
        Home
      </NavLink>
      {!isLoggedIn && (
        <NavLink className={css.link} to="/login">
          
        </NavLink>
      )}
      {isLoggedIn && (
        <NavLink className={css.link} to="/contacts">
          Contacts
        </NavLink>
      )}
    </nav>
  );
};




// import { NavLink } from 'react-router-dom';
// import { useAuth } from 'hooks/useAuth';
// import css from './Navigation.module.css';

// export const Navigation = () => {
//   const { isLoggedIn } = useAuth();

//   return (
//     <nav>
//       <NavLink className={css.link} to="/Home">
//         Home
//       </NavLink>
//       {isLoggedIn && (
//         <NavLink className={css.link} to="/contacts">
//           Contacts
//         </NavLink>
//       )}
//     </nav>
//   );
// };
