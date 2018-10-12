import React from 'react';
import { Switch, Route } from 'react-router-dom'

import Roster from '../Roster'
import Front from '../Front/Front'
import Schedule from '../Schedule'
import Fetch from '../Fetch'
import MainApp from '../MainApp/MainApp'
import Profile from '../MainApp/Profile'
import Tasks from '../MainApp/Tasks'

const Main = () => (
    <main>
      <Switch>
        <Route exact path='/' component={Front}/>
        <Route path='/roster' component={Roster}/>
        <Route path='/schedule' component={Schedule}/>
        <Route path='/app' component={MainApp}/>
        <Route path='/fetch' component={Fetch}/>
        <Route path='/profile' component={Profile}/>
        <Route path='/tasks' component={Tasks}/>
      </Switch>
    </main>
)

export default Main