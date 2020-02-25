import React from 'react'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

import Overview from './components/Overview'
import Birthdays from './components/Birthdays'
import NotFound from './components/NotFound'
import {GlobalProvider} from './context/GlobalState'

import './App.css'

function App() {
  return (
    <GlobalProvider>
      <Router>
        <Switch>
          <Route exact path='/overview' component={Overview} />
          <Route exact path='/birthdays' component={Birthdays} />
          <Route path='*' component={NotFound} />
        </Switch>
      </Router>
    </GlobalProvider>
  )
}

export default App
