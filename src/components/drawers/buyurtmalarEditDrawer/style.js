import styled from "styled-components"

export const Container = styled.div`
display:flex;
flex-direction:column;
margin:0;
padding:0px 16px 0 16px;
position:relative;
bottom:15px;
right:15px;
width:fit-content;

`
Container.col1 = styled.div`
    display: flex;
    flex-direction: row;
    align-items:center;
    justify-content:space-between;
    padding: 0;
    margin:0;
    margin-bottom: 24px;
    width:fit-content;
`
Container.Clock = styled.div`

    margin-left: 30px;
    margin-top: 25px;
    display: flex;
    align-items: center;
        
`
Container.col2 = styled.div`

`
Container.customer = styled.div`
    width:318px;
    height:93px;
    border-radius:6px;
    margin:0;
    display: flex;
    align-items: center;
    background-color: #EDEFF3;


`
Container.customerInfo = styled.div`
width:178px;
height:45px;
padding-left:14px;
`