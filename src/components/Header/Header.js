// Header.js
import React, { useState } from 'react';
import './header.css';
import { Link } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll';
import logo from './Untitled_logo_1_free-file__4_-removebg-preview.png';
import Button from '../Button/Button';
import Login from '../Login/Login';
import profileIcon from './profile-icon.png';

const Header = () => {
    const [isLoginVisible, setLoginVisible] = useState(false);
    const [isLoggedIn, setLoggedIn] = useState(false);

    const handleLoginSuccess = () => {
        setLoggedIn(true);
        setLoginVisible(false);
    };

    // دالة إغلاق نافذة تسجيل الدخول
    const handleCloseLogin = () => {
        setLoginVisible(false);
    };

    return (
        <header className="header">
            <div className="logo">
                <img src={logo} alt="Logo" className="logo-img" />
            </div>

            <nav className="nav-links">
                <ul className="list">
                    <li><Link to="/">Home</Link></li>
                    <li><ScrollLink to="Attractions" smooth={true} duration={500}>Attractions</ScrollLink></li>
                    <li><ScrollLink to="services" smooth={true} duration={500}>Services</ScrollLink></li>
                    <li><ScrollLink to="About" smooth={true} duration={500}>About Us</ScrollLink></li>
                </ul>
            </nav>

            <div className="login-containerd">
                {!isLoggedIn ? (
                    <Button
                        onClick={() => setLoginVisible(true)}
                        label="Login"
                        width="100px"
                        height="40px"
                        className="buttonD"
                        fontSize="20px"
                    />
                ) : (
                    <img 
                        src={profileIcon} 
                        alt="Profile Icon" 
                        className="profile-icon" 
                    />
                )}
            </div>

            {isLoginVisible && (
                <div className="login-modal">
                    <Login 
                        onClose={handleCloseLogin}
                        onLoginSuccess={handleLoginSuccess}
                    />
                </div>
            )}
        </header>
    );
};

export default Header;