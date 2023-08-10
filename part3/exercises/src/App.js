//import logo from './logo.svg';
import './App.css';
import HobbyIntroduction from './components/Introduction.js';
import data from './components.data.json';
import {useState} from 'react';
import MyProjects from './components/Projects.js';

function App() {
  return (
    <div className="App">
      <h1>My Hobbies: Needlepoint</h1>
      <HobbyIntroduction />
      <MyProjects />
    </div>
  );
}

export default App;
