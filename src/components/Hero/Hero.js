import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import './hero.css';
import Button from '../Button/Button';
import imageuu from './backimg.png';
import SearchBar from '../Service/SearchBar';

const HeroSection = () => {
  const navigate = useNavigate(); // Initialize useNavigate

  const handleExploreMoreClick = () => {
    navigate('/Iraqculturelocal'); // Navigate to the Exploremore page
  };

  return (
    <div className='container-hero'>
      <div className='container-exploremore'>
        <div className='containerlink'>
          <h1 className='herodis'>Discover Iraq’s rich history and culture</h1>
          <Button 
            label="Explore more" 
            width='170px' 
            height='50px' 
            className="button-he" 
            fontSize='2rem' 
            onClick={handleExploreMoreClick} // Use the click handler
          />
        </div>
        <div className='container-image'>
          <img src={imageuu} alt='Hero' />
        </div>
      </div>
      <SearchBar />
    </div>
  );
};

export default HeroSection;