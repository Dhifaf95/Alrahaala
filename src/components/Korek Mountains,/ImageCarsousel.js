import React, { useState } from 'react';
import Slider from 'react-slick';
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import './ImageCarsousel.css';
import image1 from './1.jpg';
import image2 from './3.jpg';
import image3 from './6.jpg';
import image4 from './8.jpg';
import image5 from './9.jpg';
import image6 from './OIP (1).jpg';
import image7 from './OIP (2).jpg';
import image8 from './OIP (3).jpg';

const images = [
   image1, image2, image3, image4, image5, image6, image7, image8,
];

function ImageCarsousel() {
  const NextArrow = ({ onClick }) => {
    return (
      <div className="arrow next" onClick={onClick}>
        <FaArrowRight />
      </div>
    );
  };

  const PrevArrow = ({ onClick }) => {
    return (
      <div className="arrow prev" onClick={onClick}>
        <FaArrowLeft />
      </div>
    );
  };

  const [imageIndex, setImageIndex] = useState(0);

  const settings = {
    infinite: true,
    lazyLoad: true,
    speed: 300,
    slidesToShow: 3,
    centerMode: true,
    centerPadding: 0,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    beforeChange: (current, next) => setImageIndex(next),
  };

  return (
    <div className='last'>
      <div className="title">Last Events</div> {/* Title */}
      <Slider {...settings}>
        {images.map((image, idx) => (
          <div className={idx === imageIndex ? "slide activeSlide" : "slide"} key={idx}>
            <img src={image} alt={`Slide ${idx + 1}`} />
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default ImageCarsousel;
