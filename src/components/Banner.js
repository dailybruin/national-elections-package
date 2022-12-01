
import React from 'react'; //import compenents from React
import styled from 'styled-components'; //transforms styling Javascript to CSS
import { mediaQueries } from '../shared/config';
 
const StyleText = styled.div` //text is the styled component
  font-family: Spectral, serif;
  font-size: 22px;
  background-color: #EDE8E5; //same as other elements background-color
  color: black;
  max-width: 80%;
  height: fit-content;
  position: relative;
  ${mediaQueries.mobile}{
    max-width: 90%;
    font-size: 22px;
  }
`
 
const StyleContainer = styled.div` //container is the styled component
  width: 100%;
  height: 350px;
  position: relative;
  background-color: #EDE8E5;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`
 
 
export default function Banner(props){ //exporting function Banner called later in App.js
 return(
   <StyleContainer>
     <StyleText>{props.text}</StyleText> 
   </StyleContainer>
 );
}