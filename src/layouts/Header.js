import React from 'react'
import styled from 'styled-components'

const Header = () => {
  return (
    <Wrapper>
        CGV      
    </Wrapper>
  )
}

const Wrapper = styled.div`
    height : 100px;
    background-color : #f03800;
    color : #fff;
    font-size : 40px;
    font-weight : 800;


    display : flex;
    justify-content : center;
    align-items: center;
`;

export default Header