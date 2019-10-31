import React from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'

import Home from './home.index'

export default () => (
  <Switch>
    <Route exact path='/' render={() => <Redirect to='/movies' />} />
    <Route path='/movies' component={Home} />
  </Switch>
)
