import React from 'react';
import './App.css';
import Weather from './components/Weather';
import Movie from './components/Movie';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>React API App</h1>
        <Weather />
        <Movie />
      </header>
    </div>
  );
}

export default App;
