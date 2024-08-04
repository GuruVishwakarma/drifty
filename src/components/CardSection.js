import React from 'react';
import { Card, Container, Row, Col } from 'react-bootstrap';
import './CardSection.css'; // Import custom CSS for card styling



const cardData = [
  {
    imgSrc: '/images/brand1.jpg', // Path relative to the public folder
    title: 'ROLLS-ROYCE',
    text: 'Rolls-Royce La Rose Noire Droptail',
  },
  {
    imgSrc: '/images/brand2.png', // Path relative to the public folder
    title: 'BUGATTI',
    text: 'Bugatti La Voiture Noire',
  },
  {
    imgSrc: '/images/brand3.jpg', // Path relative to the public folder
    title: 'PAGANI',
    text: 'Pagani Zonda HP Barchetta',
  },  {
    imgSrc: '/images/brand4.webp', // Path relative to the public folder
    title: 'MERCEDES',
    text: 'Mercedes-Maybach Exelero',
  },
  // Add more card objects as needed
];
const CardSection = () => {
  return (
    <Container className="mt-5" id="Top-Brands">
     <h2 className="heading">Top Brands</h2>
      <Row>
        {cardData.map((card, index) => (
          <Col md={3} key={index} className="mb-5">
            <Card className="custom-card">
              <Card.Img variant="top" src={card.imgSrc} />
              <Card.Body>
                <Card.Title>{card.title}</Card.Title>
                <Card.Text>{card.text}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default CardSection;
