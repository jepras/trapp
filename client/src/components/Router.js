import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Front from './Frontpage';
import Tasks from './Tasks';
import Login from './Login';
import MainApp from './MainApp';
import Profile from './Profile';
import Test from './Test';
import Teams from './Teams';

const Main = () => (
  <main>
    <Switch>
      <Route exact path="/" component={Front} />
      <Route path="/app" component={MainApp} />
      <Route path="/login" component={Login} />
      <Route path="/profile" component={Profile} />
      <Route path="/tasks" component={Tasks} />
      <Route path="/test" component={Test} />
      <Route path="/teams/:team_id" component={Teams} />
    </Switch>
  </main>
);

export default Main;
