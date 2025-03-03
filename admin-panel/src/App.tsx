import React from 'react';
import logo from './logo.svg';
import './App.css';

// import axios from 'axios', get news API
import axios from 'axios';
const API_URL = 'https://newsapi.org/v2/top-headlines?country=de&apiKey=fcd59a17a32946da8b0b4b5cd050f03b';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

// export default App;

export const getNews = async () => {
  return await axios.get(API_URL);
};
