import "./App.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from 'react-bootstrap/Button';
import { useReducer } from "react";



const reducer = (count, action) => {
  console.log(count, action);

  switch (action.type) {
      case "up":
        return count + 1;
      case "down":
        if (count != 0)
        return count - 1;
      case "reset":
        return 0;
      default:
        return count;
  }
}

function App() {

  const [ count, dispatch ] = useReducer(reducer, 0)






  return (
    <div className="App">
      <Container>
        <Row className="text-center">
          <h1>Counter</h1>
        </Row>
        <Row className="text-center">
          <div className="m-4">
            {count}
          </div>
        </Row>
        <Row>
          <Col><Button onClick={()=> dispatch({type:"up"})} className="float-end">Hochzählen</Button></Col>
          <Col><Button onClick={()=> dispatch({type:"down"})} className="text-center">Runterzählen</Button></Col>
          <Col><Button onClick={()=> dispatch({type:"reset"})}>Reset</Button></Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
