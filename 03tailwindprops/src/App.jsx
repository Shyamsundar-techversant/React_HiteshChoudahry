import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Card from './components/Card'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className='text-3xl bg-green-500 rounded-md'>Hi</h1>
      <Card username="sree"/>
      <Card username="sree" designation="software-engineer"/>
    </>
  )
}

export default App
