import React from 'react';
import './App.css';

import Btn1 from './titleButton1';
import Btn2 from './titleButton2';
import useInput from './useInput';

function App() {
  const initialValue = '';
  const [firstName, bindFirst, resetFirst] = useInput(initialValue)
  const [lastName, bindLast, resetlast] = useInput(initialValue)
  return (
    <div className="App">
      {/* Btn1 and Btn2 uses the same useButton hook even though the valuse used by them are different and independant they 
      wont interpret each other , it acts like useButton code is replacing the useButton involk */}
      <Btn1 />
      <Btn2 />
      <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '100px'}}>
        {/* similar to useButton we crated a hooks for the input tag with its coresponding operations like onchange  */}
        <input
        type='text' 
          {...bindFirst}
        />
        <input 
        type='text'
        {...bindLast}
        />
        <button onClick={() => {
          alert(`Hello ${firstName} ${lastName}`);
          resetFirst();
          resetlast();
        }}>SUBMIT</button>
      </div>
    </div>
  );
}

export default App;
