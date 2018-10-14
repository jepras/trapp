import React, { Component } from 'react';
import CreateTodo from '../containers/CreateTodo';
import TodoList from '../containers/TodoList';
import { getCookie } from '../utils/cookie';

class MainApp extends Component {
  render() {
    var cook = getCookie('awesomeCookie');

    return (
      <div className="container">
        {cook ? (
          <div className="row">
            <div className="col-md-6">
              <CreateTodo />
            </div>
            <div className="col-md-6">
              <TodoList />
            </div>
          </div>
        ) : (
          <p>please log in</p>
        )}
      </div>
    );
  }
}

export default MainApp;
