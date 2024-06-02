import React, { useState, useEffect } from 'react';

const Weather = () => {
  const [weather, setWeather] = useState(null);
  const [city, setCity] = useState('Seoul');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchWeather = async () => {
      setLoading(true);
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.REACT_APP_OPENWEATHERMAP_API_KEY}&units=metric`
      );
      const data = await response.json();
      setWeather(data);
      setLoading(false);
    };
    fetchWeather();
  }, [city]);

  return (
    <div>
      <h2>Weather Info</h2>
      <input 
        type="text" 
        value={city} 
        onChange={(e) => setCity(e.target.value)} 
        placeholder="Enter city" 
      />
      {loading ? (
        <p>Loading...</p>
      ) : (
        weather && (
          <div>
            <h3>{weather.name}</h3>
            <p>Temperature: {weather.main.temp}°C</p>
            <p>Weather: {weather.weather[0].description}</p>
          </div>
        )
      )}
    </div>
  );
};

export default Weather;
