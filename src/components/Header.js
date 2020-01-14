import React, { Fragment, useState, useEffect } from 'react'
import { Col, Row } from 'antd'
import axios from 'axios'
import { namedaysApi } from '../api'

function Header() {
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

    return (
        <Fragment>
            <Row className="title-row">
                <Col span={16} className="title">
                    <h1>Calendar summary</h1>
                </Col>

                <Col span={8}>
                    <Row>
                        <Col span={16} className="align-right">
                            Nameday today:
                        </Col>
                        <Col span={8} className="align-left">
                            <b>{nameToday}</b>
                        </Col>
                    </Row>
                    <Row>
                        <Col span={16} className="align-right">
                            Nameday tomorrow:
                        </Col>
                        <Col span={8} className="align-left">
                            <b>{nameTomorrow}</b>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Fragment>
    )
}

export default Header
