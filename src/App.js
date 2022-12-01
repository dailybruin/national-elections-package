import React, { useState, useEffect } from "react";
import styled from 'styled-components';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import ArticleGrid from './components/ArticleGrid';
import Landing from './components/Landing';
import Banner from './components/Banner';
import Graphics from './components/Graphics';

function App() {
  const [ data, setData ] = useState(null);
  const [landingDisplayed, setLandingDisplayed] = useState(false);
  
  useEffect(() => {
		fetch("https://kerckhoff.dailybruin.com/api/packages/flatpages/national-elections")
		.then(res => res.json())
		.then(res => setData(res.data['article.aml']))
  }, [])

  data && console.log(data)

  return data && (
    <div className="App">
      <Header/>
        <Landing image={data.landing_image} credits={data.landing_credits}/>
        <Banner text={data.description}/>
        {/* <Graphics text={data.graphic_title} graphic={data.graphic}/> */}
        <ArticleGrid articles={data.stories} text={data.story_title}/>
      <Footer/>
    </div>
  );
}

export default App;
