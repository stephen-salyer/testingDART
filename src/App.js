import React from 'react';
import NavBar from './Components/NavBar';
import SecondaryNav from './Components/SecondaryNav';
import ProgramListBody from './Components/ProgramListBody';
import './App.css';

function App() {
  return (
    <div>
      <NavBar />
      <SecondaryNav />
      <ProgramListBody />
    </div>
  );
}

export default App;
