import axios from "axios";
import styled from "styled-components";
import { useState } from "react";

function App() {

  const [movies, setMovies] = useState([])
  const [query, setQuery] = useState("");

  const fetchMovies = async (searchQuery) => {
    try{
      const key = process.env.REACT_APP_MY_KEY
      const res = await axios.get(`http://www.omdbapi.com/?apikey=${key}&s=${searchQuery}`);

      if (res.data.Search){
        setMovies(res.data.Search)
      }
      else{
        setMovies([])
        alert("일치하는 영화가 없습니다")
      }
    }
    catch(error){
      console.error("Error!!!!")
    }
  }

  const handleSearch = (e) => {
    e.preventDefault();
    fetchMovies(query);
    console.log(e)
  };

  return (
    <Wrapper>

      <h1>Search Movie</h1>

      <form onSubmit={handleSearch}>
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="영화 제목을 입력하시오"
        />
        <button type="submit">Search</button>
      </form>

      <MovieList>
        {movies.map((movie) => {
          return (
            <li key={movie.imdbID}>
              <h3>Title : {movie.Title}</h3>
              <p>Year of release : {movie.Year}</p>
              {movie.Poster !== "N/A" && <img src={movie.Poster} alt={`${movie.Title} poster`} width="10%" />}
            </li>
          )
        })}
      </MovieList>

    </Wrapper>
  );
}

const Wrapper = styled.div`
  text-align : center;
  margin-top : 20px;
`

const MovieList = styled.ul`
  list-style-type : none;
`

export default App;
