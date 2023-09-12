import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import './style.css'
import NotFound from './views/not-found'
import Notfall from './views/notfall'
import Team from './views/team'
import Home from './views/home'

const App = () => {
  return (
    <Router>
      <div>
        <Route component={NotFound} path="**" />
        <Route component={Notfall} exact path="/notfall" />
        <Route component={Team} exact path="/team" />
        <Route component={Home} exact path="/" />
      </div>
    </Router>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
