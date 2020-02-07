import React, {useState, useEffect} from 'react'
import {Col, Row} from 'antd'
import axios from 'axios'
import {namedaysApi} from '../utils/api'

function Namedays() {
  const [nameToday, setNameToday] = useState('')
  const [nameTomorrow, setNameTomorrow] = useState('')

  useEffect(() => {
    axios
      .get(namedaysApi.today)
      .then(res => {
        setNameToday(res.data.data[0].namedays.cz)
      })
      .catch(err => {
        console.error(err)
      })

    axios
      .get(namedaysApi.tomorrow)
      .then(res => {
        setNameTomorrow(res.data.data[0].namedays.cz)
      })
      .catch(err => {
        console.error(err)
      })
  })

  // Add cookies of Namday to not call the api more than once per day

  return (
    <div className="namedays">
      <Row className="today">
        <Col span={14} className="align-right">
          Nameday today:
        </Col>
        <Col span={10} className="align-left">
          <b>{nameToday}</b>
        </Col>
      </Row>
      <Row className="tomorrow">
        <Col span={14} className="align-right">
          Nameday tomorrow:
        </Col>
        <Col span={10} className="align-left">
          <b>{nameTomorrow}</b>
        </Col>
      </Row>
    </div>
  )
}

export default Namedays
