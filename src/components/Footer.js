import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './Navbar.css';

const Footer = () => {
  return (
    <footer className="text-white mt-5 p-5 text-center" id='ContactUs'>
      <Container className='foot'>
        <Row>
          <Col md="12">
            <h2>Contact Us</h2>
            <p>Email: guru@reactop.com</p>
            <p>Phone: +91 9167075061</p>
            <p>Address: Marol Naka, Andheri.<br />
            Mumbai, Mahahrashtra. <br /> Pin Code - 400059</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
