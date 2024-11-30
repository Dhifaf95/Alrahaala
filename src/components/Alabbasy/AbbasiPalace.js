import React from 'react';
import { MapPin, Clock, Phone } from 'lucide-react';
import './AbbasiPalace.css';
import image1 from './wallabbasy.jpg';
import image2 from './gardabbay.jpg';
import image3 from './archabbay.jpg';
import image4 from './tafaabby.jpg';
import Header from '../Header/Header';
import Footer  from '../Footer/Footer';

const AbbasiPalace = () => {
  return (

    <div className="palace-container">
      <Header/>
      {/* Hero Section */}
      <div className="hero-section">
        <div className="hero-overlay">
          <div className="hero-content">
            <h1>Al-Abbasi Palace</h1>
            <p>A Masterpiece of Islamic Architecture</p>
          </div>
        </div>
      </div>

      {/* Quick Info Bar */}
      <div className="info-bar">
        <div className="info-container">
          <div className="info-item">
            <Clock />
            <span>Open daily: 9:00 AM - 4:00 PM</span>
          </div>
          <div className="info-item">
            <a 
              href="https://www.google.com/maps?q=Al+Abbasi+Palace+Baghdad+Iraq" 
              target="_blank" 
              rel="noopener noreferrer"
              className='HistoricalDistric'
              
            >
              <MapPin />
              <span >Historical District, Baghdad</span>
            </a>
          </div>
          <div className="info-item">
            <Phone />
            <span>+96477000000</span>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="main-content">
        {/* Introduction */}
        <section className="intro-section">
          <h2>About Al-Abbasi Palace</h2>
          <p>
            The Al-Abbasi Palace stands as one of the most significant monuments of the Abbasid Caliphate, 
            exemplifying the golden age of Islamic civilization. Built during the 8th century, this architectural 
            marvel showcases the sophistication and grandeur of Abbasid architecture.
          </p>
          <div className="intro-grid">
            <img 
              src={image3} 
              alt="Palace Architecture" 
              className="intro-image"
            />
            <div className="features-list">
              <h3 className='guidelines-list'>Architectural Highlights</h3>
              <ul>
                <li> Intricate geometric patterns and arabesque designs</li>
                <li> Grand central courtyard with fountain</li>
                <li> Magnificent domed chambers</li>
                <li> Traditional Islamic gardens</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Gallery Section */}
        <section className="gallery-section">
          <h2>Palace Gallery</h2>
          <div className="gallery-grid">
            <div className="gallery-item">
              <img 
                src={image1}  
                alt="Palace Interior" 
              />
              <h3>Grand Hall</h3>
              <p>The magnificent central hall featuring intricate ceiling work</p>
            </div>
            <div className="gallery-item">
              <img 
                src={image2} 
                alt="Palace Gardens" 
              />
              <h3>Gardens</h3>
              <p>Traditional Islamic gardens with geometric patterns</p>
            </div>
            <div className="gallery-item">
              <img 
                src={image4}
                alt="Palace Artifacts" 
                height={219}
              />
              <h3>Artifacts</h3>
              <p>Historical artifacts from the Abbasid period</p>
            </div>
          </div>
        </section>

        {/* Visitor Information */}
        <section className="visitor-section">
          <h2>Visitor Information</h2>
          <div className="visitor-grid">
            <div className="info-card">
              <h3>Admission</h3>
              <ul className="pricing-list">
                <li>
                  <span>Adults</span>
                  <span>25 USD</span>
                </li>
                <li>
                  <span>Children (under 12)</span>
                  <span>Free</span>
                </li>
                <li>
                  <span>Students</span>
                  <span>15 USD</span>
                </li>
                <li>
                  <span>Senior Citizens</span>
                  <span>15 USD</span>
                </li>
              </ul>
            </div>
            <div className="info-card">
              <h3>Guidelines</h3>
              <ul className="guidelines-list">
                <li>Modest dress is required</li>
                <li> Photography allowed (no flash)</li>
                <li> Guided tours available</li>
                <li> No food and drinks inside</li>
              </ul>
            </div>
          </div>
        </section>
      </div>
      <Footer/>
    </div>
  );
};

export default AbbasiPalace;
