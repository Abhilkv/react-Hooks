import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [click, setClick] = useState(false);
  return (
    <div className="App">
      <header onClick={() => {setClick(prev => !prev)}} className="container">
        <div className= {!click ? "lines" : "cross1"}></div>
        <div className={!click ? "lines_two" : "hidden"}></div>
        <div className={!click ? "lines" : "cross2"}></div>
      </header>
    </div>
  );
}

export default App;
