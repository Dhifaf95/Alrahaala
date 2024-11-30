import React from 'react';
import './culture.css';

const Attractions = () => {
  return (
<div id="Attractions" className='cardcontainer'>
<div className='text-container'>
        <h2 className='Ano'>Attraction</h2>
        <p className='Hereare'>
          Here are lots of interesting destinations to visit, but don’t be confused—they’re already grouped by category.
        </p>
      </div>
      <div className='card-wrapper'>
        <div className="incard">Religilous Landmarks</div>
        <div className="incard">
          <a className="cardslider" href='/Slider'>historical Sites</a>
          </div> 
        <div className="incard" >Touristic Location  </div> 
        <div className="incard">Adventure Spot </div>
      </div>
    </div>
  );
}

export default Attractions;
