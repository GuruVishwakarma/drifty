import React from 'react';
import { Card, Container, Row, Col, Button } from 'react-bootstrap';
import './WallpaperSection.css'; // Import custom CSS for wallpaper styling

// Wallpaper data - update with your image paths
const wallpaperData = [
  { imgSrc: '/images/d1.jpg', title: 'Wallpaper 1' },
  { imgSrc: '/images/d2.jpg', title: 'Wallpaper 2' },
  { imgSrc: '/images/d3.jpg', title: 'Wallpaper 3' },
  { imgSrc: '/images/d4.jpg', title: 'Wallpaper 4' },
  { imgSrc: '/images/d5.jpg', title: 'Wallpaper 5' },
  { imgSrc: '/images/d6.jpg', title: 'Wallpaper 6' },
  { imgSrc: '/images/d7.jpg', title: 'Wallpaper 7' },
  { imgSrc: '/images/d8.jpg', title: 'Wallpaper 8' },
];

const WallpaperSection = () => {
  return (
    <Container id="Wallpaper">
      <h2 className="mb-5 heading-1">Wallpapers</h2>
      <Row>
        {wallpaperData.map((wallpaper, index) => (
          <Col md={3} key={index} className="mb-4">
            <Card className="custom-wallpaper-card">
              <Card.Img variant="top" src={wallpaper.imgSrc} />
              <Card.Body className='Colors'>
                <Card.Title>{wallpaper.title}</Card.Title>
                <Button 
                  variant="primary" 
                  href={wallpaper.imgSrc} 
                  download
                >
                  Download
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default WallpaperSection;
