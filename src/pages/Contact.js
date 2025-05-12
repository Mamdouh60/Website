import React from 'react';
import './Contact.css';

const Contact = () => {
    const phoneNumber = "+201001601169";
    const whatsappNumber = "+201001601169";

    return (
        <div className="contact">
            <div className="contact-container">
                <div className="contact-header">
                    <h1>Contact Me</h1>
                    <p>Feel free to reach out through any of these channels</p>
                </div>

                <div className="contact-info">
                    <div className="contact-item">
                        <i className="fas fa-envelope"></i>
                        <span>mamdouhezz1960@gmail.com</span>
                    </div>
                    <div className="contact-item">
                        <i className="fas fa-phone"></i>
                        <a href={`tel:${phoneNumber}`} className="contact-link">
                            {phoneNumber}
                        </a>
                    </div>
                    <div className="contact-item">
                        <i className="fab fa-whatsapp"></i>
                        <a
                            href={`https://wa.me/${whatsappNumber}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="contact-link"
                        >
                            {phoneNumber}
                        </a>
                    </div>
                    <div className="contact-item">
                        <i className="fas fa-map-marker-alt"></i>
                        <span>Cairo, Egypt</span>
                    </div>
                </div>

                <div className="social-links">
                    <a
                        href="https://www.linkedin.com/in/mamdouh-ezz-elregal-elbayoumi-a02893133/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="social-link"
                        aria-label="LinkedIn Profile"
                    >
                        <i className="fab fa-linkedin-in"></i>
                    </a>
                    <a
                        href="mailto:mamdouhezz1960@gmail.com"
                        className="social-link"
                        aria-label="Send Email"
                    >
                        <i className="fas fa-envelope"></i>
                    </a>
                    <a
                        href={`https://wa.me/${whatsappNumber}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="social-link"
                        aria-label="WhatsApp"
                    >
                        <i className="fab fa-whatsapp"></i>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Contact; 