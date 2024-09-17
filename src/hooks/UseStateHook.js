import React from 'react'
import { useState } from 'react'

function UseStateHook() {
    const [counter, setCounter]=useState({counter:0})
  return (
    <div>
        <h2>useState Hook</h2>
        <p>{counter.counter}</p>
        <button onClick={()=>setCounter((prev)=>({...prev, counter:prev.counter+1}))}>Increment</button>
        <button onClick={()=>setCounter((prev)=>({...prev, counter:prev.counter-1}))}>Decrement</button>
    </div>
  )
}

export default UseStateHook