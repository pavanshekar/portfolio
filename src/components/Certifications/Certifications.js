import React from 'react';
import './Certifications.css';
import { useGetCertificationsQuery } from '../../API/api';

const Certifications = () => {
    const { data: certifications, isFetching } = useGetCertificationsQuery();

    if (isFetching) return "Loading...";

    return (
        <div className="certificates-section" id="certifications">
            <div className="certificates-title">
                <h2>My Certifications and Achievements</h2>
                <h3>Certifications</h3>
            </div>
            <div className="certificates-row">
                {certifications?.length && certifications.map((certificate) => (
                    <div className="certificate" key={certificate.id}>
                        <div className="certificate-img">
                            <a href={certificate.link} target="_blank" rel="noreferrer">
                                <img src={certificate.image} alt={certificate.title} className="cert-img" />
                            </a>
                        </div>
                        <div className="cert-details">
                            <h2>{certificate.title}</h2>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Certifications;
