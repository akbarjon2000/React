import React, { Component } from 'react'
import Header from "./header"
import Body from "./body"
import Footer from "./footer"
// images
import { ReactComponent as order } from "./sidebarimg/check-circle.svg"
import { ReactComponent as archive } from "./sidebarimg/archive.svg"
import { ReactComponent as category } from "./sidebarimg/layers.svg"
import { ReactComponent as branch } from "./sidebarimg/map-pin.svg"
import { ReactComponent as customers } from "./sidebarimg/users.svg"
import { ReactComponent as report } from "./sidebarimg/bar-chart-2.svg"
import { ReactComponent as settings } from "./sidebarimg/settings copy 2.svg"
import { ReactComponent as logout } from "./sidebarimg/log-out.svg"


const sidebarObj = [
    {
        id: 1,
        icon: order,
        info: "Orders"
    },
    {
        id: 2,
        icon: archive,
        info: "Products"
    }, {
        id: 3,
        icon: category,
        info: "Category"
    }, {
        id: 4,
        icon: branch,
        info: "Branches"
    }, {
        id: 5,
        icon: customers,
        info: "Customers"
    },
    {
        id: 6,
        icon: report,
        info: "Report"
    },

]
const footer = [
    {
        id: 1,
        icon: settings,
        info: "Setings"
    },
    {
        id: 1,
        icon: settings,
        info: "Setings"
    }, {
        id: 1,
        icon: settings,
        info: "Setings"
    }, {
        id: 1,
        icon: settings,
        info: "Setings"
    }, {
        id: 1,
        icon: settings,
        info: "Setings"
    }, {
        id: 1,
        icon: settings,
        info: "Setings"
    }, {
        id: 1,
        icon: logout,
        info: "Setings"
    },

]
export default class sidebar extends Component {
    render() {
        return (
            <div className='sidebar'>
                <div className='headerrow'>
                    <Header />
                    {sidebarObj.map(({ id, icon, info }) => <Body key={id} Icon={icon} info={info} />)}
                    {footer.map(({ id, icon, info }) => <Footer key={id} Icon={icon} info={info} />)}
                </div>
            </div>
        )
    }
}
