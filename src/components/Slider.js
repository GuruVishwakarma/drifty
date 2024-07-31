import React from 'react';
import { Carousel } from 'react-bootstrap';
import image1 from './images/nissan.jpg'
import image2 from './images/img2.jpg'
import image3 from './images/guuu.jpg'
import './slider.css'; 

const Slider = () => {
  return (
   
    <Carousel >
      <Carousel.Item>
        <img
          className="d-block w-100 carousel-image"
          src={image1}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>Nissan</h3>
          <p>&ldquo;EVERY TURN, A NEW ADVENTURE; EVERY MILE, A TASTE OF FREEDOM.&rdquo;</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 carousel-image"
          src={image2}
          alt="Second slide"
        />
        <Carousel.Caption>
          <h3>Audi</h3>
          <p>&ldquo;TO ATRRACT POSITIVE THINGS IN YOUR LIFE, START BY GIVING OFF POSITIVE ENERGY IN YOUR DRIVE.&rdquo;</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 carousel-image"
          src={image3}
          alt="Third slide"
        />
        <Carousel.Caption>
          <h3>McLaren</h3>
          <p>&ldquo;IT&rsquo;S NOT ABOUT THE CAR YOU DRIVE, BUT THE WAY YOU DRIVE YOUR CAR.&rdquo;</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>

  );
};

export default Slider;
