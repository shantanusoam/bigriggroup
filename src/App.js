import React, { useState } from 'react';
import './App.css';
import './simplefunction.scss';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import FooterSection from './Components/FooterSection';
import Navbar from './Components/Navbar';
import { CommmingSoonComponentindex } from './Components/CommmingSoonComponent';
function App() {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <Router>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home />} />  
        <Route path="/partz" element={<CommmingSoonComponentindex></CommmingSoonComponentindex>} />
      </Routes>

      <FooterSection></FooterSection> 
    </Router>
  );
}

export default App; 
