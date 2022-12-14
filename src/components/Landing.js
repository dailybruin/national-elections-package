import React from "react";
import styled from "styled-components";
import { mediaQueries } from "../shared/config";

const Container = styled.div`
  width: 100%;
  height: fit-content;
  position: relative;
  background: #D9D0C5;
  border-bottom: 5px dashed #706A61;
`;

const Illo = styled.img`
  width: 100vw;
  height: auto;
  object-fit: cover;
`;

const Credits = styled.div`
  position: absolute;
  font-family: 'Spectral', serif;
  font-size: 20px;
  font-weight: 400;
  color: white;
  bottom: 1em;
  right: 1em;
  ${mediaQueries.mobile} {
    font-size: 8px;
  }
`;

export default function Landing(props) {
    // setTimeout(props.setLandingDisplayed(true), 500);
    return (
      <Container>
        <Illo src={props.image}></Illo>
        <Credits>{props.credits}</Credits>
      </Container>
    );
  }