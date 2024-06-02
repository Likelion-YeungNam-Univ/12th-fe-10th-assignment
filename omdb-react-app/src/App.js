import React, { useState } from 'react';
import MovieList from './components/MovieList';
import './styles/App.css';

const App = () => {
  const [movies, setMovies] = useState([]);
  const [query, setQuery] = useState('');
  const [loading, setLoading] = useState(false);

  const fetchMovies = async () => {
    setLoading(true);
    const API_KEY = '54d12c03';
    const url = `http://www.omdbapi.com/?s=${query}&apikey=${API_KEY}`;

    try {
      const response = await fetch(url);
      const data = await response.json();
      setMovies(data.Search || []);
    } catch (error) {
      console.error('Error fetching the movies:', error);
    }
    setLoading(false);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    fetchMovies();
  };

  return (
    <div className="App">
      <h1>영화 검색</h1>
      <form onSubmit={handleSearch}>
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="영화 제목을 입력하세요..."
        />
        <button type="submit">검색</button>
      </form>
      {loading ? <p>Loading...</p> : <MovieList movies={movies} />}
    </div>
  );
};

export default App;
