import React, {useState, useEffect} from 'react'
import {Row} from 'antd'
import axios from 'axios'
import {eventsApi} from '../utils/api'
import MyLayout from './MyLayout'

function Birthdays() {
  // const [birthdays, setBirthdays] = useState([])

  // useEffect(() => {
  //   axios
  //     .get(eventsApi.get)
  //     .then(res => {
  //       setBirthdays(res.data.filter(e => e.summary === 'Birthday'))
  //     })
  //     .catch(err => {
  //       console.error(err)
  //     })
  // }, [])

  return (
    <MyLayout>
      <Row>
        <div className='heading'>
          <h2>Birthdays</h2>
        </div>
        <div className='content'>Bday</div>
      </Row>
    </MyLayout>
  )
}

export default Birthdays
