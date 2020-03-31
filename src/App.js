import React, {useRef, useEffect, useState} from 'react';
import './App.css';

function App() {
  const inputRef = useRef(null);
  const timerRef = useRef(null);
  const [time, setTime] = useState(0);


// to focus to an input we can use useRef 
// if we dont assign setInterval to a ref variable instead of a normal const variable it will not be accessable to call
// clearInterval as the const variable have only local scope but here we can call clearInterval from the buttons onClick as well 
  useEffect (()=> {
    inputRef.current.focus();
    timerRef.current = setInterval( () => {
      setTime( prev => prev + 1)
    }, 1000)
    return () => {
      clearInterval(timerRef.current)
    }
  }, []);

  const setTimer = () => {
    clearInterval(timerRef.current)
    timerRef.current = setInterval( () => {
      setTime( prev => prev + 1)
    }, 1000);
  }

  return (
    <div className="App" style={{display: 'flex'}}>
      <input ref={inputRef}/>
      {time}
      <button onClick={()=> {clearInterval(timerRef.current)}}>stop time</button>
      <button onClick={setTimer}>start time</button>
    </div>
  );
}

export default App;
