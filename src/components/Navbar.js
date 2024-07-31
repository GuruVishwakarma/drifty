import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import logo from './images/car-icon.jpg'; // Your logo image
import './Navbar.css'; // Import custom CSS for styling the navbar

const NavigationBar = () => {
  return (
    <Navbar expand="lg" className="custom-navbar">
      <Container>
        <Navbar.Brand href="#">
          <img src={logo} alt="Car Website" style={{ width: '30px', marginRight: '10px' }} />
          DRIFTY
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#about-us">About Us</Nav.Link>
            <Nav.Link href="#Top-Brands">Brands</Nav.Link>
            <Nav.Link href="#Wallpaper">Wallpapers</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavigationBar;

