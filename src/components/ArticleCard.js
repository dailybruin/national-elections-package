import React from 'react';
import styled from 'styled-components';
import { mediaQueries } from '../shared/config';


const Image = styled.img`
    display: block;
    width: 303px;
    height: 290px;
    margin: auto;
    box-sizing: content-box;
    object-fit: cover;
    z-index: 12;
`

const Title = styled.a`
    display: block;
    font-family: 'Courier Prime', monospace;
    font-size: 20px;
    font-weight: 600;
    line-height: 1em;
    text-align: center;   
    text-decoration: none;
    color: inherit;
`

//TODO: figure out why ByLine color doesn't change unless color: inherit is used
const ByLine = styled.div`
    display: block;
    font-family: 'Courier Prime', monospace;
    font-size: 16px;
    font-weight: 700;
    line-height: 1em;
    text-align: center;
    color: inherit;
`

export default function ArticleCard(props)
{
    // getBackground returns hex code for either green or white background depending on value of props.color
    function getBackground (color) {
        if (color == "red") {return 'C88080'};
        if (color == "blue") {return '8185AA'};
    }
    function getTextBackground (color) {
        if (color == "red") {return 'E9BDBA'};
        if (color == "blue") {return 'BABFE9'};
    }

    const Container = styled.div`
        max-width: 325px;
        background-color: #${getBackground(props.color)};
        height: fit-content;
        padding: 1.5em 1em 1.5em 1em;
        filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));

        ${mediaQueries.mobile} {
            width: 100%;
        }
    `

    const ArticleInfo = styled.div`
        width: 303px;
        background-color: #${getTextBackground(props.color)};
        color: #706A61;
        height: fit-content;
        display: block;
        margin: auto;

        ${mediaQueries.mobile} {
            width: 100%;
        }
    `

    return (
        <Container>
            <a href={props.article_url}><Image src={props.article_image}/></a>
            <ArticleInfo>
                <ByLine> By {props.article_byline}</ByLine>
                <Title href={props.article_url}>{props.article_title}</Title>
            </ArticleInfo>
        </Container>
    )
}