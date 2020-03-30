import React from 'react';
import './App.css';

function BtnAge(props) {
    alert('age btn');
  return (
    <div className="App">
      <button onClick={props.onclick}>Age +</button>
    </div>
  );
}

export default React.memo(BtnAge);
