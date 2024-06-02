import axios from "axios";
import { useEffect, useState } from "react";
import styled from "styled-components";
function Card() {
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const pocketmonArray = [];
      for (let i = 1; i <= 300; i++) {
        try {
          const pokemonUrl = `https://pokeapi.co/api/v2/pokemon/${i}`;
          const speciesUrl = `https://pokeapi.co/api/v2/pokemon-species/${i}`;

          const [pokemonResponse, speciesResponse] = await Promise.all([
            axios.get(pokemonUrl),
            axios.get(speciesUrl),
          ]);

          const korName = speciesResponse.data.names.find(
            (name) => name.language.name === "ko"
          ).name;

          pocketmonArray.push({
            id: pokemonResponse.data.id,
            name: pokemonResponse.data.name,
            sprites: pokemonResponse.data.sprites,
            korean_name: korName || pokemonResponse.data.name,
          });
        } catch (error) {
            console.log("실패");
        }
      }
      setData(pocketmonArray);
    };

    fetchData();
  }, []);
  return (
    <Container>
      {data.map((pocketmon) => (
        <CardContainer>
          <Image
            src={pocketmon.sprites.front_default}
            alt={pocketmon.korean_name}
          ></Image>
          <Text>{pocketmon.id}</Text>
          <Text>이름 : {pocketmon.korean_name}</Text>
          <Text>영어 이름 : {pocketmon.name}</Text>
        </CardContainer>
      ))}
    </Container>
  );
}

const Container = styled.div`
  width: auto;
  height: auto;
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
  margin-top: 100px;
`;
const Image = styled.img`
  width: 150px;
  height: 150px;
  border-radius: 30px;
  border: none;
`;
const CardContainer = styled.div`
  width: 300px;
  height: 300px;
  display: flex;
  flex-direction: column;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  align-items: center;
  background-color: #f0f0f0;
  margin: 10px;
  border-radius: 25px;
  padding: 0px;
`;
const Text = styled.p`
  font-size: 20px;
  font-weight: 500;
  color: black;
  margin: 10px 0;
`;
export default Card;
