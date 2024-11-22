import React, { useState } from 'react';
import './searchbar.css';
import { useNavigate } from 'react-router-dom';
import { FaMapMarkerAlt } from 'react-icons/fa';
import { Calendar } from 'primereact/calendar';
import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';

const BookingSearch = ({ onSubmit }) => {
  const [location, setLocation] = useState('');
  const [dates, setDates] = useState(null);
  const [guests, setGuests] = useState(1);
  const navigate = useNavigate(); // Hook for navigation

  const locationOptions = {
    "Religious Landmarks": [
      "The Imam Ali Shrine in Najaf",
      "The Great Mosque of Samarra",
      "The Shrines of Imam Hussein and Imam Abbas in Karbala",
    ],
    "Historical and Archaeological Sites": [
      "The Hanging Gardens of Babylon",
      "The Ziggurat of Ur",
      "The Abbasid Palace in Baghdad",
    ],
    "Touristic Locations": [
      "The riverfronts along the Tigris River in Baghdad",
      "The Korek Mountains",
      "The ancient Erbil Citadel",
    ],
    "Adventure Spots": [
      "Mountain climbing in the Hamrin Mountains",
      "Zakros Amusement Park in Sulaymaniyah",
      "Camping in the Qandil Mountains",
    ],
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    // تحقق من تسجيل الدخول
    const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true'; // أو يمكن استخدام state/Redux بدلاً من localStorage

    if (isLoggedIn) {
      const bookingData = {
        location,
        dates,
        guests,
      };

      onSubmit(bookingData); // Pass data to the parent component or API
      navigate('/'); // مسار الصفحة للمستخدم المسجل دخول
    } else {
      navigate('/login'); // مسار صفحة تسجيل الدخول
    }
  };
  const handleLocationChange = (e) => {
    const selectedLocation = e.target.value;
    setLocation(selectedLocation);

    // Adjust the date selection based on the location
    // Example: Set default dates for certain categories if needed
    if (selectedLocation === "The Shrines of Imam Hussein and Imam Abbas in Karbala") {
      setDates([new Date(), new Date(new Date().setDate(new Date().getDate() + 1))]); // Example: set a default range
    }
  };

  return (
    <div className="booking-container">
      <form className="booking-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <div className="input-icon">
            <FaMapMarkerAlt size={20} color="#aaa" />
            <select
            className='seld'
              id="location"
              value={location}
              onChange={handleLocationChange}
            >
              <option value="">Where to?</option>
              {Object.keys(locationOptions).map((category) => (
                <optgroup label={category} key={category}>
                  {locationOptions[category].map((place, index) => (
                    <option key={index} value={place}>
                      {place}
                    </option>
                  ))}
                </optgroup>
              ))}
            </select>
          </div>
        </div>
        <div className="form-group">
          <div className="input-icon-calendar">
            <i className="pi pi-calendar calendar-icon"></i>
            <Calendar
              id="Dates"
              value={dates}
              onChange={(e) => setDates(e.value)}
              selectionMode="range"
              readOnlyInput
              hideOnRangeSelection
              placeholder="Select Check-In and Check-Out Dates"
            />
          </div>
        </div>

        <div className="form-group">
          <div className="input-icon">
            <svg
              width="24"
              height="24"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            ></svg>
            <input
              type="number"
              id="guests"
              placeholder="Traveler number"
              value={guests}
              onChange={(e) => setGuests(e.target.value)}
              min="1"
            />
          </div>
        </div>

        <button type="submit" className="submit-btnnh">
          Company Booking
        </button>
      </form>
    </div>
  );
};

export default BookingSearch;
