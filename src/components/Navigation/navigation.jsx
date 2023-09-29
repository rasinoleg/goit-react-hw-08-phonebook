import React from "react";
import { Link } from 'react-router-dom';

export const Navigation = () => {
return (
    <nav>
      <ul>
        <li>
          <Link to="/register">Street route</Link>
        </li>
        <li>
          <Link to="/login">Street route</Link>
        </li>
        <li>
          <Link to="/contact">Private route</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;