import React, { useState } from 'react';
import { Container, Row, Col, ThemeProvider, Collapse } from 'react-bootstrap';

import LeftNav from './components/LeftNav.js'
import MovieList from './components/MovieList.jsx'

import 'bootstrap/dist/css/bootstrap.min.css';

import './App.scss';

import './hamburger.svg';
import './x.svg';

function App() {
  const [menu, setMenu] = useState(false);

  /* the animation and hamburger and x images are kinda wonky
     I didn't want to spend too too much time fiddling
     This should meet the functional requirements */
  return (
    <ThemeProvider
      breakpoints={['xxl', 'xl', 'lg', 'md', 'sm', 'xs', 'xxs']}
      minBreakpoint="xxs"
    >
      <header className="page-header">
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
