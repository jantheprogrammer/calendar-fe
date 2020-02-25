import React from 'react'
import {Row} from 'antd'
import MyLayout from './MyLayout'

function Overview() {
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
