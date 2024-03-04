import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  const [bgcolor, setBgColor]= useState('white')

  const change_color=(color)=>{

    
  document.body.style.backgroundColor= color
  }

    
  


    
  

  

  

  return (
    <>
    <h1>This is background changer</h1>
    <button className="bg-red-500 text-white font-bold py-2 px-4 rounded" onClick={()=> change_color('red')}> Red </button>
    <button className="bg-blue-500 text-white font-bold py-2 px-4 rounded" onClick={()=> change_color('blue')}> Blue </button>
    <button className="bg-green-500 text-white font-bold py-2 px-4 rounded" onClick={()=> change_color('green')}> Green </button>
    <button className="bg-gray-500 text-white font-bold py-2 px-4 rounded" onClick={()=> change_color('gray')}> Gray </button>
    

    </>
  )

  };


export default App
