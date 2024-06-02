import axios from 'axios';
import React, { useEffect, useState } from 'react'
import styled from 'styled-components';
import MovieCard from './MovieCard';

const MovieList = () => {
    const [movieList, setMovieList] = useState([]);

    useEffect(() => {
        axios.get(`https://api.themoviedb.org/3/movie/now_playing?api_key=${process.env.REACT_APP_APP_KEY}&language=ko-KR`)
            .then(result => {
                console.log(result.data.results);
                setMovieList(result.data.results);
            })
            .catch(error => console.error(error));
    },[])

  return (
      <Wrapper>
          {movieList.map(movie => {
              console.log("movie:",movie);
              return <MovieCard title={movie.title} desc={movie.overview} poster={movie.poster_path} popularity={movie.popularity} stars={movie.vote_average}></MovieCard>
          })}
    </Wrapper>
  )
}

const Wrapper = styled.div`
    display : flex;
    justify-content : space-between;
    flex-wrap : wrap;
`;

export default MovieList;