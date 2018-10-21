import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Front from './Frontpage';
import TasksPerTeam from './tasks/TasksPerTeam';
import Login from './auth/Login';
import SignUp from './auth/SignUp';

import Teams from './tasks/Teams';
import Dashboard from './dashboard/Dashboard';
import CreateTodo from '../containers/CreateTodo';

const Main = () => (
  <main>
    <Switch>
      <Route exact path="/" component={Front} />
      <Route path="/app" component={Dashboard} />
      <Route path="/log" component={CreateTodo} />
      <Route path="/login" component={Login} />
      <Route path="/signup" component={SignUp} />
      <Route path="/tasks" component={TasksPerTeam} />
      <Route path="/teams/:team_id" component={Teams} />
    </Switch>
  </main>
);

export default Main;
