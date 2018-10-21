import React, { Component } from 'react';
import CreateTodo from '../../containers/CreateTodo';
import TaskList from '../../containers/TaskList';
import { getCookie } from '../../utils/cookie';

class Dashboard extends Component {
  render() {
    console.log(this.props);
    var cook = getCookie('awesomeCookie');
    console.log('cookie: ' + cook);

    return (
      <div className="container">
        {cook ? (
          <div className="row">
            <div className="col-md-6">
              <CreateTodo />
            </div>
            <div className="col-md-6">
              <TaskList />
            </div>
          </div>
        ) : (
          <p>please log in</p>
        )}
      </div>
    );
  }
}

export default Dashboard;
