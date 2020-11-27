import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Login from './pages/login'

const Routes: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        {/* <AuthProvider> */}
        <Route exact path="/">
          <Login />
        </Route>
        {/* </AuthProvider> */}
      </Switch>
    </BrowserRouter>
  )
}

export default Routes
