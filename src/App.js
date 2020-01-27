import React from 'react'
import './App.css'
import Events from './components/Events'
import Header from './components/Namedays'
import EventsTable from './components/EventsTable'
import MyLayout from './components/MyLayout'

function App() {
  return (
    <div className='App'>
      {/* <Header />
      <EventsTable /> */}
      <MyLayout>
        <Events />
      </MyLayout>
    </div>
  )
}

export default App
