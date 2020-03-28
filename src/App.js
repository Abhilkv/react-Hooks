import React from 'react';
import A from './componentA'
import './App.css';

export const userContext = React.createContext()

function App() {
  return (
    <div>
      <userContext.provider value={'abhi'}>
         <A />
    </userContext.provider>
    </div>
  );
}  

export default App;
