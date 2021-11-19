import React from 'react'
import Sidebar from '../sidebar/sidebar'
import BranchNav from './branchNav/BranchNav'
import BranchBody from './branchBody'
import { Container } from './style'
const Branches = () => {
    return (
        <Container  >
            <Sidebar />
            <div>
                <BranchNav />
                <BranchBody />
            </div>
        </Container>
    )
}
export default Branches;