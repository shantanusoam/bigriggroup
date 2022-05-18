import React, { useState } from 'react';
import './App.css';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import FooterSection from './Components/FooterSection';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" component={Home} title="BigAbout" />
      </Routes>

      <FooterSection></FooterSection>
    </Router>
  );
}

export default App;
