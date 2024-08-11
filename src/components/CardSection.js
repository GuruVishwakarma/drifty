import React from 'react';
import './CardSection.css';
import cardImage1 from './images/brand1.jpg'; // Ensure correct paths
import cardImage2 from './images/brand2.png';
import cardImage3 from './images/brand3.jpg';
import cardImage4 from './images/brand4.webp';
// Add more imports as needed

const cards = [
  { id: 1, image: cardImage1, title: 'ROLLS-ROYCE', description: 'Rolls-Royce La Rose Noire Droptail' },
  { id: 2, image: cardImage2, title: 'BUGATTI', description: 'Bugatti La Voiture Noire' },
  { id: 3, image: cardImage3, title: 'PAGANI', description: 'Pagani Zonda HP Barchetta' },
  { id: 4, image: cardImage4, title: 'MERCEDES', description: 'Mercedes-Maybach Exelero' },
  // Add more cards as needed
];

const CardSection = () => {
  return (
    <div className="card-section container mt-5" id='Top-Brands'>
      <h2 className="section-title">MEC (Most Expensive cars)</h2>
      {cards.map(card => (
        <div className="card" key={card.id}>
          <img src={card.image} alt={card.title} className="card-image" />
          <div className="card-info">
            <h3>{card.title}</h3>
            <p>{card.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CardSection;
