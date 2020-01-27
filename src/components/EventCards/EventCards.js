import React, {Fragment} from "react";
import {Card, Row, Col} from "antd";
import EventCard from "./EventCard";

function EventCards({title, events}) {
  return (
    <Fragment>
      <Col span={8}>
        <EventCard title="School/Work" events={events}></EventCard>
      </Col>
      <Col span={8}>
        <EventCard title="Free time" events={events}></EventCard>
      </Col>
      <Col span={8}>
        <EventCard title="Birthdays" events={events}></EventCard>
      </Col>
    </Fragment>
  );
}

export default EventCards;
