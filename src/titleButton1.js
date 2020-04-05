import React from 'react';
import './App.css';

import useCounter from './useButton';

function Btn1() {
const initialValue = 0;
const value = 1;
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

export default Btn1;
