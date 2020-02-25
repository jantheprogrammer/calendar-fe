import React, {useState, useEffect} from 'react'
import {Row, Col} from 'antd'
import axios from 'axios'
import {months} from '../utils/const'

import {eventsApi} from '../utils/api'
import MyLayout from './MyLayout'

function Birthdays() {
  const [birthdays, setBirthdays] = useState([])

  const toDate = '2021-01-01'
  const dateSuffix = 'T00:00:00.0Z'

  useEffect(() => {
    axios
      .get(eventsApi.get, {
        params: {
          to_date: toDate + dateSuffix,
        },
      })
      .then(res => {
        let birthdays = res.data.filter(e => e.summary === 'Birthday')

        birthdays.map((day, index) => (day.date = day.date.slice(5, 10)))

        setBirthdays(birthdays)
      })
      .catch(err => {
        console.error(err)
      })

    console.log('in async func: ', birthdays)
  }, [])

  const handleBirthdayFiler = (birthday, index) => {
    let month = birthday.date.slice(0, 2)
    let birthdayIndex = index + 1 < 10 ? String('0' + (index + 1)) : String(index + 1)
    if (month === birthdayIndex) {
      return (
        <li key={`${birthdayIndex}-${birthday.description}`}>
          <b>{birthday.date.slice(3, 5)}.</b> {birthday.description}
        </li>
      )
    }
  }

  const renderBirthdays = () => {
    let birthdaysToRender = []
    for (let i = 0; i <= 5; i++) {
      birthdaysToRender.push(
        <Row key={i}>
          <Col offset={4} span={8} className='month'>
            <h3>{months[i]}</h3>
            <ul>{birthdays.map(birthday => handleBirthdayFiler(birthday, i))}</ul>
          </Col>
          <Col span={8} className='month'>
            <h3>{months[i + 6]}</h3>
            <ul>{birthdays.map(birthday => handleBirthdayFiler(birthday, i + 6))}</ul>
          </Col>
        </Row>
      )
    }
    return birthdaysToRender
  }

  // Finish summary of reading in overview in any form

  return (
    <MyLayout>
      <Row>
        <div className='heading'>
          <h2>Birthdays</h2>
        </div>
        <div className='content'>
          {/* date pickers commented but ready to use anywhere else */}
          {/* <DatePicker
            // disabledDate={this.disabledStartDate}
            format="YYYY-MM-DD"
            // value={startValue}
            placeholder="Start"
            // onOpenChange={this.handleStartOpenChange}
          />
          <DatePicker
            // disabledDate={this.disabledEndDate}
            format="YYYY-MM-DD"
            defaultValue={moment(toDate)}
            placeholder="End"
            onChange={(event, value) => setToDate(value)}
            // open={endOpen}
            // onOpenChange={this.handleEndOpenChange}
          />   */}
          <div>{renderBirthdays()}</div>
        </div>
      </Row>
    </MyLayout>
  )
}

export default Birthdays
