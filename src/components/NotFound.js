import React from 'react'
import {Row} from 'antd'
import MyLayout from './MyLayout'

function Overview() {
  return (
    <MyLayout>
      <Row>
        <div className='heading'>
          <h2>Not Found</h2>
        </div>
      </Row>
    </MyLayout>
  )
}

export default Overview
