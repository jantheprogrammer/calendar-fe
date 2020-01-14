import React, { useState, useEffect } from 'react'
import { Table, Row, Col } from 'antd'
import axios from 'axios'
import { eventsApi } from '../api'

function EventsTable() {
    const [events, setEvents] = useState([])

    // columns for table below
    const columns = [
        {
            title: 'Date',
            dataIndex: 'date',
            key: 'date',
        },
        {
            title: 'Title',
            dataIndex: 'summary',
            key: 'summary',
        },
        {
            title: 'Description',
            dataIndex: 'description',
            key: 'description',
        },
        {
            title: 'Lenght (mins)',
            dataIndex: 'length',
            key: 'length',
        },
    ]

    useEffect(() => {
        axios
            .get(eventsApi.get)
            .then(res => {
                setEvents(res.data)
            })
            .catch(err => {
                console.error(err)
            })
    }, [])

    return (
        <Row className="events-row">
            <h2>Summary</h2>
            <Col>
                <Table dataSource={events} columns={columns} size="small" />
            </Col>
        </Row>
    )
}

export default EventsTable
