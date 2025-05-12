import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
    return (
        <div className="home">
            <section className="hero" style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('${process.env.PUBLIC_URL}/images/HotelImage2.jpg')` }}>
                <div className="hero-content">
                    <h1>Mamdouh El Sedawy</h1>
                    <h2>Hotels Director of Engineering</h2>
                    <p className="hero-subtitle">Over 33 years of experience in opening and maintaining five-star hotels internationally</p>
                    <div className="hero-buttons">
                        <Link to="/experience" className="btn primary">View Experience</Link>
                        <Link to="/contact" className="btn secondary">Contact Me</Link>
                    </div>
                </div>
            </section>

            <section className="highlights">
                <div className="highlight-card">
                    <h3>Expertise</h3>
                    <ul>
                        <li>Hotel Operations & Maintenance</li>
                        <li>Energy Management</li>
                        <li>Team Leadership</li>
                        <li>Project Management</li>
                    </ul>
                </div>

                <div className="highlight-card">
                    <h3>Key Achievements</h3>
                    <ul>
                        <li>Led complete renovation of IBIS Styles Dahab Lagoon</li>
                        <li>20% reduction in operating expenses</li>
                        <li>15% decrease in energy consumption</li>
                        <li>Zero balance in staff vacations</li>
                    </ul>
                </div>

                <div className="highlight-card">
                    <h3>Specializations</h3>
                    <ul>
                        <li>Pre-opening Activities</li>
                        <li>Renovation Projects</li>
                        <li>Energy-saving Initiatives</li>
                        <li>Staff Training & Development</li>
                    </ul>
                </div>
            </section>
        </div>
    );
};

export default Home; 