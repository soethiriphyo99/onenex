import React from 'react';
import { Facebook, Instagram, Linkedin, Youtube } from 'lucide-react';

const Footer: React.FC = () => {
    return (
        <footer className="footer-premium">
            <div className="footer-container">
                <div className="footer-cta">
                    <h2 className="footer-main-heading">
                        WE ARE YOUR PARTNER FOR <br /> INNOVATION & GROWTH
                    </h2>
                </div>

                <div className="footer-content">
                    <div className="footer-column">
                        <h3>WE ONENEX</h3>
                        <ul>
                            <li><a href="#">Cases</a></li>
                            <li><a href="#">Contact us</a></li>
                            <li><a href="#">Services</a></li>
                        </ul>
                    </div>
                    <div className="footer-column">
                        <h3>WE OFFER</h3>
                        <ul>
                            <li><a href="#">UI/UX Development</a></li>
                            <li><a href="#">Web Development</a></li>
                            <li><a href="#">Android Development</a></li>
                            <li><a href="#">iOS Development</a></li>
                        </ul>
                    </div>
                    <div className="footer-column">
                        <h3>FOLLOW US</h3>
                        <div className="social-links">
                            <a href="#" className="social-icon"><Facebook size={20} /></a>
                            <a href="#" className="social-icon"><Instagram size={20} /></a>
                            <a href="#" className="social-icon"><Linkedin size={20} /></a>
                            <a href="#" className="social-icon"><Youtube size={20} /></a>
                        </div>
                    </div>
                </div>

                <div className="footer-bottom">
                    <div className="logo">
                        <span style={{ color: 'white', fontSize: '2.2rem', fontWeight: 800 }}>onenex</span>
                    </div>
                    <p className="copyright">
                        ONENEX © COPYRIGHT 2026. ALL RIGHT RESERVED.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
