import React from 'react';
import { useNavigate } from 'react-router-dom';
import "../zainabsours/css/Backimg.css";
import "../zainabsours/css/comcard.css";
import complogo from "../zainabsours/imges/complogo.jpg";
import complogo2 from "../zainabsours/imges/complogo2.jpg";
import complogo3 from "../zainabsours/imges/complogo3.jpg";

const cardData = [
  {
    image: complogo,
    title: "Rocky Road Travel",
    description:
      "Iraq Adventures offers packages for historical exploration and outdoor activities. Their tours cover cultural and adventure destinations throughout Iraq.",
    link: '/Comp1Bookpage'
  },
  {
    image: complogo2,
    title: "Raq Adventures",
    description:
      "Explore historical sites and outdoor activities like hiking in the Hamrin Mountains. Their tours span cultural and adventure destinations across Iraq.",
    link: '/Comp2Bookpage'
  },
  {
    image: complogo3,
    title: "Aknaf Al-Sawary",
    description:
      "Offering diverse packages, from cultural exploration to mountain hiking. Discover Iraq’s rich history with guided tours.",
    link: '/Comp3bookpage'
  }
];

function Card({ image, title, description, onButtonClick }) {
  return (
    <div className="Zcard">
      <img className="Zcomp1" src={image} alt={title} width="100%" height="60%" />
      <h2 className='Zbookh2'>{title}</h2>
      <p className='Zbookp'>{description}</p>
      <button  className="Zbookbtn" onClick={onButtonClick}>Book</button>
    </div>
  );
}

function ZCompcard() {
  const navigate = useNavigate();
  
  const handleButtonClick = (link) => {
    navigate(link);
  };

  return (
    <div className="ZCompcard">
      {cardData.map((card, index) => (
        <Card 
          key={index} 
          image={card.image} 
          title={card.title} 
          description={card.description} 
          onButtonClick={() => handleButtonClick(card.link)} 
        />
      ))}
    </div>
  );
}

export default ZCompcard;
