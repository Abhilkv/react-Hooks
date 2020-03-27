import React, {useState} from 'react';
import './App.css';


function App() {
  const [yourName, setName] = useState( {firstName: '', lastName: ''} )

  const handleChange = (event) => {
    const { name, value } = event.target;
    setName( {...yourName, [name]: value });
  }

  return (
    <div className="App" style={{display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column'}}>
      <div style={{display: 'flex'}}>
        FIRST NAME: <input value={yourName.firstname} onChange={handleChange} name='firstName' />
      </div>
      <div style={{display: 'flex'}}>
        LAST NAME: <input value={yourName.lastname} onChange={ e => setName({ ...yourName, lastName: e.target.value})} />
      </div>
      <div>
        you are {yourName.firstName} {yourName.lastName}
      </div>
    </div>
  );
}

export default App;
