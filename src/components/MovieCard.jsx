import React, { useEffect, useState } from 'react';
import { Col } from 'react-bootstrap';
import { act } from '@testing-library/react';

import MovieModal from './MovieModal.js'

import fetchAPI from '../utils/API.js'

import './MovieCard.scss';

const MovieCard = (props) => {
  const [modal, setModal] = useState(false);

  const handleClose = () => setModal(false);
  const handleShow = (event) => {
		props.handleCardClick(props.movie.imdbID);
		setModal(true);
	}
  return(
    <>
      <Col data-testid="movie-card" sm="3" className="col-11 movie-card" onClick={handleShow}>
        <h3>{props.movie.Title}</h3>
        <div className="movie-year">{props.movie.Year}</div>
        <img src={props.movie.Poster} className="movie-poster" alt={`poster-${props.movie.Title}`} />
      </Col>
      <MovieModal modal={modal} handleClose={handleClose} {...props.activeMovie}/>
    </>
  );
}

export default MovieCard;
