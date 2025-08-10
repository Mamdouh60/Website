import React from 'react';
import './Experience.css';

const Experience = () => {
    const experiences = [
        {
            title: "Director of Engineering",
            company: "Tolip Resort El Galala Majestic 5*",
            location: "El-Sokhna (Tolip Group)",
            period: "06/2020 – 03/2022",
            details: [
                "487 units: 293 main building + 26 villa + 144 chalets + 24 studios",
                "Directed pre-opening activities for a 487-unit luxury resort",
                "Managed 3 restaurants, 3 swimming pools, R.O & sewage plant room"
            ]
        },
        {
            title: "Director of Engineering",
            company: "Ibis Styles Dahab Lagoon 4*",
            location: "Accor Hotels Sinai for diving hotels (Owner) Dahab",
            period: "11/2017 – 04/2020",
            details: [
                "139 rooms, 4 outlets, 3 restaurants",
                "Managed sewage plant room & 70000 square meter landscape",
                "Oversaw renovation and facility operations"
            ]
        },
        {
            title: "Chief Engineer",
            company: "Hilton Meccah Convention hotel 5*",
            location: "Meccah",
            period: "10/2016 – 10/2017",
            details: [
                "Led the handover and soft opening of an 820-room luxury hotel",
                "Ensured smooth engineering operations"
            ]
        },
        {
            title: "Chief Engineer",
            company: "Ibis Styles Dahab Lagoon 4*",
            location: "Accor Hotels Sinai for diving hotels (Owner) Dahab",
            period: "09/2015 – 09/2016",
            details: [
                "139 rooms, 4 Outlets, 70000 square meter landscape",
                "Pre-opening phase, 3 Restaurants, R.O & sewage plant room"
            ]
        },
        {
            title: "Chief Engineer",
            company: "Novotel Cairo airport 4*",
            location: "Accor Hotels - Cairo airport Task force",
            period: "06/2015 – 08/2015",
            details: [
                "298 rooms plus 15 suits",
                "Total area = 20000 Square meter includes the green area",
                "Partially renovation for the fire alarm system"
            ]
        },
        {
            title: "Chief Engineer",
            company: "Novotel Dahab Lagoon 4*",
            location: "Sinai for diving hotels (owner) Dahab",
            period: "04/2012 – 05/2015",
            details: [
                "139 rooms, 4 Outlets, 70000 square meter landscape",
                "Pre-opening phase, 3 Restaurants, R.O & sewage plant room"
            ]
        },
        {
            title: "Chief Engineer",
            company: "Mercure Alexandria Romance 4*",
            location: "Accor hotels [Miser tourism (Owner)]",
            period: "09/2010 – 04/2012",
            details: [
                "81 rooms (Accor Hotels)",
                "Partially renovation for the rooms, kitchen"
            ]
        },
        {
            title: "Chief Engineer",
            company: "Sofitel Hurghada 4*",
            location: "Accor hotels [Hurghada Abu Dhabi Company (Owner)]",
            period: "08/2008 – 08/2010",
            details: [
                "312 rooms- R.O, Sewage plant rooms",
                "Renovation, day to day operation, FF&E, Budget"
            ]
        },
        {
            title: "Chief Engineer",
            company: "Sofitel El-Karnak 4*",
            location: "Accor hotels [Luxor Abu Dhabi Company (Owner)]",
            period: "08/2003 – 07/2008",
            details: [
                "351 rooms – 4 outlets",
                "Hand Over & Soft Opening"
            ]
        },
        {
            title: "Chief Engineer",
            company: "Mercure Coralia Luxor & Mercure Inn Luxor",
            location: "Pullman Luxor Miser tourism (Owner)",
            period: "09/1999 – 07/2003",
            details: [
                "314 rooms / 4 outlets (Mercure Coralia)",
                "89 Rooms / 2 outlets (Mercure Inn)",
                "Renovation, Budget, FF&E, Day to day operation"
            ]
        },
        {
            title: "Chief Engineer",
            company: "Mercure Inn Safaga",
            location: "Sameer Zekry Owner Accor company",
            period: "08/1998 – 08/1999",
            details: [
                "90 Rooms / One outlet",
                "Handover & soft opening"
            ]
        },
        {
            title: "Assistant Chief Engineer",
            company: "Sofitel Winter Palace Luxor",
            location: "Egoth",
            period: "07/1994 – 07/1998",
            details: [
                "356 rooms + 6 restaurants + 6 bars + 1 conference room + 1 swimming pools + 4 Kitchens"
            ]
        },
        {
            title: "Maintenance Engineer",
            company: "Mercure(Etap) in Luxor",
            location: "Miser tourism",
            period: "11/1989 – 06/1994",
            details: [
                "314 rooms / 4 outlets"
            ]
        },
        {
            title: "Maintenance Engineer",
            company: "Cables of Arab company",
            location: "El Sewedy factory at 10th of Ramadan city",
            period: "01/1987 – 10/1989",
            details: [
                "Hydraulic system, Pneumatic system and different machine models"
            ]
        }
    ];

    return (
        <div className="experience">
            <div className="experience-header">
                <h1>Professional Experience</h1>
                <p>Over 33 years of experience in the hospitality industry</p>
            </div>

            <div className="timeline">
                {experiences.map((exp, index) => (
                    <div className="timeline-item" key={index}>
                        <div className="timeline-content">
                            <div className="timeline-header">
                                <h2>{exp.title}</h2>
                                <span className="period">{exp.period}</span>
                            </div>
                            <h3>{exp.company}</h3>
                            <p className="location">{exp.location}</p>
                            <ul className="details">
                                {exp.details.map((detail, i) => (
                                    <li key={i}>{detail}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                ))}
            </div>

            <div className="experience-footer">
                <p>For a complete list of experience, please download my full CV</p>
                <a href={`${process.env.PUBLIC_URL}/cv.pdf`} className="download-btn" download>
                    Download Full CV
                </a>
            </div>
        </div>
    );
};

export default Experience; 