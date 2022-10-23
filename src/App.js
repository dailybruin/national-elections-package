import React, { useState, useEffect } from "react";
import styled from 'styled-components';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  const [ data, setData ] = useState(null);
  const [landingDisplayed, setLandingDisplayed] = useState(false);
  
  useEffect(() => {
		fetch("https://kerckhoff.dailybruin.com/api/packages/flatpages/national-elections")
		.then(res => res.json())
		.then(res => setData(res.data['article.aml']))
  }, [])

  return (
    <div className="App">
      <Header/>
      Hello Daily Bruin!
      <Footer/>
    </div>
  );
}

export default App;
