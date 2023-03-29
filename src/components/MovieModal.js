import { Modal } from 'react-bootstrap';

import './MovieModal.scss';

const MovieModal = (props) => {
  return (
    <Modal show={props.modal} onHide={props.handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>{props.Title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="modal-year"><span className="modal-label">Year:</span> {props.Year}</div>
        <div className="modal-rated"><span className="modal-label">Rating:</span> {props.Rated}</div>
        <div className="modal-released"><span className="modal-label">Released:</span> {props.Released}</div>
        <div className="modal-runtime"><span className="modal-label">Runtime:</span> {props.Runtime}</div>
        <div className="modal-genre"><span className="modal-label">Genre:</span> {props.Genre}</div>
        <div className="modal-director"><span className="modal-label">Director:</span> {props.Director}</div>
        <div className="modal-writer"><span className="modal-label">Writer:</span> {props.Writer}</div>
        <div className="modal-actors"><span className="modal-label">Actors:</span> {props.Actors}</div>
        <div className="modal-plot"><span className="modal-label">Plot:</span> {props.Plot}</div>
        <div className="modal-language"><span className="modal-label">Language:</span> {props.Language}</div>
        <div className="modal-country"><span className="modal-label">Country:</span> {props.Country}</div>
        <div className="modal-poster"><img src={props.Poster} alt={`poster-${props.Title}`} /></div>
      </Modal.Body>
    </Modal>
  )
}

export default MovieModal;
