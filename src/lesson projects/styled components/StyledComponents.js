import styled from 'styled-components';

const getSize = ({ size }) => {
    switch (size) {
        case "small": return "14px";
        case "medium": return "18px";
        case "large": return "22px"
    }
}
export const Wrapper = styled.div`
width: 80%;
height: 300px;
background: ${({ dark }) => (dark ? '#000' : '#eee')};
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
margin: 20px;
align-self: center;
box-shadow: 0 3px 3px 10px rgba(0, 0, 0, 0.6);
`
export const Title = styled.h1`
color:${({ dark }) => (dark ? "white" : "black")};
font-weight: 700;
font-family: -apple - system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans - serif;
font-size: ${getSize}
`
export const Button = styled.button`
background-color: blue;
width: 150px;
height: 50px;
border-radius: 10px;
color: white;
font-size: 20px;
outline: unset;
border: unset;
:hover{
    background-color: rgb(0, 0, 200)
}
`