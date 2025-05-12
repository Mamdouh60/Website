import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="footer-info">
                    <h3>Mamdouh El Sedawy</h3>
                    <p>Hotels Director of Engineering</p>
                </div>
                <div className="footer-contact">
                    <p>Email: mamdouhezz@yahoo.com</p>
                    <p>Phone: +201001601169</p>
                    <p>Location: Alexandria, Egypt</p>
                </div>
                <div className="footer-copyright">
                    <p>&copy; {new Date().getFullYear()} Mamdouh El Sedawy. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer; 