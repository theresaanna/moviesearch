import React, { useState } from 'react';
import { Container, Row, Col, ThemeProvider, Collapse } from 'react-bootstrap';

import LeftNav from './components/LeftNav'
import MovieList from './components/MovieList'

import 'bootstrap/dist/css/bootstrap.min.css';

import Hamburger from './hamburger.svg';
import X from './x.svg';

function App() {
  const [menu, setMenu] = useState(false);

  return (
    <ThemeProvider
      breakpoints={['xxl', 'xl', 'lg', 'md', 'sm', 'xs', 'xxs']}
      minBreakpoint="xxs"
    >
      <header className="page-header">
        // the animation and hamburger and x images are kinda wonky
        // I didn't want to spend too too much time fiddling
        // This should meet the functional requirements
        <div className={`hamburger d-sm-none show-${!menu}`} onClick={() => setMenu(!menu)} />
        <h1 className="page-title">Movie Search</h1>
      </header>
      <Container fluid className="App">
        <Row>
          <Collapse in={menu} dimension="width" className="d-sm-block">
            <Col xs="2" sm="3" className="left-nav-container">
              <LeftNav/>
            </Col>
          </Collapse>

          <Col xs="12" sm="9" className="movie-list-container"><MovieList/></Col>
        </Row>
      </Container>
    </ThemeProvider>
  );
}

export default App;
