import React, { useState, useContext } from 'react'
import Sidebar from '../sidebar/sidebar'
import Navbar from './categoryNav/CategoryNav'
import { Container, Uz, Eng, Main, Restore } from './style'
import { data } from '../../utils/categoryObj'
import { MyCategory } from '../../userContext'
const Category = () => {
    const [myData, setData] = useContext(MyCategory)
    const [data] = useState(myData);


    // const [category, setCategory] = useState(data);
    const onDelete = (id) => {
        let newData = myData.filter((value) => value.id !== id)
        setData(newData)
    }
    const onreset = () => {
        setData(data);
    }
    return (
        <div>
            <Container>

                <Sidebar />
                <Container.page>
                    <Navbar />
                    {myData.length ?
                        myData.map(({ id, uz, eng, main, Edit, Delete }) => (
                            <Container.el key={id}>
                                <Uz>{uz}</Uz>
                                <Eng>{eng}</Eng>
                                <Main>{main}</Main>
                                <Container.edit><Edit /></Container.edit>
                                <Container.delete onClick={() => onDelete(id)} ><Delete /></Container.delete>
                            </Container.el>
                        ))
                        : <Restore onClick={onreset} className="heartbeat">Restore</Restore>
                    }
                </Container.page>
            </Container>
        </div>
    )
}
export default Category;
