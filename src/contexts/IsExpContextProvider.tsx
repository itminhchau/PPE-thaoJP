
import React, { createContext, useState } from "react";

interface IsExpContextProviderProps {
    children: React.ReactNode
}
interface IsExpContext {
    isExp: boolean,
    isExpFun: any
}


export const IsExpContext = createContext<IsExpContext>(null);

const IsExpContextProvider = ({ children }: IsExpContextProviderProps) => {
    //state

    const [isExp, setIsExp] = useState(false)
    //function

    const isExpFun = () => {
        setIsExp(isExp)
    }
    //context data
    const dataShowContext = {
        isExpFun,
        isExp
    }

    return (
        <IsExpContext.Provider value={dataShowContext}>
            {children}
        </IsExpContext.Provider>
    )
}

export default IsExpContextProvider