import React, { useState, useEffect } from "react";
import styled from 'styled-components';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Landing from './components/Landing';
import Banner from './components/Banner';

function App() {
  const [ data, setData ] = useState(null);
  const [landingDisplayed, setLandingDisplayed] = useState(false);
  
  useEffect(() => {
		fetch("https://kerckhoff.dailybruin.com/api/packages/flatpages/national-elections")
		.then(res => res.json())
		.then(res => setData(res.data['article.aml']))
  }, [])

  data && console.log(data)

  return (
    <div className="App">
      <Header/>
      <Landing image={data.landing_image} credits={data.landing_credits}/>
      <Banner text={data.description}/>
      <Footer/>
    </div>
  );
}

export default App;
