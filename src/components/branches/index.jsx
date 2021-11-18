import React from 'react'
import Sidebar from '../sidebar/sidebar'
import CategoryNav from '../category/categoryNav/CategoryNav'
import { Container } from './style'
const Branches = () => {
    return (
        <Container  >
            <Sidebar />
            <div>
                <CategoryNav />
            </div>
        </Container>
    )
}
export default Branches;