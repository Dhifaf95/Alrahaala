import React , {useState} from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import './hero.css';
import Button from '../Button/Button';
import imageuu from './backimg.png';
import SearchBar from '../Service/SearchBar';
import Login from '../Login/Login';

const HeroSection = () => {
  const navigate = useNavigate(); // Initialize useNavigate
  const [isLoginVisible, setIsLoginVisible] = useState(false);
  


  const handleExploreMoreClick = () => {
    navigate('/Iraqculturelocal'); // Navigate to the Exploremore page
  };

  const handleLoginRequired = () => {
    // هنا يمكنك ضبط نافذة تسجيل الدخول لتظهر
    setIsLoginVisible(true);
};

  const handleCloseLogin = () => {
    setIsLoginVisible(false);
  };

 

  const handleLoginSuccess = () => {
    setIsLoginVisible(false);
    // Optional: you might want to navigate to companies page or refresh the page
    navigate('/companies');
  };

  return (
    <div className={`container-hero ${isLoginVisible ? 'modal-open' : ''}`}>
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
      <SearchBar onLoginRequired={handleLoginRequired}  />
      {isLoginVisible && (
        <div className="login-modal">
          <Login 
            onClose={handleCloseLogin} 
            onLoginSuccess={handleLoginSuccess} 
          />
        </div>
      )}
    </div>
  );
};

export default HeroSection;