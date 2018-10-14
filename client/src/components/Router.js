import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Front from './Frontpage';
import Tasks from './Tasks';
import Login from './Login';

import Test from './Test';
import Teams from './Teams';
import ReduxApp from './ReduxApp';

const Main = () => (
  <main>
    <Switch>
      <Route exact path="/" component={Front} />
      <Route path="/app" component={ReduxApp} />
      <Route path="/login" component={Login} />
      <Route path="/tasks" component={Tasks} />
      <Route path="/test" component={Test} />
      <Route path="/teams/:team_id" component={Teams} />
    </Switch>
  </main>
);

export default Main;
