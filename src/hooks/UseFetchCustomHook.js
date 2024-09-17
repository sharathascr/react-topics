import { useState } from "react";
import { useEffect } from "react";

export const useFetchCustomHook=(url)=>{
    const [responses, setResponse]=useState([]);
    useEffect(()=>{
        fetch(url).then((res)=>res.json()).then((result)=>setResponse(result));
    },[])
    console.log(responses)
    return responses;
}
