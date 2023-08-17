import * as React from "react";
import { Timeline } from "react-svg-timeline";

// Bootstrap
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

function TimelineSVG(props) {
  const dateFormat = (s: number) => new Date(s).toLocaleString();
  return (
    <Timeline
      on
      customRange={[
        props.events[0].startTimeMillis,
        props.events[0].startTimeMillis + props.timeElapsed + 10000,
      ]}
      //customRange={[props.now-10000, props.now+props.timeElapsed+10000]}

      width={1000}
      height={300}
      events={props.events}
      lanes={props.lanes}
      dateFormat={dateFormat}
    />
  );
}

export default TimelineSVG;
