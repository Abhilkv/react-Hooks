import { useState } from 'react';
import './App.css';

function useInput(initialValue = '') {

const [value, setInput] = useState(initialValue)

const reset = () => {
    setInput(initialValue)
}

const bind = {
    value,
    onchange: event => {
        setInput(event.target.value)
    }
}

  return [value, bind, reset];
}

export default useInput;
