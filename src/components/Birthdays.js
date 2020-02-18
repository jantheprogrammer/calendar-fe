import React, {useState, useEffect} from 'react'
import {Row, DatePicker} from 'antd'
import axios from 'axios'
import moment from 'moment'

import {eventsApi} from '../utils/api'
import MyLayout from './MyLayout'

function Birthdays() {
  const [birthdays, setBirthdays] = useState([])
  const [toDate, setToDate] = useState(['2021-01-01'])

  const dateSuffix = 'T00:00:00.0Z'

  useEffect(() => {
    axios
      .get(eventsApi.get, {
        params: {
          to_date: toDate + dateSuffix,
        },
      })
      .then(res => {
        console.log(res.data)
        setBirthdays(res.data.filter(e => e.summary === 'Birthday'))
      })
      .catch(err => {
        console.error(err)
      })
  }, [toDate])

  console.log('b: ', birthdays)

  // List of birthdays in whole year and print it in nice way
  // Finish summary of reading in overview in any form

  return (
    <MyLayout>
      <Row>
        <div className='heading'>
          <h2>Birthdays</h2>
        </div>
        <div className='content'>
          <DatePicker
            // disabledDate={this.disabledStartDate}
            format='YYYY-MM-DD'
            // value={startValue}
            placeholder='Start'
            // onOpenChange={this.handleStartOpenChange}
          />
          <DatePicker
            // disabledDate={this.disabledEndDate}
            format='YYYY-MM-DD'
            defaultValue={moment(toDate)}
            placeholder='End'
            onChange={(event, value) => setToDate(value)}
            // open={endOpen}
            // onOpenChange={this.handleEndOpenChange}
          />
        </div>
      </Row>
    </MyLayout>
  )
}

export default Birthdays
