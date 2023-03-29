import React, { useEffect, useState } from 'react';
import { Col } from 'react-bootstrap';
import { act } from '@testing-library/react';

import MovieModal from './MovieModal.js'

import fetchAPI from '../utils/API.js'

import './MovieCard.scss';

const MovieCard = (props) => {
  const [movie, setMovie] = useState([]);
  const [modal, setModal] = useState(false);
  const [, setError] = useState(null)

  const handleClose = () => setModal(false);
  const handleShow = () => setModal(true);

  useEffect(() => {
    const fetchData = async () => {
      fetchAPI({'i': props.imdbID})
      .then(movie => act(() => setMovie(movie)))
      .catch(error => setError(error));
    }
    fetchData();
  });

  return(
    <>
      <Col data-testid="movie-card" sm="3" className="col-11 movie-card" onClick={handleShow}>
        <h3>{movie.Title}</h3>
        <div className="movie-year">{movie.Year}</div>
        <img src={movie.Poster} className="movie-poster" alt={`poster-${movie.Title}`} />
      </Col>
      <MovieModal modal={modal} handleClose={handleClose} {...movie}/>
    </>
  );
}

export default MovieCard;
