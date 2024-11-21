import React, { useState, useEffect } from "react";
import "./zSlider.css";

function Slider() {
  const slides = [
    {
      image: 'https://i.imgur.com/E7yeEaC.jpeg',
      text: "The Ziggurat of Ur, a towering ancient temple in Southern Iraq",
      link: "/places", // رابط الصفحة
    },
    {
      image: 'https://i.imgur.com/aywejzf.jpeg',
      text: "The Hanging Gardens of Babylon, one of the Seven Wonders of the Ancient World",
      link: "/lakes", // رابط الصفحة
    },
    {
      image: 'https://i.imgur.com/wUp2euC.jpeg',
      text: "The Abbasid Palace in Baghdad, reflecting the glory of the Islamic Golden Age.",
      link: "/AbbasiPalace", // رابط الصفحة
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => setCurrentIndex((currentIndex + 1) % slides.length);
  const prevSlide = () =>
    setCurrentIndex((currentIndex - 1 + slides.length) % slides.length);

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, [currentIndex]);

  return (
    <div className="slider">
      <div
        className="slides"
        style={{
          transform: `translateX(-${currentIndex * 100}%)`,
        }}
      >
        {slides.map((slide, index) => (
          <div
            key={index}
            className="slide"
            style={{
              backgroundImage: `url(${slide.image})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          ></div>
        ))}
      </div>
      <div className="slider-text">
        <h2 className="slider-texth2">{slides[currentIndex].text}</h2>
        <button
          className="sliderbtn"
          onClick={() => (window.location.href = slides[currentIndex].link)} // الانتقال للرابط
        >
          Explore Now
        </button>
      </div>
      <div className="slider-controls">
        <button id="prev" className="slider-btn" onClick={prevSlide}>
          ❮
        </button>
        <button id="next" className="slider-btn" onClick={nextSlide}>
          ❯
        </button>
      </div>
    </div>
  );
}

export default Slider;
