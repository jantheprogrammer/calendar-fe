import React from 'react'
import './App.css'
import Events from './components/Events'
import Header from './components/Header'
import EventsTable from './components/EventsTable'

function App() {
  return (
    <div className="App">
      <Header />
      <Events />
      <EventsTable />
    </div>
  )
}

export default App
