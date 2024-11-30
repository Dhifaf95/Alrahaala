import React, { useState, useEffect } from 'react';
import './searchbar.css';
import { useNavigate } from 'react-router-dom';
import { FaMapMarkerAlt } from 'react-icons/fa';
import { Calendar } from 'primereact/calendar';
import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import Button from '../Button/Button';
import Login from '../Login/Login';

const BookingSearch = () => {
    const [location, setLocation] = useState('');
    const [dates, setDates] = useState(null);
    const [guests, setGuests] = useState(1);
    const [isLoginVisible, setLoginVisible] = useState(false);
    const [isLoggedIn, setLoggedIn] = useState(false);
    const [username, setUsername] = useState(null);

    const navigate = useNavigate();

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

    useEffect(() => {
        const storedToken = localStorage.getItem('token');
        const storedUsername = localStorage.getItem('username');
        if (storedToken && storedUsername) {
            setLoggedIn(true);
            setUsername(storedUsername);
        }
    }, []);

    const handleLocationChange = (e) => {
        const selectedLocation = e.target.value;
        setLocation(selectedLocation);
        if (selectedLocation === "The Shrines of Imam Hussein and Imam Abbas in Karbala") {
            setDates([new Date(), new Date(new Date().setDate(new Date().getDate() + 1))]);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (isLoggedIn) {
        } else {
            setLoginVisible(true);
        }
    };

    const handleLoginSuccess = (user, token) => {
        localStorage.setItem('username', user);
        localStorage.setItem('token', token);
        setLoggedIn(true);
        setUsername(user);
        setLoginVisible(false);
        navigate('/ZainabHom');
    };

    

    return (
        <div id="SearchBar" className="booking-container">
            {isLoggedIn && <p>Welcome, {username}!</p>}

            <form className="booking-form" onSubmit={handleSubmit}>
                <div className="form-group">
                    <div className="input-icon">
                        <FaMapMarkerAlt size={20} color="#aaa" />
                        <select
                            className="seld"
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

                <div className="login-container">
                    <Button
                        onClick={handleSubmit}
                        label="Company Booking"
                        width="160px"
                        height="43px"
                        className="submit-btnnh"
                        fontSize="18px"
                    />
                </div>

                {isLoginVisible && (
                    <div className="login-modal">
                        <Login
                            onClose={() => setLoginVisible(false)}
                            onLoginSuccess={handleLoginSuccess}
                        />
                    </div>
                )}
            </form>
        </div>
    );
};

export default BookingSearch;
