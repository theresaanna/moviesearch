import React, { useEffect, useState } from 'react';

import { Modal, Button } from 'react-bootstrap';

import fetchAPI from '../utils/API'

const MovieCard = (props) => {
  const [movie, setMovie] = useState([]);
  const [modal, setModal] = useState(false);

  const handleClose = () => setModal(false);
  const handleShow = () => setModal(true);

  useEffect(() => {
    fetchAPI({'i': props.imdbID}).then(movie => setMovie(movie));
  }, []);

  return(
    <div className="movie">
      <div className="movie-card" onClick={handleShow}>
        <h2>{movie.Title}</h2>
        <div className="movie-year">{movie.Year}</div>
        <img src={movie.Poster} />
      </div>
      <Modal show={modal} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{movie.Title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="modal-year">{movie.Year}</div>
          <div className="modal-rated">{movie.Rated}</div>
          <div className="modal-released">{movie.Released}</div>
          <div className="modal-runtime">{movie.Runtime}</div>
          <div className="modal-genre">{movie.Genre}</div>
          <div className="modal-director">{movie.Director}</div>
          <div className="modal-writer">{movie.Writer}</div>
          <div className="modal-actors">{movie.Actors}</div>
          <div className="modal-plot">{movie.Plot}</div>
          <div className="modal-language">{movie.Language}</div>
          <div className="modal-country">{movie.Country}</div>
          <div className="modal-poster"><img src={movie.Poster} /></div>
        </Modal.Body>
      </Modal>
    </div>
  );
}

export default MovieCard;
