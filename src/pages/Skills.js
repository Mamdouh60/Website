import React from 'react';
import './Skills.css';

const Skills = () => {
    const skills = {
        technical: [
            "Hotel Operations & Maintenance",
            "Energy Management Systems",
            "Waste-water & R.O. Systems",
            "Fire Safety Systems",
            "Preventive Maintenance",
            "FF&E Management",
            "Capital Investment Planning",
            "Handovers & Openings",
            "Renovations",
            "Energy-saving Plans",
            "Yearly Budget Planning"
        ],
        management: [
            "Team Leadership",
            "Budget Management",
            "Project Management",
            "Staff Training & Development",
            "Resource Allocation",
            "Strategic Planning",
            "Quality Control",
            "Team Building",
            "Delegating and Motivating People",
            "Mentoring"
        ],
        software: [
            "Microsoft Excel",
            "Microsoft Word",
            "Microsoft PowerPoint",
            "Microsoft Outlook",
            "Internet & Email",
            "Project Management Software"
        ]
    };

    const certifications = [
        {
            title: "Train the Trainer",
            issuer: "Mercure Luxor",
            year: "2010"
        },
        {
            title: "Fire Alarm & Firefighting",
            issuer: "Professional Certification",
            year: "2012"
        },
        {
            title: "Hotel Industrial Health and Safety",
            issuer: "Sofitel Winter Palace",
            year: "2013"
        },
        {
            title: "Sustainable Development",
            issuer: "Sofitel Karnak",
            year: "2014"
        },
        {
            title: "Communication Skills",
            issuer: "Mercure Alexandria Romance",
            year: "2015"
        },
        {
            title: "Team Building & Basic Supervisory Skills",
            issuer: "Professional Certification",
            year: "N/A"
        },
        {
            title: "We are Partner",
            issuer: "Mercure Luxor",
            year: "N/A"
        },
        {
            title: "Policy and Procedure",
            issuer: "Professional Certification",
            year: "N/A"
        },
        {
            title: "Keys to Professional Services for Managers",
            issuer: "Sofitel Hurghada",
            year: "N/A"
        },
        {
            title: "Managers, Tools, and Practices",
            issuer: "Sofitel Hurghada",
            year: "N/A"
        }
    ];

    const education = {
        degree: "Bachelor of Engineering – Mechanical Department",
        university: "El Menoufia University, Egypt",
        period: "08/1979 – 08/1984"
    };

    const achievements = [
        "Successfully led the complete renovation of IBIS Styles Dahab Lagoon (5-star hotel) from 2012-2014",
        "Oversaw partial renovation for Novotel Cairo Airport (5-star hotel, June 2015)",
        "Executed a comprehensive cost-saving initiative resulting in 20% reduction in operating expenses",
        "Achieved 15% decrease in energy consumption within 6 months",
        "Maintained zero balances in staff vacations through efficient management"
    ];

    return (
        <div className="skills">
            <div className="skills-header">
                <h1>Professional Skills & Education</h1>
                <p>Comprehensive expertise in hotel engineering and management</p>
            </div>

            <div className="education-section">
                <h2>Education</h2>
                <div className="education-card">
                    <h3>{education.degree}</h3>
                    <p className="university">{education.university}</p>
                    <p className="period">{education.period}</p>
                </div>
            </div>

            <div className="skills-grid">
                <div className="skills-section">
                    <h2>Technical Expertise</h2>
                    <div className="skills-list">
                        {skills.technical.map((skill, index) => (
                            <div className="skill-item" key={index}>
                                <span className="skill-icon">⚡</span>
                                <span>{skill}</span>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="skills-section">
                    <h2>Management Skills</h2>
                    <div className="skills-list">
                        {skills.management.map((skill, index) => (
                            <div className="skill-item" key={index}>
                                <span className="skill-icon">🎯</span>
                                <span>{skill}</span>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="skills-section">
                    <h2>Software Proficiency</h2>
                    <div className="skills-list">
                        {skills.software.map((skill, index) => (
                            <div className="skill-item" key={index}>
                                <span className="skill-icon">💻</span>
                                <span>{skill}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <div className="achievements-section">
                <h2>Key Achievements</h2>
                <div className="achievements-list">
                    {achievements.map((achievement, index) => (
                        <div className="achievement-item" key={index}>
                            <span className="achievement-icon">🏆</span>
                            <span>{achievement}</span>
                        </div>
                    ))}
                </div>
            </div>

            <div className="certifications-section">
                <h2>Professional Certifications</h2>
                <div className="certifications-grid">
                    {certifications.map((cert, index) => (
                        <div className="certification-card" key={index}>
                            <h3>{cert.title}</h3>
                            <p className="issuer">{cert.issuer}</p>
                            <p className="year">{cert.year}</p>
                        </div>
                    ))}
                </div>
            </div>

            <div className="languages-section">
                <h2>Languages</h2>
                <div className="languages-grid">
                    <div className="language-card">
                        <h3>Arabic</h3>
                        <p>Native proficiency</p>
                    </div>
                    <div className="language-card">
                        <h3>English</h3>
                        <p>Full professional proficiency</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Skills; 