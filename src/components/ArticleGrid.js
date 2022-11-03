import React from "react";
import styled from "styled-components";
import { mediaQueries } from "../shared/config";
import LeftDivider from "../images/Leftdivider.svg";
import RightDivider from "../images/Rightdivider.svg";
import Card from "./ArticleCard";

const OuterContainer = styled.div`
  max-width: 100vw;
  overflow: visible;
`

const Container = styled.div`
    max-width: 100vw;
    position: relative;
    overflow: visible;
    margin-top: 5em;
    margin-bottom: 10em;
`

const Grid = styled.div`
  display: grid;
  margin: auto;
  width: 80%;
  grid-template-columns: repeat(3, 1fr);
  row-gap: 5em;
  column-gap: 4em;
  overflow: visible;
  padding: 2em;

  ${mediaQueries.mobile} {
    display: flex;
    flex-direction: column;
    width: 90vw;
    margin: auto;
    align-items: center;
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

export default function ArticleGrid(props) {
  return (
  <>
    <Divider>
        <img style={{"width": "20%", "float":"left"}} src={LeftDivider}/>
            <Title>{props.text}</Title>
        <img style={{"width": "20%", "float":"right"}} src={RightDivider}/> 
    </Divider>

    <OuterContainer>
      <Container>
          <Grid>  
              {props && props.articles
                  ? props.articles.map((item) => {
                      return (
                          <Card
                          article_title={item.article_title}
                          article_byline={item.article_byline}
                          article_image={item.article_image}
                          article_url={item.article_url}
                          color={item.color}
                      />
                      );
                  })
              : null}
          </Grid>
      </Container>
    </OuterContainer>
  </>
  );
}