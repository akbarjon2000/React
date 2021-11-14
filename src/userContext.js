import React, { createContext, useState } from 'react'
import { data } from './utils/categoryObj'

export const MyCategory = createContext();

const UserContext = ({ children }) => {
    const [mydata, setData] = useState(data)
    return (
        <MyCategory.Provider value={[mydata, setData]}>
            {children}
        </MyCategory.Provider>
    )
}
export default UserContext;