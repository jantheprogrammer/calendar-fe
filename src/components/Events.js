import React, {useState, useEffect} from 'react'
import {Row} from 'antd'
import axios from 'axios'
import {eventsApi} from '../utils/api'

function Events() {
  const [events, setEvents] = useState([])
  // const {TabPane} = Tabs;

  useEffect(() => {
    axios
      .get(eventsApi.get)
      .then(res => {
        setEvents(res.data)
        console.log(res.data)
      })
      .catch(err => {
        console.error(err)
      })
  }, [])

  return (
    <Row>
      <h2>Upcoming events</h2>
    </Row>
  )
}

export default Events
