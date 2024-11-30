import React, { useState } from 'react';
import { useEffect } from 'react';
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
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const loggedInStatus = localStorage.getItem("isLoggedIn") === "true";
    setIsLoggedIn(loggedInStatus);
  }, []);
  

  // دالة تسجيل الدخول
  const handleLogin = () => {
    setIsLoggedIn(true);
    localStorage.setItem("isLoggedIn", "true");
  };

  // دالة تسجيل الخروج
  const handleLogout = () => {
    setIsLoggedIn(false);
    localStorage.setItem("isLoggedIn", "false");
  };


  return (
    <div className={isLoginVisible ? 'modal-open' : ''}>
      
      <Header onLoginClick={() => setIsLoginVisible(true)} 
        isLoggedIn={isLoggedIn} 
        handleLogin={handleLogin} 
        handleLogout={handleLogout} />

      {isLoginVisible && (
        <div className="overlay" onClick={() => setIsLoginVisible(false)}>
          <div onClick={(e) => e.stopPropagation()}>
            <Login onClose={() => setIsLoginVisible(false)} 
        handleLogin={handleLogin}/>
          </div>
        </div>
      )}
      
      <HeroSection 
      isLoggedIn={isLoggedIn} 
      onLoginRequired={() => setIsLoginVisible(true)} />
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
