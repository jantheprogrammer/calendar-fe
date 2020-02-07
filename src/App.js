import React from 'react'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import './App.css'
import Events from './components/Events'
import MyLayout from './components/MyLayout'

function App() {
  return (
    <Router>
      <Switch>
        <MyLayout>
          <Route path="*" component={Events} />
        </MyLayout>
      </Switch>
    </Router>
  )
}

export default App
