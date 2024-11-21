import React from 'react';
import './Iconheader.css';
import { Link } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll';
import logo from '../Header/Untitled_logo_1_free-file__4_-removebg-preview.png';
import Iconpersonal from '../iconpersonal/Iconpersonal';

const IconHeader = () => {
    const username = localStorage.getItem('username'); // قراءة اسم المستخدم من localStorage

    return (
        <header className="icon-header">
            <div className="icon-logo">
                <img src={logo} alt="Logo" className="icon-logo-img" />
            </div>

            <nav className="icon-nav-links">
                <ul className="icon-list">
                    <li><Link to="/">Home</Link></li>
                    <li><ScrollLink to="Attractions" smooth={true} duration={500}>Attractions</ScrollLink></li>
                    <li><ScrollLink to="services" smooth={true} duration={500}>Services</ScrollLink></li>
                    <li><ScrollLink to="About" smooth={true} duration={500}>About Us</ScrollLink></li>
                </ul>
            </nav>

            <div className="icon-profile-container">
            <Iconpersonal username={username} />
            </div>
        </header>
    );
};

export default IconHeader;
