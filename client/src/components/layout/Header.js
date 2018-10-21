import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import SignedInLinks from './SignedInLinks';
import SignedOutLinks from './SignedOutLinks';

import { getCookie } from '../../utils/cookie';

var cook = getCookie('awesomeCookie');

const Header = () => (
  <header>
    <nav className="nav-wrapper red darken-3">
      <div className="container">
        <Link to="/app" className="brand-logo">
          Team Reporter
        </Link>
        {cook ? <SignedInLinks /> : <SignedOutLinks />}
      </div>
    </nav>
  </header>
);

const mapStateToProps = state => {
  console.log(state);
  return {};
};

export default connect(mapStateToProps)(Header);
