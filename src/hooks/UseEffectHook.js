import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'

function UseEffectHook() {
    const [users, setUsers]=useState([]);
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/users').then((res)=>res.json()).then((result)=>setUsers(result));
    }, [])
  return (
    <div>
        <h2>UseEffect()</h2>
        {users.map((user)=><p>{user.name}</p>)}
        </div>
  )
}

export default UseEffectHook