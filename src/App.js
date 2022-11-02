import React, { useState, useEffect } from "react";
import styled from 'styled-components';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
<<<<<<< HEAD
import ArticleGrid from './components/ArticleGrid';
=======
import Landing from './components/Landing';
import Banner from './components/Banner';
import Graphics from './components/Graphics';
>>>>>>> master

function App() {
  const [ data, setData ] = useState(null);
  const [landingDisplayed, setLandingDisplayed] = useState(false);
  
  useEffect(() => {
		fetch("https://kerckhoff.dailybruin.com/api/packages/flatpages/national-elections")
		.then(res => res.json())
		.then(res => setData(res.data['article.aml']))
  }, [])

  data && console.log(data)

<<<<<<< HEAD
  return data && (
    <div className="App">
      <Header/>
        {/* <Landing image={data.landing_image} credits={data.landing_credits} setLandingDisplayed={setLandingDisplayed}/> */}
        <ArticleGrid articles={data.stories} />
=======
  return (
    <div className="App">
      <Header/>
        <Landing image={data.landing_image} credits={data.landing_credits}/>
        <Banner text={data.description}/>
        <Graphics text={data.graphic_title} graphic={data.graphic}/>
>>>>>>> master
      <Footer/>
    </div>
  );
}

export default App;
