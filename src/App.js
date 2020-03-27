import React, { useState } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0);
  return (
    <div className="App">
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        {/* when ever we give a parameter inside the state setting function it points to the current state value  */}
        <button onClick={() => {setCount( preValue => preValue + 1 )}} > 
          + ADD
        </button>
        <div>
         COUNT VALUE IS : {count}
        </div>
        <button onClick={() => {setCount( preValue => preValue - 1 )}} >
          - MINUS
        </button>
      </div>
    </div>
  );
}

export default App;
