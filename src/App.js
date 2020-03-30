import React, { useState , useCallback, useMemo} from 'react';
import './App.css';
import Name from './name';
import Age from './age';
import AgeBtn from './ageBtn';
import Salary from './salary';
import SalaryBtn from './salaryBtn';


function App() {
  const [age, setAge] = useState(25);
  const [salary, setSalary] = useState(40000);

  // useCallBack is mainly used for the functions that are callBack to child  components, useCallback 
  // stores the function entity itself and uses that entity to register on next re-render of the parent 
  // component App.js, instead of registering a new function with same name and functionality, to use useCallback
  //  the child component should be optimized ( export by wrapping inside React.memo() for eg watch any child
  //   export statement )
  const incrementSalary = useCallback(() => {
    setSalary( prev => prev + 10000);
  }, [salary])

  const incrementAge = useCallback(() => {
    setAge( prev => prev + 1);
  }, [age])

  // useMemo is used for the functions that uses internal to the component , they store the previous 
  // returned value of that function and dont allow to re-render the function untill the specified parameters inside
  // dependancy array is changed => here isEven function wont re-render on each re-render of App.js , isEven will 
  // re-render only is the age is changed

  const isEven = useMemo(() => {
    alert('even or odd')
    return Number(age) % 2 === 0;
  }, [age])

  return (
    <div className="App">
      <Name name='abhil'/>
      <Age age={age}/>
      { isEven ? 'EVEN AGE' : 'ODD AGE'}
      <AgeBtn onclick={incrementAge} />
      <Salary salary={salary} />
      <SalaryBtn onclick={incrementSalary} />
    </div>
  );
}

export default App;
