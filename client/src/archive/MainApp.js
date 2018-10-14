/* 
import React, { Component } from 'react';
import Profile from './Profile';
import New from './New';
import Tasks from './Tasks';
import { getCookie } from '../utils/cookie';

class MainApp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      profile: [],
      pre: [],
      posts: []
    };
  }

  componentDidMount() {
    this.callApi();
  }

  /* componentDidUpdate() {
    this.callApi();
  } 

  callApi = () => {
    fetch('api/tasks?team=newbs')
      .then(function(data) {
        return data.json();
      })
      .then(json => {
        this.setState({
          pre: json
        });
      });

    console.log('call check');
  };

  render() {
    // Check logged in cookie
    var cook = getCookie('awesomeCookie');

    /* var { profile } = this.state;
    console.log(profile); 

    var pre = this.state.pre;
    pre = pre.map(function(pr, i) {
      return (
        <li key={i}>
          <p>Task descrip: {pr.description}</p>
        </li>
      );
    });

    return (
      <div className="container">
        <p>check for login</p>
        {cook ? (
          <div>
            <p>logged in </p>
            <Profile name="Jeppe" id="1" />
            <New callApi={this.callApi} />
            <ul>{pre}</ul>
            <Tasks />
          </div>
        ) : (
          <p>ralphs a fag fag</p>
        )}
      </div>
    );
  }
}

export default MainApp;
 */
