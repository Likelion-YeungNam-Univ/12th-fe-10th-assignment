import { useState } from "react";
import axios from "axios";
import styled from "styled-components";

function App() {

  const [city, setCity] = useState('');
  const [result, setResult] = useState({});

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.REACT_APP_WEATHER_API_key}`

  const searchWeather = async() => {
    try {
      const res = await axios.get(url)
      console.log(res)
      setResult(res.data)
    } catch (error) {
      console.error(error);
      window.alert("받아오기 실패")
    }
  }
  

  return (
    <AppWraper>
      <input type="text" placeholder="도시 입력" value={city} onChange={(e)=>setCity(e.target.value)}></input>
      <button onClick={searchWeather}>날씨 정보 확인</button>

      {/* result가 빈 오브젝트가 아닐 때만 실행 */}
      {Object.keys(result).length !==0 &&(
      <Result>
        <img src={result.weather[0].icon} alt="" />
        <h2>{result.name}</h2>
        {/* 소수점 한 자리 수까지 온도 표현 */}
        <div>Temperature: {Math.round((result.main.temp - 273.15)*10)/10}°C</div> 
        <div>Weather: {result.weather[0].main}</div>
      </Result>
        
      )}

    </AppWraper>
  );
}

export default App;


const AppWraper = styled.div`
width: 50%;
margin-top: 60px;
padding: 10px;
`;

const Result = styled.div`
margin-top: 60px;
padding: 10px;
border: 1px blue solid;
`;