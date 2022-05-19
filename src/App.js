import React, { useState } from 'react';
import './App.css';
import './simplefunction.scss';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import FooterSection from './Components/FooterSection';
import servicesSection from './Components/ServicesSection/ServicesSection';
import ServicesSection from './Components/ServicesSection/ServicesSection';
import Roadservice from './Components/RoadServiceComponent/Roadservice';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      
      <Roadservice/>
      <ServicesSection />
      <FooterSection></FooterSection>
    </Router>
  );
}

export default App;
