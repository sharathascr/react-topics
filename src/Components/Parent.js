import React, { useState } from 'react'
import Child from './Child';

function Parent() {
    const [user, setUser]=useState('');
    const getProps=(data)=>{
        setUser(data);
    }
  return (
    <div>
        <h1>Parent Component</h1>
        <h3>{user}</h3>
        <Child func={(user)=>getProps(user)}/>

    </div>
  )
}

export default Parent