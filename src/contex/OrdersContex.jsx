import React, { createContext, useState } from 'react'
import cardObj from "../utils/cardObj"

export const MyCardContext = createContext();

export const OrdersContex = ({ children }) => {
    const [data, setData] = useState(cardObj);
    return (
        <MyCardContext.Provider value={[data, setData]}>
            {children}
        </MyCardContext.Provider>
    )
}
