import React from 'react';
import A from './componentA'
import './App.css';

export const userContext = React.createContext()
// even if you use consumer command or useContext hook at the destination the provider is coded as the same as below
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
