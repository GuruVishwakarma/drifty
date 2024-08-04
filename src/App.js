import React from 'react';
import { Route, Routes } from 'react-router-dom';
import NavigationBar from './components/Navbar';
import Slider from './components/Slider';
import CardSection from './components/CardSection';
import WallpaperSection from './components/WallpaperSection';
import Footer from './components/Footer';
import './app.css'

import { Container, Row, Col } from 'react-bootstrap';

function App() {
  return (

      <div className="bg">
        <NavigationBar />
        <Slider />
       <CardSection/>
        <WallpaperSection />
        <Container id="about-us" className="mt-5 bt">
        <h2 className="mb-4">About Us</h2>
        <Row className='weight'>
          <Col>
            <p>
              {/* Add your About Us content here */}
              We are a leading company in the automotive industry, committed to providing top-quality vehicles and services to our customers. Our team of experts is dedicated to ensuring the best experience for you, from the moment you visit our website to the day you drive away in your new car.
            </p>
          </Col>
        </Row>
      </Container>

        <Footer />
        <button className="back-to-top" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
        ↑
      </button>
      </div>

 
  );
}

export default App;
