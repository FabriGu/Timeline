import * as React from "react";
import * as ReactDOM from "react-dom";

import TimelineSVG from "./TimelineSVG";

// Bootstrap
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

function Timeline() {
  // ------------------------------------------TIME UPDATE---

  // Time keeping related variables 
  const [recording, setRecording] = React.useState(false);
  const [start, setStart] = React.useState(Date.now());
  const [end, setEnd] = React.useState(Date.now());
  const [now, setNow] = React.useState(Date.now());

  let timeElapsed = Math.round((now - start) / 1000);
  //console.log(timeElapsed);

  // Participants and rendering lanes
  const laneId = "Participant 0";
  const startTimeMillis = now;
  const [lanes, setLanes] = React.useState([
    {
      laneId,
      label: "Participant 0",
    },
  ]);
  const [events, setEvents] = React.useState([
    {
      eventId: "start-1",
      tooltip: "Start 1",
      laneId,
      startTimeMillis,
    },
  ]);

  // interval updating the 'now' time variable every second
  React.useEffect(() => {
    const interval = setInterval(() => {
      setNow(Date.now());
      
      console.log(events);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  // interval updating the 'events' array every second
  React.useEffect(() => {
    const interval = setInterval(() => {
      setEvents([
        ...events,
        {
          eventId: "elapsed-2",
          tooltip: "Elapsed 2",
          laneId,
          startTimeMillis: now,
          endTimeMillis: (now + timeElapsed),
        }
        
      ]);
      console.log(events);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  // ------------------------------------------TIME UPDATE---

  //----------------------------------------------DATA

  // function to handle adding a participant (NOT YET FUNCTIONING)
  function addParticipantHandler() {
    console.log("hi");
    setEvents([
      // {
      //   eventId: "event-1",
      //   tooltip: "Event 1",
      //   laneId,
      //   startTimeMillis: 1167606000000,
      //   endTimeMillis: 1230698892000,
      // },
      ...events,
      {
        eventId: "start-2",
        tooltip: "Start 2",
        laneId,
        startTimeMillis: now,
        //endTimeMillis: start + timeElapsed,
        // startTimeMillis: 1167606000000,
        // endTimeMillis: 1230698892000,
      },
    ]);
  }

  // Function to handle pressing play on recording event fro participant (NOT YET WORKING)
  function playHandler() {
    setStart(now);
    setRecording(true);
    setEvents([
      ...events,
      {
        eventId: "event-1",
        tooltip: "Event 1",
        laneId,
        startTimeMillis: start,
        endTimeMillis: start + timeElapsed,
      },
    ]);
    console.log(recording);
  }

  // function to handle pausing the recording on a participant (NOT YET WORKING)
  function pauseHandler() {
    setRecording(false);
  }

  return (
    <div>
      <Container>
        <Row>
          <Col>
            <Button variant="light" onClick={addParticipantHandler}>
              ADD
            </Button>{" "}
            <Button variant="light" onClick={playHandler}>
              PLAY
            </Button>{" "}
            <Button variant="light" onClick={pauseHandler}>
              PAUSE
            </Button>{" "}
          </Col>
          <Col>
            <TimelineSVG
              now={now}
              start={start}
              timeElapsed={timeElapsed}
              end={end}
              events={events}
              lanes={lanes}
            />
            {/* <TimelineProt></TimelineProt> */}
          </Col>
        </Row>
      </Container>
      {/* <Participant data={props.data}></Participant> */}
    </div>
  );
}

export default Timeline;
