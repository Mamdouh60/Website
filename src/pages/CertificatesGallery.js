import React from 'react';
import './CertificatesGallery.css';

// Import images with JPEG format for better performance
import image2 from '../assets/images/certificates/image2.jpeg';
import image3 from '../assets/images/certificates/image3.jpeg';
import image4 from '../assets/images/certificates/image4.jpeg';
import image5 from '../assets/images/certificates/image5.jpeg';
import image6 from '../assets/images/certificates/image6.jpeg';
import image7 from '../assets/images/certificates/image7.jpeg';
import image8 from '../assets/images/certificates/image8.jpeg';
import image9 from '../assets/images/certificates/image9.jpeg';
import image10 from '../assets/images/certificates/image10.jpeg';
import image11 from '../assets/images/certificates/image11.jpeg';
import image12 from '../assets/images/certificates/image12.jpeg';
import image13 from '../assets/images/certificates/image13.jpeg';
import image14 from '../assets/images/certificates/image14.jpeg';
import image15 from '../assets/images/certificates/image15.jpeg';
import image16 from '../assets/images/certificates/image16.jpeg';

const CertificatesGallery = () => {
    const certificates = [
        {
            name: "Certificate 1",
            path: `${process.env.PUBLIC_URL}/images/Certificates/image2.jpeg`
        },
        {
            name: "Certificate 2",
            path: `${process.env.PUBLIC_URL}/images/Certificates/image3.jpeg`
        },
        {
            name: "Certificate 3",
            path: `${process.env.PUBLIC_URL}/images/Certificates/image4.jpeg`
        },
        {
            name: "Certificate 4",
            path: `${process.env.PUBLIC_URL}/images/Certificates/image5.jpeg`
        },
        {
            name: "Certificate 5",
            path: `${process.env.PUBLIC_URL}/images/Certificates/image6.jpeg`
        },
        {
            name: "Certificate 6",
            path: `${process.env.PUBLIC_URL}/images/Certificates/image7.jpeg`
        },
        {
            name: "Certificate 7",
            path: `${process.env.PUBLIC_URL}/images/Certificates/image8.jpeg`
        },
        {
            name: "Certificate 8",
            path: `${process.env.PUBLIC_URL}/images/Certificates/image9.jpeg`
        },
        {
            name: "Certificate 9",
            path: `${process.env.PUBLIC_URL}/images/Certificates/image10.jpeg`
        },
        {
            name: "Certificate 10",
            path: `${process.env.PUBLIC_URL}/images/Certificates/image11.jpeg`
        },
        {
            name: "Certificate 11",
            path: `${process.env.PUBLIC_URL}/images/Certificates/image12.jpeg`
        },
        {
            name: "Certificate 12",
            path: `${process.env.PUBLIC_URL}/images/Certificates/image13.jpeg`
        },
        {
            name: "Certificate 13",
            path: `${process.env.PUBLIC_URL}/images/Certificates/image14.jpeg`
        },
        {
            name: "Certificate 14",
            path: `${process.env.PUBLIC_URL}/images/Certificates/image15.jpeg`
        },
        {
            name: "Certificate 15",
            path: `${process.env.PUBLIC_URL}/images/Certificates/image16.jpeg`
        }
    ];

    const handleDownload = (path, name) => {
        const link = document.createElement('a');
        link.href = path;
        link.download = name;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        <div className="certificates-gallery">
            <div className="gallery-container">
                <div className="gallery-header">
                    <h1>Certificate Gallery</h1>
                    <p>Click on any certificate to download</p>
                </div>

                <div className="gallery-grid">
                    {certificates.map((cert, index) => (
                        <div
                            key={index}
                            className="gallery-item"
                            onClick={() => handleDownload(cert.path, cert.name)}
                        >
                            <img
                                src={cert.path}
                                alt={cert.name}
                                loading="lazy"
                                width="300"
                                height="200"
                            />
                            <div className="gallery-item-overlay">
                                <span>Click to Download</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default CertificatesGallery; 