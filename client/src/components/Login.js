import React, { Component } from 'react';
import keys from '../config/reactKeys';

class Login extends Component {
  render() {
    return (
      <div className="ninjas">
        <h1>Login</h1>
        <a class="google-btn" href={`${keys.host.localhost}/auth/google`}>
          Google+
        </a>
      </div>
    );
  }
}

export default Login;
