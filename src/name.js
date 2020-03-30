import React from 'react';
import './App.css';

function Name(props) {
    alert("name");
  return (
    <div className="App">
      {props.name}
    </div>
  );
}

export default React.memo(Name);
