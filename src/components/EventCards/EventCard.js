import React, { Fragment } from 'react'
import { Card, Row, Col } from 'antd'

function EventCard({ title, events }) {
    return (
        <Card title={title} bordered={false}>
            {events.map(event => (
                <Fragment>
                    <Row>{`${event.date} - ${event.summary} (${event.length})`}</Row>
                    <Row>{event.description}</Row>
                </Fragment>
            ))}
        </Card>
    )
}

export default EventCard
