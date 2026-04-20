import { useState } from 'react'
import './App.css'

function App() {
  let counter = 1;
  const addValue = () => {
    counter = counter + 1;
    console.log(counter);
    
  }
  return (
    <>
      <h1>React Course</h1>
      <h2>Counter Value : {counter}</h2>
      <button onClick={addValue}>Add Value</button>{" "}
      <button>Remove Value</button>
      <p>Footer : {counter}</p>
    </>
  )
}

export default App
