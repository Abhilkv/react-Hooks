import React from 'react';
import './App.css';
import B from './componentB';
export const dataContext = React.createContext()

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
    <dataContext.provider value={ {stateVal: state, dataDispatch: dispatch} }>
      <div className="App">
      <B />
      </div>
    </dataContext.provider>
  );
}

export default App;
