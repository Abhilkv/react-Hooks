import React from 'react';
import logo from './logo.svg';
import './App.css';

const initialState = {count: 0}
const reducer = (state, action) => {
  const value = action.value;
  switch(action.type) {
    case 'increment':
      return { ...state, count: state.count + value}
    case 'decrement': 
      return { ...state, count: state.count - value}
    case 'reset': 
      return initialState
    default:
     throw new Error();
  }
}

function App() {
  const [state, dispatch] = React.useReducer(reducer, initialState);
  return (
    <div className="App">
      <div>
        {state.count}
        <div style={{display: 'flex', justifyContent: 'center'}}>
          <button onClick={() => {dispatch({type: 'increment', value: 2})}}> ADD</button>
          <button onClick={()=>{dispatch({type: 'decrement', value: 1})}}> SUBTRACT</button>
          <button onClick={()=>{dispatch({type: 'reset', value: 0})}}> reset</button>
        </div>
      </div>
    </div>
  );
}

export default App;
