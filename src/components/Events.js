import React, { useState, useEffect } from 'react'
import { Col, Row } from 'antd'
import axios from 'axios'
import EventCard from './EventCard'

function Events() {
  const [events, setEvents] = useState([])

  useEffect(() => {
    axios
      .get('https://calendar-sum-be.herokuapp.com/api')
      .then(res => {
        console.log('RES: ', res.data)
        setEvents(res.data)
      })
      .catch(err => {
        console.error(err)
      })
  }, [])

  return (
    <Row gutter={20} className="events-row">
      <h2>Upcoming events</h2>
      <Col span={8}>
        <EventCard title="School/Work"></EventCard>
      </Col>
      <Col span={8}>
        <EventCard title="Free time"></EventCard>
      </Col>
      <Col span={8}>
        <EventCard title="Birthdays"></EventCard>
      </Col>
    </Row>
  )
}

export default Events
