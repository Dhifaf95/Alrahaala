import React, { useState, useEffect, useCallback } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import './carculture.scss';

const Carculture = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  }, [images.length]);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  // إضافة التغيير التلقائي باستخدام useEffect مع الاعتمادية الصحيحة
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000); // تغيير الشريحة كل 3 ثوانٍ

    return () => clearInterval(interval); // تنظيف المؤقت عند إلغاء التحميل
  }, [nextSlide]); // إضافة nextSlide كاعتمادية

  return (
    <div className="carousel-container">
      <div className="carousel-images">
        <div className="carousel-image previous">
          <img
            src={images[(currentIndex - 1 + images.length) % images.length].src}
            alt="Previous"
            className="image"
          />
        </div>

        <div className="carousel-image current">
          <img
            src={images[currentIndex].src}
            alt="Current"
            className="image"
          />
        </div>

        <div className="carousel-image next">
          <img
            src={images[(currentIndex + 1) % images.length].src}
            alt="Next"
            className="image"
          />
        </div>
      </div>

      <button onClick={prevSlide} className="carousel-button left">
        <ChevronLeft size={24} />
      </button>
      <button onClick={nextSlide} className="carousel-button right">
        <ChevronRight size={24} />
      </button>

      <div className="carousel-indicators">
        <div className="dots">
          {images.map((_, idx) => (
            <button
              key={idx}
              onClick={() => goToSlide(idx)}
              className={`dot ${currentIndex === idx ? 'active' : ''}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Carculture;
