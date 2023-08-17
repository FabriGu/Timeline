import './App.css';
import './App.sass';
import 'bootstrap/dist/css/bootstrap.min.css';

//import { Timeline } from 'react-svg-timeline';
import TimelineSVG from './components/TimelineSVG'
import TimelineProt from './components/TimelineProt';
import Timeline from './components/Timeline';
import dataset from './data/dataset.json';

// Bootstrap 
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import VisTimeline from './components/VisTimeline';



function App() {
  return (
    <div className="App">
      <Container>
        <Row>
          {/* <Col>
            <Button variant="light" onClick={}>PLAY</Button>{' '}
            <Button variant="light">PAUSE</Button>{' '}
          </Col>
          <Col>
            <TimelineSVG /> */}
            {/* <TimelineProt></TimelineProt> */}
          {/* </Col> */}
          <Col>
            <Timeline></Timeline>
            
          </Col>
          
        </Row>
      </Container>
    </div>
  );
}

export default App;
