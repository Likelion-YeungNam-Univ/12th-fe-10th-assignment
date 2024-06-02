import styled from "styled-components";
import "./App.css";
import Card from "./Card";
const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-items: center;
  height: 100vh;
`;
const Header = styled.header`
  display: flex;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 100px;
  width: 100%;
  justify-content: center;
  align-items: center;
  background-color: black;
`;

const Title = styled.h1`
  font-weight: 800;
  text-align: center;
  color: white;
  font-size: 35px;
`;

function App() {
  return (
    <Container>
      
      <Header>
        <Title>포켓몬 도감</Title>

      </Header>
      <Card />
    </Container>
  );
}

export default App;
