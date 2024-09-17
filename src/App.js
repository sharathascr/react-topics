import { useContext } from "react";
import LoginContextProvider, { LoginContext } from "./hooks/UseContextHook";
import UseEffectHook from "./hooks/UseEffectHook";
import UseStateHook from "./hooks/UseStateHook";
import UseRef from "./hooks/UseRef";
import UseReducerHook from "./hooks/UseReducerHook";
import { useFetchCustomHook } from "./hooks/UseFetchCustomHook";

const App=()=>{
  const data=useFetchCustomHook('https://jsonplaceholder.typicode.com/users');
  console.log(data)
  return <>
  {data.map((user)=><p>{user.name}</p>)}
  </>
};

export default App;