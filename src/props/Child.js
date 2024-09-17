import React from 'react'
import { useRef } from 'react';

function Child({handleColor}) {
    const inpValue=useRef();
    const handleSubmit=()=>{
        console.log('clicked')
       handleColor(inpValue.current.value)  
    }
  return (
    <div>
        <input type='text' ref={inpValue}/>
        <button onClick={handleSubmit}>Submit</button>
    </div>
  )
}

export default Child