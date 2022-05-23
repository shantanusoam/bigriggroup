import React, { useState, useEffect } from 'react';
import './App.css';
import './simplefunction.scss';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import FooterSection from './Components/FooterSection';
import Navbar from './Components/Navbar';
import Redirect from './redirect';
import { CommmingSoonComponentindex } from './Components/CommmingSoonComponent';

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };
  var data1, data2;

  return (
    <Router>
      <Navbar></Navbar>
      <Routes>
        <Route path="/bigriggroup" element={<Home />} />
        <Route
          path="/partz"
          element={
            <CommmingSoonComponentindex data="partz"></CommmingSoonComponentindex>
          }
        />
        <Route
          path="/tires"
          element={
            <CommmingSoonComponentindex data="tires"></CommmingSoonComponentindex>
          }
        />
        {/* <Route path="/bigriggroup" element={<Redirect></Redirect>} /> */}
      </Routes>

      <FooterSection></FooterSection>
    </Router>
  );
}

export default App;
