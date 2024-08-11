import React from 'react';
import './WallpaperSection.css';
import wallpaper1 from './images/d1.jpg'; // Ensure correct path
import wallpaper2 from './images/d2.jpg';
import wallpaper3 from './images/d3.jpg';
import wallpaper4 from './images/d4.jpg';
import wallpaper5 from './images/d5.jpg';
import wallpaper6 from './images/d6.jpg';
import wallpaper7 from './images/d7.jpg';
import wallpaper8 from './images/d8.jpg';

const wallpapers = [
  { id: 1, image: wallpaper1, title: 'Wallpaper 1' },
  { id: 2, image: wallpaper2, title: 'Wallpaper 2' },
  { id: 3, image: wallpaper3, title: 'Wallpaper 3' },
  { id: 4, image: wallpaper4, title: 'Wallpaper 4' },
  { id: 5, image: wallpaper5, title: 'Wallpaper 5' },
  { id: 6, image: wallpaper6, title: 'Wallpaper 6' },
  { id: 7, image: wallpaper7, title: 'Wallpaper 7' },
  { id: 8, image: wallpaper8, title: 'Wallpaper 8' },
];

const WallpaperSection = () => {
  return (
    <div className="wallpaper-section container mt-5">
      <h2 className="section-title-2 mt-5" id='Wallpaper'>
        WALLPAPERS
      </h2>
      {wallpapers.map(wallpaper => (
        <div className="wallpaper-card" key={wallpaper.id}>
          <img src={wallpaper.image} alt={wallpaper.title} className="wallpaper-image" />
          <div className="wallpaper-info">
            <h3>{wallpaper.title}</h3>
            <a href={wallpaper.image} download={`${wallpaper.title}.jpg`}>
              <button className="download-button">Download</button>
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default WallpaperSection;
