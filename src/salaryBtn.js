import React from 'react';
import './App.css';

function BtnSalary(props) {
    alert('salary btn');
  return (
    <div className="App">
      <button onClick={props.onclick}>Salary +</button>
    </div>
  );
}

export default React.memo(BtnSalary);
