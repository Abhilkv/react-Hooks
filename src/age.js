import React from 'react';
import './App.css';

function Age(props) {
    alert('age')
  return (
    <div className="App">
      {props.age}
    </div>
  );
}

export default React.memo(Age);
