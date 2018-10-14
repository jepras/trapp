import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => (
  <header>
    <nav className="nav-wrapper red darken-3">
      <div className="container">
        <ul className="right">
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/app">MainApp</NavLink>
          </li>
          <li>
            <NavLink to="/profile">Profile</NavLink>
          </li>
          <li>
            <NavLink to="/tasks">Tasks</NavLink>
          </li>
          <li>
            <NavLink to="/login">Login</NavLink>
          </li>
          <li>
            <a href="/auth/logout">Logout</a>
          </li>
        </ul>
      </div>
    </nav>
  </header>
);

export default Header;
