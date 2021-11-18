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
import Category from './components/category/Category';
import Drawer from './components/drawers/products drawer/antDrawer1';
import Drawer2 from './components/drawers/buyurtmalarEditDrawer/index'
import MyDrawer from './components/drawers/MyDrawer/MyDrawer';
import Sidebar from './components/sidebar/sidebar';
import Reducer from './lesson projects/reducer';
import Branches from './components/branches';
const App = () => {
    return (
        <OrdersContex>
            <UserContext>
                <Context>
                    <Branches />
                </Context>
            </UserContext>
        </OrdersContex>
    )
}
export default App;