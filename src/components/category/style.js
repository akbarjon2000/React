import styled from 'styled-components'

export const Container = styled.div`
display:flex;
`
Container.page = styled.div`
display:flex;
flex-direction:column;

`
Container.el = styled.div`
display:flex;
flex-direction:row;

align-items:center;
height: 60px;
width: 992px;
left: 338px;
top: 156px;
border-radius: 6px;
background-color:white;
margin:0 0 8px 38px
`
Container.text = styled.p`
width:200px;
margin-left:18px;
margin-right:19px
`
Container.edit = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 32px;
  height: 32px;
  border: 4px solid #edeff3;
  border-radius: 50%;
  margin-left:60px;
`
Container.delete = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 32px;
  height: 32px;
  border: 4px solid #edeff3;
  border-radius: 50%;
  margin-left:20px;

`
export const Uz = styled.div`
width:200px;
margin-left:18px;
margin-right:19px
`
export const Eng = styled.div`
width:200px;
margin-left:15px;
margin-right:19px
`
export const Main = styled.div`
width:200px;
margin-left:50px;
margin-right:19px
`
export const Restore = styled.button`
height: 60px;
width: 992px;
left: 338px;
top: 156px;
border-radius: 6px;
background-color:orange;
color:white;
margin:0 0 8px 38px;
font-size: 25px;
outline:unset;
border:none;
:hover{
    box-shadow: 0px 5px 15px #B0B1B56E;
    cursor:pointer;
}
`