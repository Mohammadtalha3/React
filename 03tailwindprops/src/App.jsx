import { useState } from 'react'
import './App.css'
import Card from './components/cards'


function App() {
  const [count, setCount] = useState(0)

  let myobj= {
    username: "Talha",
    age: 21
  }

  return (
    <>
      <h1 className='bg-green-400 text-black p-4 rounded-xl mb-4'>This is Talwind props</h1>  
      <Card username="Chaiaurcode" btnText= "click me" />
      <Card username="abcc" btnText="visit me "/>
    </>
  )
    
     
}

export default App

