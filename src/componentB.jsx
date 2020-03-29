import React from 'react';
import {userContext} from './App';
import { useContext } from 'react';
// to get the context value from the provider we have 2 methodes 1, using .consumer or 
// using useContext hook, using consumer is an old methode
// value given to useContext will be a context object itself

function B() {
  const value = useContext(userContext);
  return (
     <div>
        {/* <userContext.consumer>
            { 
                arr => {
                    return <p> Name is {arr}</p>
                } 
            }
      </userContext.consumer> */}
      <div>
      name is  {value}
      </div>
     </div>
  );
}

export default B;
