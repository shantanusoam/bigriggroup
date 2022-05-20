import React, { useState } from 'react';
import './App.css';
import './simplefunction.scss';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import FooterSection from './Components/FooterSection';
import { CommmingSoonComponentindex } from './Components/CommmingSoonComponent';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/parts" element={<CommmingSoonComponentindex />} />
      </Routes>

      <FooterSection></FooterSection>
    </Router>
  );
}

export default App;
