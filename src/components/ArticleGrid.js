import React from "react";
import styled from "styled-components";
import { mediaQueries } from "../shared/config";

import Card from "./ArticleCard";


const Container = styled.div`
    max-width: 100vw;
    position: relative;
    overflow: hidden;
    margin-top: 5em;
    margin-bottom: 10em;
`

const Grid = styled.div`
  display: grid;
  margin: auto;
  width: 80%;
  grid-template-columns: repeat(3, 1fr);
  row-gap: 3em;
  column-gap: 2em;
  
  ${mediaQueries.mobile} {
    display: flex;
    flex-direction: column;
    width: 100vw;
    margin: auto;
    align-items: center;
  }
`;

export default function ArticleGrid(props) {
  return (
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
  );
}