import React, { createContext, useState } from 'react'
import branchObj from '../utils/branchObj'

export const MyBranchContext = createContext();

const branchContex = ({ children }) => {
    const [data, setData] = useState(branchObj);
    return (
        <MyBranchContext.Provider value={[data, setData]}>
            {children}
        </MyBranchContext.Provider>
    )
}
export default branchContex;