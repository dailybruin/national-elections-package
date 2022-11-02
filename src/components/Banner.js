import React from "react";
import styled from "styled-components";
import { mediaQueries } from "../shared/config";

const Container = styled.div`
  width: 100%;
  height: 400px;
  position: relative;
  background-color: #EDE8E5;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Text = styled.div`
  position: absolute;
  font-family: 'Spectral', serif;
  font-size: 2em;
  font-weight: 300;
  max-width: 60%;
  color: black;
  ${mediaQueries.mobile} {
    font-size: 20px;
    max-width: 80%;
  }
`;

export default function Banner(props) {
    return (
    <>
        <Container>
            <Text>{props.text}</Text>
        </Container>
    </>
    );
  }