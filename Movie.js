import React, { useState, useEffect } from 'react';

const Movie = () => {
  const [movie, setMovie] = useState(null);
  const [title, setTitle] = useState('Inception');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMovie = async () => {
      setLoading(true);
      const response = await fetch(
        `https://www.omdbapi.com/?t=${title}&apikey=${process.env.REACT_APP_OMDB_API_KEY}`
      );
      const data = await response.json();
      setMovie(data);
      setLoading(false);
    };
    fetchMovie();
  }, [title]);

  return (
    <div>
      <h2>Movie Info</h2>
      <input 
        type="text" 
        value={title} 
        onChange={(e) => setTitle(e.target.value)} 
        placeholder="Enter movie title" 
      />
      {loading ? (
        <p>Loading...</p>
      ) : (
        movie && (
          <div>
            <h3>{movie.Title}</h3>
            <p>Year: {movie.Year}</p>
            <p>Director: {movie.Director}</p>
            <p>Plot: {movie.Plot}</p>
          </div>
        )
      )}
    </div>
  );
};

export default Movie;
