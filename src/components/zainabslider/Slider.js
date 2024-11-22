import React, { useState, useEffect, useRef, useCallback } from "react";
import "./zSlider.css";

function Slider() {
  const slides = [
    {
      image: "https://i.imgur.com/E7yeEaC.jpeg",
      text: "The Ziggurat of Ur, a towering ancient temple in Southern Iraq",
      link: "/places",
    },
    {
      image: "https://i.imgur.com/aywejzf.jpeg",
      text: "The Hanging Gardens of Babylon, one of the Seven Wonders of the Ancient World",
      link: "/lakes",
    },
    {
      image: "https://i.imgur.com/wUp2euC.jpeg",
      text: "The Abbasid Palace in Baghdad, reflecting the glory of the Islamic Golden Age.",
      link: "/AbbasiPalace",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(1); // نبدأ بالفهرس 1 للنسخة الإضافية
  const [isTransitioning, setIsTransitioning] = useState(false);
  const sliderRef = useRef();

  const nextSlide = useCallback(() => {
    if (!isTransitioning) {
      setCurrentIndex((prev) => prev + 1);
      setIsTransitioning(true);
    }
  }, [isTransitioning]);

  const prevSlide = () => {
    if (!isTransitioning) {
      setCurrentIndex((prev) => prev - 1);
      setIsTransitioning(true);
    }
  };

  // التحكم في الانتقال
  useEffect(() => {
    if (isTransitioning) {
      const timeout = setTimeout(() => {
        setIsTransitioning(false);

        // عند الوصول للنهاية أو البداية، نعيد ضبط الفهرس
        if (currentIndex === 0) {
          setCurrentIndex(slides.length);
        } else if (currentIndex === slides.length + 1) {
          setCurrentIndex(1);
        }
      }, 500); // زمن الانتقال (500ms)

      return () => clearTimeout(timeout);
    }
  }, [currentIndex, isTransitioning, slides.length]);

  // الحركة التلقائية
  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, [nextSlide]);


  // نسخ الشرائح مع إضافات
  const extendedSlides = [
    slides[slides.length - 1], // النسخة الأخيرة مضافة كبداية
    ...slides,
    slides[0], // النسخة الأولى مضافة كنهاية
  ];

  return (
    <div className="slider" ref={sliderRef}>
      <div
        className="slides"
        style={{
          transform: `translateX(-${currentIndex * 100}%)`,
          transition: isTransitioning ? "transform 0.5s ease-in-out" : "none",
        }}
      >
        {extendedSlides.map((slide, index) => (
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
        <h2 className="slider-texth2">
          {slides[(currentIndex - 1 + slides.length) % slides.length].text}
        </h2>
        <button
          className="sliderbtn"
          onClick={() =>
            (window.location.href =
              slides[(currentIndex - 1 + slides.length) % slides.length].link)
          }
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
