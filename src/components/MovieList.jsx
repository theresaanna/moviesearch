import React, { useEffect, useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { act } from '@testing-library/react';

import MovieCard from './MovieCard.jsx';

import fetchAPI from '../utils/API.js';

import './MovieList.scss';

const MovieList = (props) => {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchData = async () => {
      await fetchAPI({'s': props.searchTerm || 'super'})
        .then(movies => act(() => setMovies(movies.Search)))
        .catch(error => setError(error));
    }
    fetchData();
  }, [props.searchTerm]);

  return (
    <Container fluid className="movies">
      <Row>
        <Col><h2>Movie List</h2></Col>
      </Row>
      <Row className="movie-list">
        {error && <div>{error}</div>}
        {movies?.map(movie => <MovieCard key={movie.Title} {...movie}/>
        )}
      </Row>
    </Container>
  );
}

export default MovieList;
