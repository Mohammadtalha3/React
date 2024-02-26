import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  const[counter,setcounter]= useState(5)// counter is a variale and setcounter is a function which updates the counter in where ever counter is called

  
  //let counter=5

  const addvalue=() =>{
    console.log('clicked',counter )
    //counter= counter+1

    if (counter>=20){
      return;
    }
    setcounter(counter+1)
    
  }
  const removevalue=()=>{
    console.log('clicked', counter)

    if(counter<=0){
      return;
    }
    setcounter(counter-1)
  }

  

  return (
   <>
    <h1>This is a counter project</h1>
    <h2>Counter value {counter}</h2>
    <button onClick={addvalue}>Add Value</button>
    <br />
    <button onClick={removevalue}>Remove Value</button>

    </> 
  )
}

export default App
