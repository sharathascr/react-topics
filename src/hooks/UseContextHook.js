import { useState } from "react";
import { createContext } from "react";

export const LoginContext=createContext()
const LoginContextProvider=({children})=>{
    const [isLogin, setLogin]=useState(true);
    return <LoginContext.Provider value={isLogin}>
        {children}
    </LoginContext.Provider>
}

export default LoginContextProvider;