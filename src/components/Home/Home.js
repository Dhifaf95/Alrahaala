import React, { useState } from 'react';
import Header from '../Header/Header';
import HeroSection from '../Hero/Hero';
import Culture from '../Culture/Culture';
// import Top from '../Top/Top';
import Whyvisitiraq from '../Whyvisitiraq/Whyvisitraq';
import About from '../About/About';
import Footer from '../Footer/Footer';
import Login from '../Login/Login';
// import Weather from '../Weather/Weather'
import "./home.css";

const Home = () => {
  const [isLoginVisible, setIsLoginVisible] = useState(false);

  

  return (
    <div className={isLoginVisible ? 'modal-open' : ''}>
      
      <Header onLoginClick={() => setIsLoginVisible(true)} />

      {isLoginVisible && (
        <div className="overlay" onClick={() => setIsLoginVisible(false)}>
          <div onClick={(e) => e.stopPropagation()}>
            <Login onClose={() => setIsLoginVisible(false)} />
          </div>
        </div>
      )}
      
      <HeroSection />
      <Whyvisitiraq />
      <Culture />
      {/* <Top /> */}
      {/* <Weather/> */}
      <About />
      <Footer />
    </div>
  );
}

export default Home;
