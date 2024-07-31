import React from 'react';
import { Route, Routes } from 'react-router-dom';
import NavigationBar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import './app.css'

function App() {
  return (
    <div className='bg'>
      <NavigationBar />
      <Routes>
        <Route path="/" element={<Home />} />

      </Routes>
      <Footer />
    </div>
  );
}

export default App;
