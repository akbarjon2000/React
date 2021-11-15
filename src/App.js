import React from 'react'
import ReactDOM from 'react-dom';
import './index.css';
//Contexts
import Context from "./context"
import UserContext from './userContext';
import { OrdersContex } from './contex/OrdersContex';
//Components
import Products from "./components/products/Products"
import Orders from "./components/orders/Orders"
import Lesson from "./lesson projects/Router/Router"
import Hooks from ".//components/hooks"
import Orders2 from "./components/orders2"
import Category from './category/Category';
import Drawer from './components/drawers/products drawer/antDrawer1';
import Drawer2 from './components/drawers/buyurtmalarEditDrawer/index'
const App = () => {
    return (
        <OrdersContex>
            <UserContext>
                <Context>
                    <Drawer2 />
                </Context>
            </UserContext>
        </OrdersContex>
    )
}
export default App;