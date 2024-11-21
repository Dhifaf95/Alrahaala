import React from 'react';
import './descripesite.css'

const Descripesite = () => {
  return (
    <div style={styles.container}>
      
      <p style={styles.paragraph}>
        Discover the best tourist sites in the region, from beautiful beaches to historic landmarks.
      </p>
      <p style={styles.paragraph}>
        Our curated selection of attractions offers something for everyone, whether you are looking for adventure, relaxation, or culture.
      </p>
      <p style={styles.paragraph}>
        Enjoy personalized recommendations and itineraries tailored to your preferences and interests.
      </p>
      <p style={styles.paragraph}>
        Join us for unforgettable experiences and create memories that will last a lifetime.
      </p>
      <p style={styles.paragraph}>
        Explore our site and start planning your next adventure today!
      </p>
    </div>
  );
};

const styles = {
  container: {
    fontFamily: 'Poppins, sans-serif',
    margin: '20px auto',
    padding: '30px',
    borderRadius: '8px',
    backgroundColor: '#f9f9f9',
    boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
    maxWidth: '800px',
    opacity: '0', // Initial opacity for fade-in effect
    animation: 'fadeIn 1s forwards', // Apply animation
  },
  title: {
    fontSize: '24px',
    fontWeight: 'bold',
    marginBottom: '20px',
    color: '#333', // Dark text color for contrast
  },
  paragraph: {
    fontSize: '16px',
    lineHeight: '1.6',
    color: '#555',
    marginBottom: '16px', // Space between paragraphs
  },
};


  


export default Descripesite ;

