import styled from "styled-components"
export const Container = styled.div`    
display:flex;

`
export const Wrapper = styled.div`   
display:flex;
flex-direction:row;  
align-items:center;
width:992px;
height:60px;
background-color:white; 
margin-bottom:8px;
margin-left:38px;
border-radius:6px;
`
Wrapper.action = styled.div`    
display:flex;
flex-direction:row;
flex:0.8;
`
Wrapper.active = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 32px;
  height: 32px;
  border: 4px solid #edeff3;
  border-radius: 50%;
`
Wrapper.activate = styled.div`
flex:0.8;
`
Wrapper.edit = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 32px;
  height: 32px;
  border: 4px solid #edeff3;
  border-radius: 50%;
  margin-left:40px;
`
Wrapper.delete = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 32px;
  height: 32px;
  border: 4px solid #edeff3;
  border-radius: 50%;
  margin-left:40px;
  margin-right:51px;
`