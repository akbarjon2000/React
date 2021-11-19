import React, { Children, createContext, useState } from 'react'
import data from '../utils/CustomersData'

export const MyCustomerContext = createContext();

export const CustomersContext = ({ children }) => {
    const [myData, setMyData] = useState(data);
    return (
        <MyCustomerContext.Provider value={[myData, setMyData]}>
            {children}
        </MyCustomerContext.Provider>
    )
}
