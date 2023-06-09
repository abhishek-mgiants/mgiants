import React, { useState } from 'react';
import { motion } from 'framer-motion';
import './Services2.css';

const Services2 = () => {
  const servicesData = [
    { name: 'Digital Marketing', imgPath: 'src/assets/digitalicon.png', id: 1, path: '/digitalmarketing' },
    { name: 'Graphic Design', imgPath: 'src/assets/graphicicon.png', id: 2, path: '/graphicdesign' },
    { name: 'Web Development', imgPath: 'src/assets/webicon.png', id: 3, path: '/webdevelopment' },
    { name: 'App Development', imgPath: 'src/assets/appicon.png', id: 4, path: '/appdevelopment' },
    { name: 'Branding', imgPath: 'src/assets/brandicon.png', id: 5, path: '/branding' }
  ];

  const initialIdArray = servicesData.map((image) => image.id);
  const [idArray, setIdArray] = useState(initialIdArray);

  const handleImageClick = (clickedId) => {
    const clickedIndex = idArray.indexOf(clickedId);
    if (clickedIndex !== -1) {
      const updatedIdArray = [...idArray];
      [updatedIdArray[0], updatedIdArray[clickedIndex]] = [updatedIdArray[clickedIndex], updatedIdArray[0]];
      setIdArray(updatedIdArray);
    }
  };

  const topId = idArray[0];
  const topImage = servicesData.find((image) => image.id === topId);
  const otherImages = idArray.slice(1).map((id) => servicesData.find((image) => image.id === id));

  const handleMainImageClick = () => {
    // Perform navigation when the main image is clicked
    // using the selectedImage's path
    const selectedImage = servicesData.find((image) => image.id === topId);
    if (selectedImage) {
      window.location.href = selectedImage.path;
    }
  };

  return (
    <div className="services-container">
      <div className="main-service-container">
        <motion.div
          className="main-service-img"
          initial={{ x: '100%' }}
          animate={{ x: 0 }}
          exit={{ x: '-100%' }}
          transition={{ duration: 0.5 }}
          whileTap={{ scale: 0.9 }}
          onClick={handleMainImageClick}
        >
          <motion.img
            className="service-img"
            key={topImage.id}
            src={topImage.imgPath}
            alt={topImage.name}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2 }}
          />
        </motion.div>
        <div className="main-service-description">
          <p className="image-name">{topImage.name.toUpperCase()}</p>
        </div>
      </div>
      <div className="services-items-container">
        {otherImages.map((image) => (
          <motion.div
            className="image"
            key={image.id}
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '-100%' }}
            transition={{ duration: 0.5 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => handleImageClick(image.id)}
          >
            <motion.img
              className="services-items"
              key={image.id}
              src={image.imgPath}
              alt={image.name}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            />
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Services2;
