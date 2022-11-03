import React from "react";
import styled from "styled-components";
import { mediaQueries } from "../shared/config";
import LeftDivider from "../images/Leftdivider.svg";
import RightDivider from "../images/Rightdivider.svg";

const Container = styled.div`
  width: 100%;
  height: fit-content;
  position: relative;
  background-color: #EDE8E5;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Title = styled.div`
  font-family: 'Spectral', serif;
  font-size: 3.5em;
  font-weight: 600;
  color: #706A61;
  ${mediaQueries.mobile} {
    font-size: 20px;
    max-width: 80%;
  }
`;

const Divider = styled.div`
  width: 100%;
  height: fit-content;
  background-color: #EDE8E5;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;


export default function Graphics(props) {
    return (
    <>
        <Divider>
            <img style={{"width": "20%", "float":"left"}} src={LeftDivider}/>
                <Title>{props.text}</Title>
            <img style={{"width": "20%", "float":"right"}} src={RightDivider}/> 
        </Divider>

        <Container>
            <img style={{"width": "80%", "margin-top": "5em", "margin-bottom": "5em", "border": "5px dashed #706A61"}} src={props.graphic}/>
        </Container>
    </>
    );
  }