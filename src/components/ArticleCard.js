import React from 'react';
import styled from 'styled-components';
import { mediaQueries } from '../shared/config';

import PictureFrame from '../images/Corners.svg';


// const Frame = styled.img`
//     position: absolute;
//     z-index: 30;
//     top: 0;
//     left: 0;
//     width: 120%;
//     height: 120%;
// `

const Image = styled.img`
    display: block;
    width: 303px;
    max-width: 100%;
    height: 290px;
    margin: auto;
    box-sizing: content-box;
    object-fit: cover;
    z-index: 10;
`

const Title = styled.a`
    display: block;
    padding-top: 1em;
    font-size: 20px;
    font-weight: 600;
    text-align: center;   
    text-decoration: none;
    color: inherit;
`

//TODO: figure out why ByLine color doesn't change unless color: inherit is used
const ByLine = styled.p`
    display: block;
    font-size: 18px;
    font-weight: 600;
    padding-bottom: 1em;
    text-align: center;
    font-style: italic;
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
        position: relative;
        /* max-width: 325px; */
        margin: auto;
        box-sizing: content-box;
        background-color: #${getBackground(props.color)};
        /* height: fit-content; */
        padding: 1em;
        overflow: visible;
        filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));

        ${mediaQueries.mobile} {
            width: 80%;
        }
    `

    const ArticleInfo = styled.div`
        display: block;
        margin: auto;
        /* width: 303px; */
        /* height: fit-content; */
        background-color: #${getTextBackground(props.color)};
        color: #706A61;
        font-family: 'Spectral', serif;
        line-height: 1em;
        
        ${mediaQueries.mobile} {
            width: 100%;
        }
    `

    return (
        <Container>
            {/* <Frame src={PictureFrame}/> */}
            <a href={props.article_url}><Image src={props.article_image}/></a>
            <ArticleInfo>
                <Title href={props.article_url}>{props.article_title}</Title>
                <ByLine> By {props.article_byline}</ByLine>
            </ArticleInfo>
        </Container>
    )
}