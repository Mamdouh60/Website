import React from 'react';
import { Link } from 'react-router-dom';
import './Certificates.css';

const Certificates = () => {
    const certificates = [
        {
            title: "Certified Hotel Administrator (CHA)",
            issuer: "American Hotel & Lodging Educational Institute",
            year: "2010",
            description: "Professional certification in hotel administration and management"
        },
        {
            title: "Certified Engineering Operations Executive (CEOE)",
            issuer: "Hospitality Financial and Technology Professionals",
            year: "2012",
            description: "Advanced certification in hotel engineering operations and management"
        },
        {
            title: "Energy Management Professional",
            issuer: "Association of Energy Engineers",
            year: "2015",
            description: "Certification in energy management and conservation for hospitality facilities"
        },
        {
            title: "Certified Facility Manager (CFM)",
            issuer: "International Facility Management Association",
            year: "2018",
            description: "Professional certification in facility management and maintenance"
        },
        {
            title: "LEED Green Associate",
            issuer: "U.S. Green Building Council",
            year: "2020",
            description: "Certification in sustainable building practices and green building operations"
        }
    ];

    return (
        <div className="certificates">
            <div className="certificates-container">
                <div className="certificates-header">
                    <h1>Professional Certifications</h1>
                    <p>Recognized credentials demonstrating expertise in hotel engineering and management</p>
                </div>

                <div className="certificates-grid">
                    {certificates.map((cert, index) => (
                        <div key={index} className="certificate-card">
                            <div className="certificate-info">
                                <h3>{cert.title}</h3>
                                <p className="issuer">{cert.issuer}</p>
                                <p className="year">{cert.year}</p>
                                <p className="description">{cert.description}</p>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="view-certificates-button">
                    <Link to="/certificates-gallery" className="btn primary">
                        View All Certificates
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Certificates; 