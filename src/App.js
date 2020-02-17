import React from 'react'

import './App.css'
import Overview from './components/Overview'
import Birthdays from './components/Birthdays'
import NotFound from './components/NotFound'

import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/overview' component={Overview} />
        <Route exact path='/birthdays' component={Birthdays} />
        <Route path='*' component={NotFound} />
      </Switch>
    </Router>
  )
}

export default App
