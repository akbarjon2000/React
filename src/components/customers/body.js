import React, { useContext, useState } from 'react'
import { MyCustomerContext } from '../../contex/CustomersContext'
import { Container, Wrapper } from "./style";
import { ReactComponent as Active } from "../icons/check-circle.svg"
import { ReactComponent as Block } from "../icons/block.svg"
import { ReactComponent as Edit } from "../icons/Path.svg"
import { ReactComponent as Delete } from "../icons/trash-2.svg"
export const Body = () => {
    const [myData, setMyData] = useContext(MyCustomerContext);
    const [data] = useState(myData);
    const [active, setActive] = useState(true)
    const activate = (id) => {
        setActive(!active)
    }
    return (
        <div>
            {myData.map(({ id, name, contact, orderCount }) => (
                <Wrapper key={id}>
                    <div style={{
                        flex: 1.3,
                        marginLeft: '18px'
                    }}>{name}</div>
                    <div style={{ flex: 1.5 }}> {contact}</div>
                    <div style={{ flex: 0.8 }}>{orderCount}</div>
                    <Wrapper.activate>{active ? <div style={{ color: "#20D472" }}>Active</div> : <div style={{ color: '#FA2738' }}>Block</div>}</Wrapper.activate>
                    <Wrapper.action>
                        <Wrapper.active onClick={() => activate(id)}>{active ? <Block /> : <Active />}</Wrapper.active>
                        <Wrapper.edit><Edit /></Wrapper.edit>
                        <Wrapper.delete><Delete /></Wrapper.delete>
                    </Wrapper.action>
                </Wrapper>
            ))}
        </div>
    )
}
