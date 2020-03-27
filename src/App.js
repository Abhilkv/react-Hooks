import React, { useState, useEffect } from 'react';
import './App.css';

function App() {

  const [count, setCount] = useState(0);
  // this useEffect will be executed after each render of the component 
  // works for each charecter entered on input / for each button click
  useEffect(()=>{
    document.title = `CLICK: ${count}`
  });

  // bellow useEffect will be executed only when the specified value `count` is changed it won't execute after each render 
  // works only for the butoon click
  useEffect(()=>{
    alert(count);
  },[count]);

  // this useEffect with empty dependancy array will we involked only once and mimics componentDidMount methode
  useEffect(()=>{
    alert('COMPONENT DID MOUNT IS CALLED');
    return () => {
      alert('COMPONENTWILLUNMOUNT IS INVOLKED');
    }
  }, [ ]);

  return (
    <div className="App">
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <input type='text'></input>
        <button onClick={() => {setCount( preValue => preValue + 1 )}} > 
          You clicked on this {count} times
        </button>
      </div>
    </div>
  );
}

export default App;
