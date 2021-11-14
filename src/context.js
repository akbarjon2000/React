import React, { createContext, useState } from "react";
import { data } from "./utils/data";

export const MyContext = createContext();

const Context = ({ children }) => {
    const [mydata, setData] = useState(data)
    return (
        <MyContext.Provider value={[mydata, setData]}>
            {children}
        </MyContext.Provider>
    )
}
export default Context;