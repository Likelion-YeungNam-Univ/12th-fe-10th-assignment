import React, { useState } from 'react';
import axios from 'axios';
import './Genre.css';
import shocked from './img/shocked.png';


function Genre() {
  const [genre, setGenre] = useState('');

  const fetchGenre = async () => {
    try {
      const response = await axios.get('https://binaryjazz.us/wp-json/genrenator/v1/genre/');
      setGenre(response.data);
    } catch (error) {
      console.error('♩ Error 발생 ♪', error);
    }
  };

  return (
      <header className="header">
        <div className='click'>➚ ★☆ 클릭 ★☆ 클릭 ★☆ ➚</div>
        <div className="title">♪ 장르추천 ♫</div>
         <img src={shocked} className="shocked" alt='shocked'/>
        <button className="recom" onClick={fetchGenre}>※ 추/천/받/기 ※</button>

        {genre && <div className='content'>
            <p>⇣⇣ 이런건어떠세요? ⇣⇣</p>
        <p>-------------</p>
        {genre}
        </div>}

        <div className="bottom">진짜있음</div>
      </header>

  );
}


export default Genre;
