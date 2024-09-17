import React, { useRef } from 'react'

function UseRef() {
    const inpValue=useRef();
  return (
    <div>
        <h2>useRef()</h2>
        <input type="text" ref={inpValue}/>
        <button onClick={()=>{console.log(inpValue.current.value)}}>Reset</button>
    </div>
  )
}

export default UseRef