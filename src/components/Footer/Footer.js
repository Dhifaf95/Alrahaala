import React from 'react';
import './footer.css';
import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';
import logo from '../Header/Untitled_logo_1_free-file__4_-removebg-preview.png';

const Footer = React.memo(() => {
    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-logo">
                    <img src={logo} alt="Discover Mesopotamia" />
                    <p>Discover Iraq and live the adventure</p>
                </div>
                <div className="footer-links">
                    <div className="footer-column">
                        <h4>Company</h4>
                        <ul>
                            <li><a href="/about">About</a></li>
                            <li><a href="/careers">Careers</a></li>
                            <li><a href="/mobile">Mobile</a></li>
                        </ul>
                    </div>
                    <div className="footer-column">
                        <h4>Contact</h4>
                        <ul>
                            <li><a href="/help">Help/FAQ</a></li>
                            <li><a href="/press">Press</a></li>
                            <li><a href="/affiliates">Affiliates</a></li>
                        </ul>
                    </div>
                    <div className="footer-column">
                        <h4>More</h4>
                        <ul>
                            <li><a href="/airlinefees">Airline Fees</a></li>
                            <li><a href="/airline">Airline</a></li>
                            <li><a href="/low-fare-tips">Low Fare Tips</a></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="footer-bottom">
                <p>All rights reserved @Rahaala.com</p>
                <div className="footer-social">
                    <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><FaFacebookF /></a>
                    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
                    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
                </div>
            </div>
        </footer>
    );
});

export default Footer;
