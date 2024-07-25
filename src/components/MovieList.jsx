import React, { useEffect, useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';

import MovieCard from './MovieCard.jsx';

import './MovieList.scss';

const MovieList = (props) => {
  return (
    <Container fluid className="movies">
      <Row>
        <Col><h2>Movie List</h2></Col>
      </Row>
      <Row className="movie-list">
        {props.movies.Search?.map(movie => <MovieCard key={movie.Title} handleCardClick={props.handleCardClick} activeMovie={props.activeMovie} movie={movie} {...props}/>
        )}
      </Row>
    </Container>
  );
}

export default MovieList;
