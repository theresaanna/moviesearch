import React, { useEffect, useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';

import MovieCard from './MovieCard'

import fetchAPI from '../utils/API'

const MovieList = (props) => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetchAPI({'s': props.searchTerm || 'super'})
      .then(movies => setMovies(movies.Search));
  }, []);

  return (
    <Container fluid className="movie">
      <Row>
        <Col><h2>Movie List</h2></Col>
      </Row>
      <Row className="movie-list">
        {movies.map(movie => {
          return(
              <MovieCard {...movie}/>
          )
        })};
      </Row>
    </Container>
  );
}

export default MovieList;
