import React, { Component } from 'react'
import styled from 'styled-components'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const SearchContainer = styled.div`
margin-top: 10px;
margin-left: 10px;
background-color: #fff;
width: 100%;
max-width: 1500px;
height: 70px;
display: flex;
align-items: center;
justify-content: center;
@media screen and (max-width: 768px){
    width: 680px;
    transform: translate(2%,0%);
}
`
const Input = styled.input`
padding: 0.5rem calc((100vw-1200px)/2);
   max-width:340px;
    width:100%;
    height:40px;
    background-color: #fff;
    align-items: center;
    border: 2px solid  lightgray;
    display:grid;
    grid-template-columns: 15% 85%;
    padding:0.4rem; 
    outline: none;
   border-radius: 4px;

   @media screen and (max-width: 768px){
    max-width:280px;
    transform: translate(0%,0%);
   }
    ::placeholder{
        color:#aaa;
        font-size: 13px;
    font-weight: 500;

    
}

`
const Icons =styled.div`
margin-top: 6px;
margin-left: 15px;

@media screen and (max-width: 768px){
  margin-left: 20px;
  width: 20px;
  height: 10px;
  margin-top: -10px;
}
`
const Para = styled.div`
color: blue;
margin-left: 100px;
font-size: 18px;

@media screen and (max-width: 768px){
    font-size: 14px;
    margin-left: 20px;
    
}

`

class Search extends Component {
    render() {
        return (
            <>
            <SearchContainer>
              <Input type="text" placeholder="search by project or company phone number"/>  
              <div className="side">
              <Para>ALL(40)</Para>
                <Icons> <ExpandMoreIcon /></Icons>
                </div>
              </SearchContainer>
            </>
        )
    }
}

export default Search
