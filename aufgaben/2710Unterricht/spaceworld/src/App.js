// import './App.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Apod from './components/Apod/Apod'
import DateForm from './components/DateForm/DateForm'
import moment from 'moment'
import {useState} from 'react'



function App() {

  const today = moment().format("YYYY-MM-DD")

  const [date, setDate] = useState(today)

  return (
    <div className="App">
      <Container>
        <Row>
          <Col><h1>Space Pic des Tages</h1></Col>
        </Row>
        <Row>
          <DateForm date={date} setDate={setDate}/>
        </Row>
        <Row>
          <Apod date={date}/>
        </Row>
      </Container>
      
    </div>
  );
}

export default App;
