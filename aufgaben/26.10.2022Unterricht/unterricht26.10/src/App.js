import Food from "./components/Food/Food"
import Header from "./components/Header/Header";
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
// import './App.scss';


const favoriteFood = [
  {
    name: "Spaghetti Bolognese",
    img: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDV8fGRldmVsb3BlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
  },
  
  {
    name: "Hallaca",
    img: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDV8fGRldmVsb3BlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
  },
  
  {
    name: "Ghormeh Sabzi",
    img: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDV8fGRldmVsb3BlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
  },

  {
    name: "Sprotten ohne Öl",
    img: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDV8fGRldmVsb3BlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
  },

];

const foodContainer = favoriteFood.map((el, index) => {
  return (
    <Col key={index}>
      <Food food={el}/>
    </Col>
  )
})





function App() {
  return (
    <div className="App">
        <Header />
      <Container>
        <h1>Unsere Lieblingsessen</h1>
        <Button variant="outline-primary" size="lg">Filtern</Button>
        {/* <Button variant="outline-primary">Primary</Button>{' '} */}
        <Row>
          {foodContainer}
        </Row>
      </Container>
    </div>
  );
}

export default App;
