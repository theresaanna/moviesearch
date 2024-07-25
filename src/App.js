import React, { useState, useEffect } from 'react';
import { Container, Row, Col, ThemeProvider, Collapse } from 'react-bootstrap';
import { act } from '@testing-library/react';

import fetchAPI from './utils/API.js';

import LeftNav from './components/LeftNav.js';
import MovieList from './components/MovieList.jsx';
import Search from './components/Search.jsx';

import 'bootstrap/dist/css/bootstrap.min.css';

import './App.scss';

import './img/hamburger.svg';
import './img/x.svg';

function App() {
  const [menu, setMenu] = useState(false);
	const [error, setError] = useState(null);
	const [movies, setMovies] = useState([]);
	const [search, setSearch] = useState('super');
	const [activeMovie, setActiveMovie] = useState([]);

	const fetchSearchData = async () => {
		await fetchAPI({'s': search})
		.then(movies => act(() => setMovies(movies)))
		.catch(error => setError(error));
	}

	const fetchModalData = async (imdbID) => {
		await fetchAPI({'i': imdbID})
			.then(movie => act(() => setActiveMovie(movie)))
			.catch(error => setError(error));
	}

	const fetchYear = async (year) => {
		await fetchAPI({'s': search, 'y': year})
			.then(movies => act(() => setMovies(movies)))
			.catch(error => setError(error));
	}

	const handleSearch = (event) => {
		event.preventDefault();
		setSearch(event.target.searchTerm.value);
	}

	const handleCardClick = (imdbID) => {
		fetchModalData(imdbID);
	}

	const handleCatClick = (event) => {
		event.preventDefault();
		fetchYear(event.target.innerText)
	}

	useEffect(() => {
		fetchSearchData();
	}, [search])

  return (
    <ThemeProvider
      breakpoints={['xxl', 'xl', 'lg', 'md', 'sm', 'xs', 'xxs']}
      minBreakpoint="xxs"
    >
      <header className="page-header">
        <div className={`hamburger d-sm-none show-${!menu}`} onClick={() => setMenu(!menu)} />
        <h1 className="page-title">Movie Search</h1>
				<Search handleSearch={handleSearch} />
      </header>
      <Container fluid className="App">
        <Row>
          <Collapse in={menu} dimension="width" className="d-sm-block">
            <Col xs="2" sm="3" className="left-nav-container">
              <LeftNav handleCatClick={handleCatClick}/>
            </Col>
          </Collapse>

          <Col xs="12" sm="9" className="movie-list-container">
						{error && <div>{error}</div>}
						<MovieList movies={movies} handleCardClick={handleCardClick} activeMovie={activeMovie} />
					</Col>
        </Row>
      </Container>
    </ThemeProvider>
  );
}

export default App;
