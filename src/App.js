import { Routes, Route } from 'react-router-dom';
import ContactPage from './pages/contactPage';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import LandingPage from './pages/landingPage';
import ChainPage from './pages/chainPage';
import DiamondPage from './pages/diamondPage';
import EarringPage from './pages/earringPage';
import NecklacePage from './pages/necklacePage';
import RingPage from './pages/ringPage';
import WatchesPage from './pages/watchesPage';

function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path='contactPage' element={<ContactPage />} />
        <Route path='chainPage' element={<ChainPage />} />
        <Route path='diamondPage' element={<DiamondPage />} />
        <Route path='earringPage' element={<EarringPage />} />
        <Route path='necklacePage' element={<NecklacePage />} />
        <Route path='ringPage' element={<RingPage />} />
        <Route path='watchesPage' element={<WatchesPage />} />
      </Routes>
    </div>
  );
};

export default App;
