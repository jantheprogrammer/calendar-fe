import React, { Fragment } from 'react'
import { Card, Row, Col } from 'antd'

function EventCard({ title, date, summary, time, description }) {
  return (
    <Fragment>
      <Card title={title} bordered={false}>
        <Row>
          <Col span={10}>
            `${date} - ${summary}(${time})`
          </Col>
          <Col span={14}>{description}</Col>
        </Row>
      </Card>
    </Fragment>
  )
}

export default EventCard
