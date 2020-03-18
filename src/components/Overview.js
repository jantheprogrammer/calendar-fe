import React, {useContext} from 'react'
import {Row, Table} from 'antd'
import MyLayout from './MyLayout'
import {GlobalContext} from '../context/GlobalState'

function Overview() {
  const {events} = useContext(GlobalContext)

  const reading = events.filter(e => e.summary === 'Reading')
  const readingLen = reading.reduce((accumulator, {length}) => accumulator + length, 0)

  const readingHrs = Math.floor(readingLen / 60)
  const readingMin = readingLen % 60

  const exercising = events.filter(e => e.summary === 'Exercising')
  const exercisingLen = exercising.reduce((accumulator, {length}) => accumulator + length, 0)

  const exercisingHrs = Math.floor(exercisingLen / 60)
  const exercisingMin = exercisingLen % 60

  const data = [
    {
      key: '1',
      activity: 'Exercising',
      value: exercisingLen,
    },
    {
      key: '2',
      activity: 'Reading',
      value: readingLen,
    },
  ]

  const columns = [
    {
      title: 'Activity',
      dataIndex: 'activity',
    },
    {
      title: 'Value',
      dataIndex: 'value',
    },
  ]

  return (
    <MyLayout>
      <Row>
        <div className='heading'>
          <h2>Overview</h2>
        </div>
        <div className='content'>
          <Table columns={columns} dataSource={data} size='small'></Table>

          <div>
            Total reding for: {readingHrs} hrs and {readingMin} mins in {reading.length} sessions
          </div>
          <div>
            {`Total exercising for: ${exercisingHrs} 
            hrs and ${exercisingMin} 
            mins in ${exercising.length} sessions`}
          </div>
        </div>
      </Row>
    </MyLayout>
  )
}

export default Overview
