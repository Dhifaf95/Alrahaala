import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation,EffectCoverflow } from 'swiper/modules'; 
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/effect-coverflow';
import './top.css';

// Import your images
import image1 from './1.jpg';
import image2 from './3.jpg';
import image3 from './6.jpg';
import image4 from './8.jpg';
import image5 from './9.jpg'
import image6 from './OIP (1).jpg';
import image7 from './download (1).jpg';
import image8 from './OIP.jpg';
import image9 from './download.jpg';

const images = [image1, image2, image3, image4, image5, image6, image7, image8, image9];

const Top = () => {
  return (
    <div className="wrapper11">
      <div>
        <h2 className='hexplore'> Top Explore Attractions in Iraq</h2>
      </div>
      
      <Swiper
        modules={[Navigation, EffectCoverflow]}
        effect="coverflow"
        navigation
        grabCursor={true}
        loop={true}
        centeredSlides={true}
        slidesPerView="auto"
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2.5,
          slideShadows: false,
        }}
        className="news-slider"
      >
        {[24, 25, 26, 27, 28, 29].map((day, index) => (
          <SwiperSlide key={index} className="news-slider__item">
            <a href="WWW.FACE.COM" className="news__item">
              <div className="news-date">
                <span className="news-date__title">{day}</span>
                <span className="news-date__txt">May</span>
              </div>
              <div className="news__title">Lorem Ipsum Dolor Sit Amet</div>
             
              <div className="news__img">
                <img
                  src={images[index % images.length]} // Use the images array
                  alt={`news ${index + 1}`}
                />
              </div>
            </a>
          </SwiperSlide>
        ))}
      </Swiper>

    </div>
  );
};

export default Top;
