import { useState ,useCallback, useEffect} from 'react'
import './App.css'

function App() {
  const[length,setLength] = useState(8);
  const[numbetAllowed,setNumberAllowed] = useState(false);
  const[charAllowed,setCharAllowed] = useState(false);
  const[password,setPassword] = useState('');

  const generatePassword = useCallback(() =>{
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if(numbetAllowed) str += "0123456789";
    if(charAllowed) str += "!@#$%^&*()_+";
    for(let i = 1; i<length; i++){
      const char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }   
    setPassword(pass)          
  },[length,numbetAllowed,charAllowed]);

  useEffect(() =>{
    generatePassword()
  },[length,numbetAllowed,charAllowed])

  return (
    <>
      <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800 text-orange-500">
        <h1 className="text-3xl font-bold mb-2 text-center">
          Password Generator
        </h1>
        <div className="flex shadow rounded-lg overflow-hidden mb-4">
          <input 
            type = "text" 
            value={password}
            className='outline-none w-full py-1 px-3'
            readOnly
          >            
          </input>
          <button className='outline-none bg-blue-700 text-white px-3 py=0.5 shrink=0'>
            copy
          </button>
        </div>
        <div className="flex text-sm gap-x-2">
          <div className="flex items-center gap-x-1">
            <input
              type='range'
              min={8}
              max={100}
              value={length}
              className='cursor-pointer'
              onChange={(e) =>setLength(e.target.value)}
            >
            </input>
            <label htmlFor='length'>Length : {length}</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input 
              type="checkbox" 
              defaultChecked = {numbetAllowed}
              onChange={() =>{
                setNumberAllowed((prev) => !prev)
              }}
              name="" 
              id="" 
            />
            <label htmlFor="number">Numbers</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input 
              type="checkbox" 
              defaultChecked = {charAllowed}
              onChange={() =>{
                setNumberAllowed((prev) => !prev)
              }}
              name="" 
              id="" 
            />
            <label htmlFor="number">Characters</label>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
