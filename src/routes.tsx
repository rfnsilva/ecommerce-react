import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Login from './pages/login'
import Home from './pages/home'

const Routes: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        {/* <AuthProvider> */}
        <Route exact path="/login">
          <Login />
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
        {/* </AuthProvider> */}
      </Switch>
    </BrowserRouter>
  )
}

export default Routes
