import React, { useReducer } from 'react'

function UseReducerHook() {
    const intialState={counter:0};
    const reducer=(state, action)=>{
        switch(action.type){
            case 'INCREASE':
                return {counter:state.counter+1};
            case 'DECREASE':
                return {counter:state.counter-1};
            default:
                return state;
        }
    }
    const [state, dispatch]=useReducer(reducer, intialState);
  return (
    <div>
        <h2>useReducer()</h2>
        <p>{state.counter}</p>
        <button onClick={()=>dispatch({type:'INCREASE'})}>Increment</button>
        <button onClick={()=>dispatch({type:'DECREASE'})}>Decrement</button>

    </div>
  )
}

export default UseReducerHook