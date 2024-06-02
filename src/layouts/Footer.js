import React from 'react'
import styled from 'styled-components';

const Footer = () => {
  return (
    <Wrapper>Footer</Wrapper>
  )
}

const Wrapper = styled.div`
    height : 100px;
    background-color : #f03800;
    color : #fff;
    font-size : 30px;
    font-weight : 800;
    font-style : italic;

    box-sizing : border-box;
    padding : 0 50px;


    display : flex;
    justify-content : end;
    align-items: center;
`;
export default Footer