import { Modal } from 'react-bootstrap';

const MovieModal = (props) => {
  return (
    <Modal show={props.modal} onHide={props.handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>{props.Title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="modal-year">{props.Year}</div>
        <div className="modal-rated">{props.Rated}</div>
        <div className="modal-released">{props.Released}</div>
        <div className="modal-runtime">{props.Runtime}</div>
        <div className="modal-genre">{props.Genre}</div>
        <div className="modal-director">{props.Director}</div>
        <div className="modal-writer">{props.Writer}</div>
        <div className="modal-actors">{props.Actors}</div>
        <div className="modal-plot">{props.Plot}</div>
        <div className="modal-language">{props.Language}</div>
        <div className="modal-country">{props.Country}</div>
        <div className="modal-poster"><img src={props.Poster} /></div>
      </Modal.Body>
    </Modal>
  )
}

export default MovieModal;
