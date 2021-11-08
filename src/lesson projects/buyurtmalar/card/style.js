import styled from "styled-components"
const getSize = (size) => {
    switch (size) {
        case "id":
            return 1
        case "action":
            return 5
        case "button":
            return 2
    }
}
export const User = styled.div`
display:flex;
flex-direction:row;
background-color:white;
height: 60px;
margin-bottom:10px;
border-radius:8px;
`
User.title = styled.div`
border-right:1px solid #e5e5e5;
::nth-child(5){
    border-right:none;
}
height:100%;
display:flex;
flex: ${({ size }) => getSize(size)};
flex-direction:row;
align-items:center;
justify-content:${({ size }) => size === "button" ? "center" : "none"};
margin-left: ${({ size }) => size === "button" ? "none" : "10px"};
`
