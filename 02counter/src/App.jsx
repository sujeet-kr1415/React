import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [counter, setCounter] = useState(15)
  // useState Hook that Returns a stateful value, and a function to update it


  const addValue = () => {
    // console.log('value added', Math.random());
    // console.log("counter update", counter); // but still counter got no change in UI
    // thats why we need react
    // setCounter(prevCounter => prevCounter + 1)
    // setCounter(prevCounter => prevCounter + 1 )
    // setCounter(prevCounter => prevCounter + 1)
    // setCounter(prevCounter => prevCounter + 1)
    if(counter < 20 ){               
      counter = counter + 1
      setCounter(counter)
    }
  }

  const removeValue = () => {
    if(counter > 0 ){               
      counter = counter - 1
      setCounter(counter)
    }
  }
  
  return (
    <>
      <h1>Chai aur react </h1>
      <h2>Counter value: {counter}</h2>

      <button
      onClick={addValue}>Add value {counter}</button>
      <br />
      <button
      onClick={removeValue}
      >Remove value {counter}</button>
    </>
  )
}

export default App
