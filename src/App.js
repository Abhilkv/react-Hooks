import React, {useState} from 'react';
import './App.css';


function App() {
  const [number, setNumber] = useState([]);
  const [count, setCount] = useState(0);

  const handleChange = (event) => {
    if (event.target.name === 'reset') {
      setCount(0);
    } else {
      setCount( prevCount => prevCount + 1 );
      setNumber( [...number, count])
    }
  }

  return (
    <div className="App" style={{display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column'}}>
      <button onClick={handleChange}>Increment</button>
      <button name='reset' onClick={handleChange}> Reset</button>
      {number.map((item) => (
        <li key={item}>{item}</li>
      ))}
      {count}
    </div>
  );
}

export default App;
