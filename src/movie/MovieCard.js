import React from 'react'
import styled from 'styled-components';

const MovieCard = ({title, desc, poster, popularity, stars}) => {
  return (
      <Wrapper>
          <Poster src={`https://image.tmdb.org/t/p/w500${poster}`}></Poster>
          <Description>
              <Title>{title}</Title>
              <Body>{desc}</Body>
              <Info>관객 수 : {popularity} / 평점 : {stars}</Info>
          </Description>
    </Wrapper>
  )
}

const Wrapper = styled.div`
    display : flex;
    flex-direction : column;
    justify-content : space-between;
    gap : 10px;
    width : 400px;

    margin-bottom : 50px;

`;

const Poster = styled.img`
    height : 530px;
    border-radius : 10px;
    transition : 0.3s;

    &:hover{
        scale : 1.03 1.03;
    }
`;

const Description = styled.div`
    box-sizing : border-box;
    padding : 15px;
    height : 190px;
    background-color : #fff;
    border-radius : 10px;
    box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
    cursor: pointer;
    overflow : hidden;
`;

const Title = styled.div`
    font-size : 15px;
    font-weight : bold;
    margin-bottom : 10px;
`;

const Body = styled.div`
    color : gray;
    height : 105px;
    overflow-y : hidden;
    margin-bottom : 8px;
`

const Info = styled.div`
    display : flex;
    justify-content : end;
    gap : 10px;
    font-weight : bold;
`;


export default MovieCard