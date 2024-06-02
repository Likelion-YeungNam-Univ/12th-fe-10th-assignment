import React from 'react';
import '../styles/Movie.css';

const Movie = ({ movie }) => {
  return (
    <div className="movie">
      <h2>{movie.Title}</h2>
      <p>{movie.Year}</p>
      <img src={movie.Poster} alt={`${movie.Title} poster`} />
    </div>
  );
};

export default Movie;
