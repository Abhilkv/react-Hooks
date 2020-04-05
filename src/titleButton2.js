import React from 'react';
import './App.css';

import useCounter from './useButton';

function Btn2() {
const initialValue = 10;
const value = 2;
const [count, increment, decrement, reset] = useCounter(initialValue, value);
  return (
    <div className="App" style={{ marginTop: '100px'}}>
        <span>COUNT : {count}</span>
        <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
            <button onClick={increment}> ADD</button>
            <button onClick={decrement}>REMOVE</button>
            <button onClick={reset}>RESET</button>
        </div>
    </div>
  );
}

export default Btn2;