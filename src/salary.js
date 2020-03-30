import React from 'react';
import './App.css';

function Salary(props) {
    alert('salary');
  return (
    <div className="App">
      {props.salary}
    </div>
  );
}

export default React.memo(Salary);
