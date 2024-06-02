import React from 'react';
import Movie from './Movie';
import '../styles/MovieList.css';

const MovieList = ({ movies }) => {
  return (
    <div className="movie-list">
      {movies.length ? (
        movies.map((movie) => <Movie key={movie.imdbID} movie={movie} />)
      ) : (
        <p>No movies found</p>
      )}
    </div>
  );
};

export default MovieList;
