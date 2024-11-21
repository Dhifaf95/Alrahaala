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

  return (
    <div className="booking-container">
      <form className="booking-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <div className="input-icon">
            <FaMapMarkerAlt size={20} color="#aaa" />
            <input
              type="text"
              id="location"
              placeholder="Where to?"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
            />
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

        <button type="submit" className="submit-btn">
          Company Booking
        </button>
      </form>
    </div>
  );
};

export default BookingSearch;
