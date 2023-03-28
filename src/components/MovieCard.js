import React, { useEffect, useState } from 'react';
import { Col } from 'react-bootstrap';

import MovieModal from './MovieModal'

import fetchAPI from '../utils/API'

import './MovieCard.scss';

const MovieCard = (props) => {
  const [movie, setMovie] = useState([]);
  const [modal, setModal] = useState(false);

  const handleClose = () => setModal(false);
  const handleShow = () => setModal(true);

  useEffect(() => {
    fetchAPI({'i': props.imdbID}).then(movie => setMovie(movie));
  }, []);

  return(
    <>
      <Col md="3" className="movie-card" onClick={handleShow}>
        <h3>{movie.Title}</h3>
        <div className="movie-year">{movie.Year}</div>
        <img src={movie.Poster} className="movie-poster" />
      </Col>
      <MovieModal modal={modal} handleClose={handleClose} {...movie}/>
    </>
  );
}

export default MovieCard;
