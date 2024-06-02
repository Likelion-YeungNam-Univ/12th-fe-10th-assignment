import axios from 'axios';
import { useState } from 'react';
import styled from 'styled-components';

function App() {
  const [latitude, setLatitude] = useState('');
  const [longitude, setLongitude] = useState('');
  const [temp, setTemp] = useState('');
  const [name, setName] = useState('');

  const getWeather = async () => {
    try {
      const res = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=metric&lang=kr&appid=${process.env.REACT_APP_MY_KEY}`
      );
      console.log(res.data);
      setTemp(res.data.main.temp);
      setName(res.data.name);
    } catch (error) {
      console.error(error);
    }
  };

  const handleLatitude = (e) => {
    e.preventDefault();
    setLatitude(e.target.value);
  };

  const handleLongitude = (e) => {
    e.preventDefault();
    setLongitude(e.target.value);
  };

  return (
    <Box>
      <h1>경도, 위도로 날씨 알아보기</h1>
      <InputBox>
        <Input type="latitude" placeholder={'경도'} onChange={handleLatitude} />
        <Input type="longitude" placeholder={'위도'} onChange={handleLongitude} />
        <Button onClick={getWeather}>날씨는?</Button>
      </InputBox>
      <WeatherBox>
        <h3>기온 : {temp}</h3>
        <h3>지역명 : {name}</h3>
      </WeatherBox>
      <h4>예시</h4>
      <h5>영남대 : 35.83198790328799, 128.7580807103243</h5>
    </Box>
  );
}

const Box = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const InputBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 30px;
  gap: 20px;
`;

const Input = styled.input`
  height: 30px;
  width: 200px;
  font-size: 20px;
`;
const Button = styled.button`
  width: 100px;
  height: 50px;
  font-size: 20px;
  font-weight: bold;
  background-color: skyblue;
`;

const WeatherBox = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid black;
  border-radius: 10px;
  width: 30%;
  padding: 10px;
  margin: 20px;
`;

export default App;
