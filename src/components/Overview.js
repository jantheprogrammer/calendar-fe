import React, {useState, useEffect} from 'react'
import {Row} from 'antd'
import axios from 'axios'
import {eventsApi} from '../utils/api'
import MyLayout from './MyLayout'

function Overview() {
  // const [events, setEvents] = useState([])

  // useEffect(() => {
  //   axios
  //     .get(eventsApi.get)
  //     .then(res => {
  //       setEvents(res.data)
  //     })
  //     .catch(err => {
  //       console.error(err)
  //     })
  // }, [])

  return (
    <MyLayout>
      <Row>
        <div className='heading'>
          <h2>Overview</h2>
        </div>
        <div className='content'>Content</div>
      </Row>
    </MyLayout>
  )
}

export default Overview
