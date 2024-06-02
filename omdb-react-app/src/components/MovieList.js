import React from 'react';
import Movie from './Movie';
import '../styles/MovieList.css';

const MovieList = ({ movies }) => {
  return (
    <div className="movie-list">
      {movies.length ? (
        movies.map((movie) => <Movie key={movie.imdbID} movie={movie} />)
      ) : (
        <p>입력한 영화가 존재하지 않습니다.</p>
      )}
    </div>
  );
};

export default MovieList;
