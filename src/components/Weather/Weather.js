import React, { useState, useEffect } from 'react';
import { Sun, Moon, CloudRain, Wind, Droplets, Thermometer, MapPin, Eye, Cloud } from 'lucide-react';
import './WeatherSection.css';

const WeatherSection = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const cities = ['Baghdad', 'Basra', 'Mosul', 'Erbil', 'Najaf'];
  const API_KEY = '44a5ff5b6bc68a6fbd0459bd802332df';

  useEffect(() => {
    const fetchWeatherData = async () => {
      try {
        setLoading(true);
        const weatherPromises = cities.map(city =>
          fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city},IQ&units=metric&appid=${API_KEY}`)
            .then(res => res.json())
        );
        const results = await Promise.all(weatherPromises);
        setWeatherData(results);
      } catch (err) {
        setError('Failed to fetch weather data');
      } finally {
        setLoading(false);
      }
    };

    fetchWeatherData();
    const interval = setInterval(fetchWeatherData, 1800000);
    return () => clearInterval(interval);
  }, []);

  if (loading) {
    return (
      <div className="weather-loader">
        <div className="loader"></div>
      </div>
    );
  }

  if (error) {
    return <div className="weather-error">{error}</div>;
  }

  return (
    <div className="weather-section">
      <div className="weather-header">
        <h2>Weather in Iraq</h2>
        <p>Current weather conditions across major cities</p>
      </div>

      <div className="weather-nav">
        {cities.map((city, index) => (
          <button
            key={city}
            className={`nav-item ${index === activeIndex ? 'active' : ''}`}
            onClick={() => setActiveIndex(index)}
          >
            {city}
          </button>
        ))}
      </div>

      <div className="weather-carousel">
        {weatherData?.map((cityData, index) => (
          <div 
            key={cityData.name}
            className={`weather-card ${index === activeIndex ? 'active' : ''}`}
            style={{
              transform: `translateX(${(index - activeIndex) * 100}%)`
            }}
          >
            <div className="card-header">
              <div className="location">
                <MapPin className="icon" />
                <h3>{cityData.name}</h3>
              </div>
              <div className="current-time">
                {new Date().toLocaleTimeString([], { 
                  hour: '2-digit', 
                  minute: '2-digit' 
                })}
              </div>
            </div>

            <div className="main-weather">
              <div className="temperature">
                <span className="temp-value">{Math.round(cityData.main.temp)}</span>
                <span className="temp-unit">°C</span>
              </div>
              <div className="weather-icon">
                {cityData.weather[0].icon.includes('d') ? 
                  <Sun className="icon sun" /> : 
                  <Moon className="icon moon" />
                }
              </div>
            </div>

            <div className="weather-info">
              <div className="info-item">
                <Thermometer className="icon" />
                <div className="info-content">
                  <span className="label">Feels like</span>
                  <span className="value">{Math.round(cityData.main.feels_like)}°C</span>
                </div>
              </div>
              <div className="info-item">
                <Wind className="icon" />
                <div className="info-content">
                  <span className="label">Wind speed</span>
                  <span className="value">{Math.round(cityData.wind.speed)} km/h</span>
                </div>
              </div>
              <div className="info-item">
                <Droplets className="icon" />
                <div className="info-content">
                  <span className="label">Humidity</span>
                  <span className="value">{cityData.main.humidity}%</span>
                </div>
              </div>
              <div className="info-item">
                <Eye className="icon" />
                <div className="info-content">
                  <span className="label">Visibility</span>
                  <span className="value">{(cityData.visibility / 1000).toFixed(1)} km</span>
                </div>
              </div>
            </div>

            <div className="forecast-footer">
              <p className="description">
                {cityData.weather[0].description}
              </p>
              <p className="update-time">
                Last updated: {new Date().toLocaleTimeString()}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WeatherSection;