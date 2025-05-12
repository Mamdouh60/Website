import React from 'react';
import './CertificatesGallery.css';

const CertificatesGallery = () => {
    const certificates = [
        {
            name: "Certificate 1",
            path: "../images/Certificates/image2.jpeg   "
        },
        {
            name: "Certificate 2",
            path: "../images/Certificates/image3.jpeg"
        },
        {
            name: "Certificate 3",
            path: "../images/Certificates/image4.jpeg"
        },
        {
            name: "Certificate 4",
            path: "../images/Certificates/image5.jpeg"
        },
        {
            name: "Certificate 5",
            path: "../images/Certificates/image6.jpeg"
        },
        {
            name: "Certificate 6",
            path: "../images/Certificates/image7.jpeg"
        },
        {
            name: "Certificate 7",
            path: "../images/Certificates/image8.jpeg"
        },
        {
            name: "Certificate 8",
            path: "../images/Certificates/image9.jpeg"
        },
        {
            name: "Certificate 9",
            path: "../images/Certificates/image10.jpeg"
        },
        {
            name: "Certificate 10",
            path: "../images/Certificates/image11.jpeg"
        },
        {
            name: "Certificate 11",
            path: "../images/Certificates/image12.jpeg"
        },
        {
            name: "Certificate 12",
            path: "../images/Certificates/image13.jpeg"
        },
        {
            name: "Certificate 13",
            path: "../images/Certificates/image14.jpeg"
        },
        {
            name: "Certificate 14",
            path: "../images/Certificates/image15.jpeg"
        },
        {
            name: "Certificate 15",
            path: "../images/Certificates/image16.jpeg"
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
                            <img src={cert.path} alt={cert.name} />
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