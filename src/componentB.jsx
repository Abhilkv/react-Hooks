import React from 'react';
import {userContext} from './App';

function B() {
  return (
     <div>
          <userContext.consumer>
            { 
                arr => {
                    return <p> Name is {arr}</p>
                } 
            }
      </userContext.consumer>
     </div>
  );
}

export default B;
