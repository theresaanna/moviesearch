import React, { useEffect, useState } from 'react';

import fetchAPI from '../utils/API'

const MovieCard = (props) => {
  const [movie, setMovie] = useState([]);
  const [movieLoaded, setMovieLoaded] = useState(false);

  useEffect(() => {
    fetchAPI({'i': props.imdbID}).then(movie => setMovie(movie));
  }, []);

  return(
    <div className="movie-card">
      <h2>{movie.Title}</h2>
      <div className="movie-year">{movie.Year}</div>
      <img src={movie.Poster} />
    </div>
  );
}

export default MovieCard;
