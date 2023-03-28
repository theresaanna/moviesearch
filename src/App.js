import { Container, Row, Col } from 'react-bootstrap';

import Header from './components/Header'
import LeftNav from './components/LeftNav'
import MovieList from './components/MovieList'

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Container fluid className="App">
      <Row>
        <Col><Header/></Col>
      </Row>
      <Row>
        <Col md="2"><LeftNav/></Col>
        <Col md="10"><MovieList/></Col>
      </Row>
    </Container>
  );
}

export default App;
