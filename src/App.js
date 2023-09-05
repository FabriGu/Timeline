import './App.css';
import './App.sass';
import 'bootstrap/dist/css/bootstrap.min.css';

import Timeline from './components/Timeline';
import dataset from './data/dataset.json';

import {useState} from 'react'

// Bootstrap 
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import VisTimeline from './components/VisTimeline';



function App() {
  const [timelines, setTimelines] = useState([<Timeline/>]);

  function addTimeline() {
    setTimelines([...timelines, <Timeline/>])
  }

  return (
    <div className="App">
      <Container>
        <Row>
          <Col>
            {/* {timelines.map((item, i) => ( return{input})} */}
            <Timeline addTimeline={addTimeline}/>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
