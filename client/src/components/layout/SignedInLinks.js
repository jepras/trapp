import React from 'react';
import { NavLink } from 'react-router-dom';

const SignedInLinks = () => {
  return (
    <div>
      <ul className="right">
        <li>
          <NavLink to="/log">Log tasks</NavLink>
        </li>
        <li>
          <NavLink to="/tasks">Teams</NavLink>
        </li>
        <li>
          <NavLink to="/auth/logout">Log Out</NavLink>
        </li>
        <li>
          <NavLink to="/profile" className="btn btn-floating pink lighten-1">
            NN
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default SignedInLinks;
