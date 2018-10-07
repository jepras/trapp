import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => (
    <header>
        <nav>
        <ul>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/roster'>Roster</Link></li>
            <li><Link to='/schedule'>Schedule</Link></li>
            <li><Link to='/app'>MainApp</Link></li>
            <li><Link to='/auth/logout'>Logout</Link></li>
            <li><Link to='/auth/login'>Login</Link></li>
            <li><Link to='/profile'>Profile</Link></li>
        </ul>
        </nav>
    </header>
)

export default Header;