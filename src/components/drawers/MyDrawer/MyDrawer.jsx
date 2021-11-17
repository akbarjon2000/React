import React, { useState } from 'react'
import AllModel from "../../generic/AllModel"
import DrawerBody from './DrawerBody'
const MyDrawer = () => {
    const [drawerOpen, setDrawerOpen] = useState(false);
    const closeDrawer = () => {
        setDrawerOpen(false)
    }
    return (
        <div>
            <AllModel closeDrawer={closeDrawer} openModal={() => setDrawerOpen(true)}>
                <DrawerBody>

                </DrawerBody>
            </AllModel>
        </div >
    )
}
export default MyDrawer;