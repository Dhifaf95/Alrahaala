import React from 'react';
import './cards.css'; // Import CSS file for styles
import Imagecard1 from './citadel-of-erbi.jpg';
import Imagecard2 from './korek-mountains.jpg';
import Imagecard3 from './riverfronts-along-the-tigris-river.jpg';
import Button from '../Button/Button';

const Cards = () => {
  const cards = [
    {
      title: "Rich History",
      description: "Rich history weaves together the stories, events, and achievements of past civilizations, shaping our understanding of the present. Iraq’s history is marked by great cultural achievements, including the construction of grand ziggurats, the compilation of the Code of Hammurabi, and significant advancements in mathematics and astronomy.",
      imgSrc: Imagecard1,
      videoLink: "https://www.youtube.com/watch?v=AnBJGlcojUY", // رابط فيديو يوتيوب
    },
    {
      title: "Stunning Nature",
      description: "Stunning nature captivates the senses with its breathtaking landscapes, from majestic mountains to serene forests and vibrant oceans. The diverse ecosystems found across the globe reveal the beauty of our planet, showcasing everything from the intricate patterns of blooming wildflowers in meadows to the vastness of open skies dotted with twinkling stars.",
      imgSrc: Imagecard2,
      videoLink: "https://www.youtube.com/watch?v=X8qqOI29WMg", // رابط فيديو يوتيوب آخر
    },
    {
      title: "Cultural Heritage",
      description: "Cultural heritage encompasses the traditions, customs, and artifacts passed down through generations, reflecting a community's identity and history. Artifacts, such as pottery, textiles, and monuments, offer tangible connections to historical events and everyday life of ancestors, allowing us to understand their values, beliefs, and experiences.",
      imgSrc: Imagecard3,
      videoLink: "https://www.youtube.com/watch?v=xqpJuDAD5C4", // رابط فيديو يوتيوب مختلف
    },
  ];

  return (
    <div className="card-containerwhy">
      {cards.map((card, index) => (
        <div className="cardqq" key={index}>
          <img src={card.imgSrc} alt={card.title} className="card__image" />
          <div className="card__content">
            <p className="card__title">{card.title}</p>
            <p className="card__description">{card.description}</p>
            <a href={card.videoLink} target="_blank" rel="noopener noreferrer"  className='testde'>
  <Button label="Learn more" width='140px' height='40px' className="buttonwhy" fontSize='20px'/>
</a>

          </div>
        </div>
      ))}
    </div>
  );
};

export default Cards;
