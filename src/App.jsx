import React from 'react';
import Header from './components/Header';
import Game from './components/Game';
import GameInfo from './components/GameInfo';
import HowToPlay from './components/HowToPlay';
import Story from './components/Story';
import PlayNow from './components/PlayNow';
import AboutMe from './components/AboutMe';
import './styles/App.css';

function App() {
  return (
    <div className="app-container">
      <Header />
      <GameInfo />
      <Game />
      <HowToPlay />
      <Story />
      <PlayNow />
      <AboutMe />
    </div>
  );
}

export default App;
