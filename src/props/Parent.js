import { useState } from "react";
import Child from "./Child";

const Parent=()=>{
    const [color,serColor]=useState('black');
    const handleColor=(col)=>{
        serColor(col)
    }
    console.log(color)
    return <>
    <h2>Parent Component</h2>
    <div style={{width:"300px",height:"200px", backgroundColor:`${color}`}}></div>
    <Child handleColor={handleColor}/>
    </>
}
export default Parent;