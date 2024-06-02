import React from 'react'
import styled from 'styled-components'
import MovieList from './movie/MovieList';

const Main = () => {
  return (
      <Wrapper>
          <Title>현재 상영 중인 영화</Title>
          <Description>현재 극장에서 상영 중인 영화들을 확인해보세요 ! </Description>
          <MovieList></MovieList>
    </Wrapper>
  )
}

const Wrapper = styled.div`
    box-sizing : border-box;
    padding : 30px 80px;
    overflow-y : scroll;
    background-color : #f1f1f1;
`;

const Title = styled.h1`
    font-size : 40px;
    font-weight : bold;
    font-style : italic;
`;

const Description = styled.div`
    width : 500px;
    margin-bottom : 50px;
`;

export default Main