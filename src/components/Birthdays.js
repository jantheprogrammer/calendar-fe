import React, {useState, useEffect} from 'react'
import {Row, DatePicker, Col} from 'antd'
import axios from 'axios'
import moment from 'moment'
import {months} from '../utils/const'

import {eventsApi} from '../utils/api'
import MyLayout from './MyLayout'

function Birthdays() {
  const [birthdays, setBirthdays] = useState([])
  const [toDate, setToDate] = useState(['2021-01-01'])

  const dateSuffix = 'T00:00:00.0Z'

  useEffect(() => {
    async function prepareBirthdays() {
      await axios
        .get(eventsApi.get, {
          params: {
            to_date: toDate + dateSuffix,
          },
        })
        .then(res => {
          let birthdays = res.data.filter(e => e.summary === 'Birthday')

          birthdays.map((day, index) => {
            let date = day.date.slice(5, 7)
            if (date[0] === '0') {
              day.date = date[1]
            } else {
              day.date = date
            }
          })
          console.log(birthdays)
          setBirthdays(birthdays)
        })
        .catch(err => {
          console.error(err)
        })

      console.log('in async func: ', birthdays)
    }
    prepareBirthdays()
  }, [])

  console.log('b: ', birthdays, months)

  // List of birthdays in whole year and print it in nice way
  // Finish summary of reading in overview in any form

  return (
    <MyLayout>
      <Row>
        <div className="heading">
          <h2>Birthdays</h2>
        </div>
        <div className="content">
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
          /> */}

          {months.map((month, index) => (
            <Col span={12}>
              <h3>{month}</h3>
              <ul>
                {birthdays
                  .filter(birthday => Number(birthday.date) === index)
                  .map(name => (
                    <li>{name.description}</li>
                  ))}
              </ul>
            </Col>
          ))}
        </div>
      </Row>
    </MyLayout>
  )
}

export default Birthdays
