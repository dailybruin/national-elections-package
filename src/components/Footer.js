import fb from '../images/socials/fb.svg'
import insta from '../images/socials/insta.svg'
import twitter from '../images/socials/twitter.svg'
import tiktok from '../images/socials/tiktok.svg'
import email from '../images/socials/email.svg'

import styled from 'styled-components'
import { mediaQueries } from '../shared/config';

const OuterContainer = styled.div`
  background-color: #D9D0C5;
  height: 600px;
  border-top: 5px dashed #706A61;
  ${mediaQueries.mobile} {
    height: 500px;
  }
`

const Container = styled.div`
	background-color: #EDE8E5;
  color: #434343;
  width: 90%;
  margin: 60px auto 60px auto;
	padding: 60px 0 10px 0;
  text-align: center;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  
	h1 {
		margin: 0;
		font-family: 'Times New Roman', Times, serif;
    font-size: 4.5em;
    padding-bottom: 0.5em;

    ${mediaQueries.mobile} {
      font-size: 40px;
    }
	}
`

const Socials = styled.div`
  position: relative;
	margin-top: 20px;
  
	img {
    position: relative;
		margin: 0 20px;
	}
	p {
    position: relative;
    font-size: 20px;
		margin: 80px 20px;
		${mediaQueries.mobile} {
			margin: 50px 20px;
      font-size: 16px;
		}
	}
`

const Footer = () => {
    return (
      <OuterContainer>
        <Container>
          <h1>DAILY BRUIN</h1>
          <Socials>
            <a href="https://www.instagram.com/dailybruin" target="_blank"><img src={insta}/></a>
            <a href="https://www.facebook.com/dailybruin" target="_blank"><img src={fb}/></a>
            <a href="https://www.twitter.com/dailybruin" target="_blank"><img src={twitter}/></a>
            <a href="https://www.tiktok.com/@dailybruin" target="_blank"><img src={tiktok}/></a>
            <a href="http://eepurl.com/cFEiZX" target="_blank"><img src={email}/></a>
            <p>Built with Suzy’s ♥ in Kerckhoff 118 by Elaine Lin and Tracy Zhao. Designed by Maddie Rausa.</p>
          </Socials>
        </Container>
      </OuterContainer>
    )
  }
  
export default Footer;