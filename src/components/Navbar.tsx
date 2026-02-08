import React, { useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

interface NavbarProps {
    currentPage: 'cases' | 'services' | 'contact';
    onPageChange: (page: 'cases' | 'services' | 'contact') => void;
}

const Navbar: React.FC<NavbarProps> = ({ currentPage, onPageChange }) => {
    const [isScrolled, setIsScrolled] = useState(false);
    const { scrollY } = useScroll();
    const opacity = useTransform(scrollY, [0, 100], [1, 0.95]);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <motion.nav
            style={{ opacity }}
            className={`navbar ${isScrolled ? 'scrolled' : ''}`}
        >
            <div className="container nav-container">
                <div className="logo" onClick={() => onPageChange('cases')} style={{ cursor: 'pointer' }}>
                    <span className="logo-text">onenex</span>
                </div>
                <div className="nav-links">
                    <button
                        onClick={() => onPageChange('services')}
                        className={`nav-link ${currentPage === 'services' ? 'active' : ''}`}
                    >
                        SERVICES
                    </button>
                    <button
                        onClick={() => onPageChange('cases')}
                        className={`nav-link ${currentPage === 'cases' ? 'active' : ''}`}
                    >
                        CASES
                    </button>
                    <button
                        onClick={() => onPageChange('contact')}
                        className={`nav-link ${currentPage === 'contact' ? 'active' : ''}`}
                    >
                        CONTACT US
                    </button>
                </div>
            </div>
        </motion.nav>
    );
};

export default Navbar;
