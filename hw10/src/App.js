import React, { useState } from 'react';
import axios from 'axios';
import './App.css';
import shocked from './shocked.png';


function App() {
  const [genre, setGenre] = useState('');

  const fetchGenre = async () => {
    try {
      const response = await axios.get('https://binaryjazz.us/wp-json/genrenator/v1/genre/');
      setGenre(response.data);
    } catch (error) {
      console.error('This is Error!!', error);
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>장르추천</h1>
         <img src={shocked} className="shocked" alt='shocked'/>
        <button className="recom"onClick={fetchGenre}>장/르/추/천/받/기</button>

        {genre && <p>{genre}</p>}
        <h1>진짜있음</h1>
      </header>
    </div>
  );
}

export default App;
