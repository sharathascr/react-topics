import { useContext } from "react";
import LoginContextProvider, { LoginContext } from "./hooks/UseContextHook";
import UseEffectHook from "./hooks/UseEffectHook";
import UseStateHook from "./hooks/UseStateHook";
import UseRef from "./hooks/UseRef";
import UseReducerHook from "./hooks/UseReducerHook";
import { useFetchCustomHook } from "./hooks/UseFetchCustomHook";
import Parent from "./props/Parent";

const App=()=>{
  return <>
  <Parent/>
  </>
};

export default App;