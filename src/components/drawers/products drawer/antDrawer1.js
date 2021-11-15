import React, { useState } from 'react';
import { Drawer, Button } from 'antd';
import { Input, Select, Product, Text, Container, MyButton } from './style';
import './style.css'
const App = () => {
    const [visible, setVisible] = useState(false);

    const showDrawer = () => {
        setVisible(true);
    };

    const onClose = () => {
        setVisible(false);
    };

    return (
        <>
            <Button type="primary" onClick={showDrawer}>
                Open
            </Button>
            {/* <button class="ant-drawer-close">Close</button> */}
            <Drawer title="Add a new product" placement="right" onClose={onClose} visible={visible}>
                <Product>Name of the product</Product>
                <Input></Input>
                <Text>Category</Text>
                <Select>
                    <option>Burger</option>
                    <option>Lavash</option>
                    <option>Hot Drinks</option>
                    <option>Cold Drinks</option>
                </Select>
                <Text>Cost</Text>
                <Input></Input>
                <Text>Additional info</Text>
                <Input></Input>
                <Container>

                    <input type='file'></input>
                </Container>
                <MyButton>Save</MyButton>
            </Drawer>
        </>
    );
};

export default App