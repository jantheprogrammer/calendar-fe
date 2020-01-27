import React, {useState, useEffect} from "react";
import {Col, Row, Tabs} from "antd";
import axios from "axios";
import EventCards from "./EventCards/EventCards";
import {eventsApi} from "../utils/api";

function Events() {
  const [events, setEvents] = useState([]);
  const {TabPane} = Tabs;

  useEffect(() => {
    axios
      .get(eventsApi.get)
      .then(res => {
        setEvents(res.data);
      })
      .catch(err => {
        console.error(err);
      });
  }, []);

  return (
    <Row gutter={20} className="events-row">
      <h2>Upcoming events</h2>

      <Tabs defaultActiveKey="1">
        <TabPane tab="This week" key="1">
          <EventCards events={events}></EventCards>
        </TabPane>

        <TabPane tab="This month" key="2">
          <EventCards events={events}></EventCards>
        </TabPane>

        <TabPane tab="This year" key="3">
          <EventCards events={events}></EventCards>
        </TabPane>
      </Tabs>
    </Row>
  );
}

export default Events;
