import React, { useEffect, useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { act } from '@testing-library/react'

import MovieCard from './MovieCard.js'

import fetchAPI from '../utils/API.js'

import './MovieList.scss';

const MovieList = (props) => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetchAPI({'s': props.searchTerm || 'super'})
      .then(movies => act(() => setMovies(movies.Search)));
  }, []);

  return (
    <Container fluid className="movies">
      <Row>
        <Col><h2>Movie List</h2></Col>
      </Row>
      <Row className="movie-list">
        {movies?.map(movie => <MovieCard {...movie}/>
        )};
      </Row>
    </Container>
  );
}

export default MovieList;
