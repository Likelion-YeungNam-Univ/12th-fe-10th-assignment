import styled from "styled-components";
import "./App.css";
import Card from "./Card";

function App() {
  return (
    <Container>
      <Header>
        <Logo src="./logo.jpeg"></Logo>
        <Title>포켓몬 도감</Title>
      </Header>
      <Card />
    </Container>
  );
}
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
  justify-content: space-between;
  align-items: center;
  background-color: black;

`;

const Title = styled.h1`
  font-weight: 800;
  text-align: center;
  color: white;
  font-size: 35px;
  flex-grow: 1;
  margin-right: 200px;
`;

const Logo = styled.img`
  width: 200px;
  height: auto;
`;

export default App;
