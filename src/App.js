import React, {useEffect, useState} from 'react';
import axios from 'axios';
import './App.css';


function App() {
  const [ data, setDate] = useState([]);

  useEffect( () => {
    axios.get('https://jsonplaceholder.typicode.com/posts')
      .then( res => {
        setDate(res.data);
      })
      .catch( err => {
        alert(err);
      })
  }, [])
  return (
    <div className="App">
     {data.map((item) => (
       <li key={item.id}>
         {item.title}
         <br /><br />
       </li>
     ))}
    </div>
  );
}

export default App;
