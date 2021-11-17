import React, { Component } from 'react'
import Header from "./header"
import Body from "./body"
import Footer from "./footer"
import Exit from "./exit"
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
        info: "Orders",
        pathname: "/Orders"
    },
    {
        id: 2,
        icon: archive,
        info: "Products",
        pathname: "/Products"
    }, {
        id: 3,
        icon: category,
        info: "Category",
        pathname: "/Category"
    }, {
        id: 4,
        icon: branch,
        info: "Branches",
        pathname: "/Branches"
    }, {
        id: 5,
        icon: customers,
        info: "Customers",
        pathname: "/Customers"
    },
    {
        id: 6,
        icon: report,
        info: "Report",
        pathname: "/Report"
    },

]
const footer = [
    {
        id: 1,
        icon: settings,
        info: "Setings"
    },
    {
        id: 2,
        icon: settings,
        info: "Stuff"
    }, {
        id: 3,
        icon: settings,
        info: "Notifications"
    }, {
        id: 4,
        icon: settings,
        info: "Delivery Cost"
    }, {
        id: 5,
        icon: settings,
        info: "Offers and Complains"
    }, {
        id: 6,
        icon: settings,
        info: "Map"
    },
]
const exit = [
    {
        id: 1,
        icon: logout,
        info: "Exit"
    }
]

export default class sidebar extends Component {
    state = { active: null }

    render() {
        const activate = (id) => {
            this.setState({ active: id })
            console.log(this.state.active, "on")
        }
        return (
            <div className='sidebar'>
                <div className='headerrow'>
                    <Header />
                    {sidebarObj.map(({ id, icon, info, pathname }) => (
                        <div key={id} onClick={() => activate(id)}>
                            < Body active={this.state.active === id} key={id} Icon={icon} info={info} pathname={pathname} />
                        </div>
                    )
                    )}
                    {/* {footer.map(({ id, icon, info }) => <Footer key={id} Icon={icon} info={info} />)} */}
                    {exit.map(({ id, icon, info }) => <Exit key={id} Icon={icon} info={info} />)}
                </div>
            </div>
        )
    }
}
