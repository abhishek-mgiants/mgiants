import React, { useState } from 'react';
import './DigitalMarketing.css';

const DigitalMarketing = () => {
  const [showModal, setShowModal] = useState(false);
  const [bannerContent, setBannerContent] = useState([]);

  const handleItemClick = (content) => {
    setBannerContent(content);
    setShowModal(true);
  };

  const handleModalClose = () => {
    setShowModal(false);
  };

  return (
    <>
      <div className="digital-container">
        <div className="digital-content-container">
          <div className="heading">
            <p>Digital Marketing</p>
          </div>
          <div
            className="digital-items"
            onClick={() => handleItemClick([
              { id: 1, title: 'SEO', description: 'Search Engine Optimization' },
              { id: 2, title: 'Content Marketing', description: 'Creating and distributing valuable content' },
              // Add more objects as needed
            ])}
          >
            SEO
          </div>
          <div
            className="digital-items"
            onClick={() => handleItemClick([
              { id: 1, title: 'Social Media Marketing', description: 'Promoting products and services on social media platforms' },
              { id: 2, title: 'Email Marketing', description: 'Sending targeted emails to a specific audience' },
              // Add more objects as needed
            ])}
          >
            Social Media and Email Marketing
          </div>
          <div
            className="digital-items"
            onClick={() => handleItemClick([
              { id: 1, title: 'Pay-per-Click Advertising', description: 'Paying for ads based on clicks received' },
              { id: 2, title: 'Display Advertising', description: 'Promoting products or services through visual ads' },
              // Add more objects as needed
            ])} 
          >
            Paid Marketing
          </div>
        </div>
      </div>

      {showModal && (
        <div className="modal-backdrop" onClick={handleModalClose}>
          <div className="modal">
            <div className="modal-content">
              <ul>
                {bannerContent.map((item) => (
                  <li key={item.id}>
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                  </li>
                ))}
              </ul>
              {/* <button className="collapse-button" onClick={handleModalClose}>
                Back
              </button> */}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default DigitalMarketing;
