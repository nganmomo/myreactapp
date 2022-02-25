import React from 'react';
import profileImage from './img/myimg.png';
import './App.css';

function App() {
  return (
    <div className="App">
     <h1> My test react </h1>
     <h2>My test here </h2>     
     <img src={profileImage} alt = "profile"/>
    </div>
  );
}

export default App;
