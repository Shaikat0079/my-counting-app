import { useState } from 'react'
import './App.css'

function App() {
 const [score,setScore] = useState(0)

 const handleScore = ()=>{
  const run = score+1;
  setScore(run)
 }
 const addFive = ()=>{
  const run = score+5;
  setScore(run)
 }
  return (
    <>
     <h1>Score: {score}</h1>
     <button onClick={handleScore}>Add Score</button>
     <button onClick={addFive}>Add Five</button>
    </>
  )
}

export default App
