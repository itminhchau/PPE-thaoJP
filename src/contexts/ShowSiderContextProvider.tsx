
import React, { createContext, useState } from "react";

interface ShowSiderContextProviderProps {
    children: React.ReactNode
}
interface IShowSiderContext {
    showSiderBar: any
    isShowSider: boolean,

}


export const ShowSiderContext = createContext<IShowSiderContext>(null);

const ShowSiderContextProvider = ({ children }: ShowSiderContextProviderProps) => {
    //state
    const [isShowSider, setIsShowSider] = useState(true)

    //function
    const showSiderBar = () => {
        setIsShowSider(!isShowSider)
    }

    //context data
    const dataShowContext = {
        isShowSider,
        showSiderBar,
    }

    return (
        <ShowSiderContext.Provider value={dataShowContext}>
            {children}
        </ShowSiderContext.Provider>
    )
}

export default ShowSiderContextProvider