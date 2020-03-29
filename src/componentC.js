import React, { useContext } from 'react';
import './App.css';
import { dataContext } from './App';

function C() {
  const value = useContext(dataContext); 
  return (
    <div className="App">
         {value.stateVal.count}
        <div style={{display: 'flex', justifyContent: 'center'}}>
          <button onClick={() => {value.dataDispatch({type: 'increment', value: 2})}}> ADD</button>
          <button onClick={()=>{value.dataDispatch({type: 'decrement', value: 1})}}> SUBTRACT</button>
          <button onClick={()=>{value.dataDispatch({type: 'reset', value: 0})}}> reset</button>
        </div>
    </div>
  );
}

export default C;
