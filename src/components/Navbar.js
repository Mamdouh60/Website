import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';
import './Navbar.css';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const { theme, toggleTheme, isDarkMode, toggleDarkMode } = useTheme();

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="navbar">
            <div className="navbar-container">
                <Link to="/" className="navbar-logo">
                    Mamdouh El Sedawy
                </Link>

                <div className={`nav-menu ${isOpen ? 'active' : ''}`}>
                    <Link to="/" className="nav-link" onClick={() => setIsOpen(false)}>Home</Link>
                    <Link to="/experience" className="nav-link" onClick={() => setIsOpen(false)}>Experience</Link>
                    <Link to="/skills" className="nav-link" onClick={() => setIsOpen(false)}>Skills</Link>
                    <Link to="/certificates" className="nav-link" onClick={() => setIsOpen(false)}>Certificates</Link>
                    <Link to="/contact" className="nav-link" onClick={() => setIsOpen(false)}>Contact</Link>
                </div>

                <button
                    className="dark-mode-toggle"
                    onClick={toggleDarkMode}
                    aria-label="Toggle dark mode"
                >
                    {isDarkMode ? '☀️' : '🌙'}
                </button>

                <div className="nav-controls">
                    <div className="theme-switcher">
                        <select
                            className="theme-select"
                            value={theme}
                            onChange={(e) => toggleTheme(e.target.value)}
                        >
                            <option value="blue">Modern Blue</option>
                            <option value="purple">Elegant Purple</option>
                        </select>
                    </div>
                </div>

                <button className="mobile-menu-button" onClick={toggleMenu}>
                    <i className="fa-solid fa-bars"></i>
                </button>
            </div>
        </nav>
    );
};

export default Navbar; 