import React, {useState, useEffect} from 'react'
import {Col, Row} from 'antd'
import axios from 'axios'

import {namedaysApi} from '../utils/api'

function Namedays() {
  const [nameToday, setNameToday] = useState('')
  const [nameTomorrow, setNameTomorrow] = useState('')

  useEffect(() => {
    async function fetchNamedays() {
      let today = ''
      let tomorrow = ''

      await axios
        .get(namedaysApi.today)
        .then(res => {
          today = res.data.data[0].namedays.cz
          setNameToday(today)
        })
        .catch(err => {
          console.error(err)
        })

      await axios
        .get(namedaysApi.tomorrow)
        .then(res => {
          tomorrow = res.data.data[0].namedays.cz
          setNameTomorrow(tomorrow)
        })
        .catch(err => {
          console.error(err)
        })

      const namedaysDate = new Date()
        .toLocaleString('en-GB', {timeZone: 'Europe/Prague'})
        .split(',')[0]

      const namedaysObj = {date: namedaysDate, today: today, tomorrow: tomorrow}

      localStorage.setItem('namedays', JSON.stringify(namedaysObj))
    }

    if (isLocalStorageDateValid()) {
      const namedays = JSON.parse(localStorage.getItem('namedays'))

      setNameToday(namedays.today)
      setNameTomorrow(namedays.tomorrow)
    } else {
      fetchNamedays()
    }
  }, [])

  function isLocalStorageDateValid() {
    const namedays = localStorage.getItem('namedays')

    if (namedays === null) {
      return false
    } else {
      const namedayDate = JSON.parse(namedays)
      const todayDate = new Date()
        .toLocaleString('en-GB', {timeZone: 'Europe/Prague'})
        .split(',')[0]

      if (namedayDate.date === todayDate) {
        return true
      } else {
        return false
      }
    }
  }

  return (
    <div className='namedays'>
      <Row className='today'>
        <Col span={14} className='align-right'>
          Nameday today:
        </Col>
        <Col span={10} className='align-left'>
          {nameToday}
        </Col>
      </Row>
      <Row className='tomorrow'>
        <Col span={14} className='align-right'>
          Nameday tomorrow:
        </Col>
        <Col span={10} className='align-left'>
          {nameTomorrow}
        </Col>
      </Row>
    </div>
  )
}

export default Namedays
