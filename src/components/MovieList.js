import React, { useEffect, useState } from 'react';

import MovieCard from './MovieCard'

import fetchAPI from '../utils/API'

const MovieList = (props) => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetchAPI({'s': props.searchTerm || 'super'})
      .then(movies => setMovies(movies.Search));
  }, []);

  return (
    <ul className="movie-list">
      {movies.map(movie => <MovieCard {...movie}/>)}
    </ul>
  );
}

export default MovieList;
