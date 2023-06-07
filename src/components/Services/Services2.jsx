import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Services2.css';
import { motion } from 'framer-motion';

const Services2 = () => {
    const navigate = useNavigate();
  const servicesData = [
    {name:'Digital Marketing',imgPath:'src/assets/digitalicon.png',id:1,path:"/digitalmarketing"},
    { name: 'Graphic Design', imgPath: 'src/assets/graphicicon.png', id: 2,path:"/graphicdesign" },
    { name: 'Web Development', imgPath: 'src/assets/webicon.png', id: 3,path:"/webdevelopment" },
    { name: 'App Development', imgPath: 'src/assets/appicon.png', id: 4,path:"/appdevelopment" },
    { name: 'Branding', imgPath: 'src/assets/brandicon.png', id: 5,path:"/branding" }
  ];

  const [selectedImage, setSelectedImage] = useState(servicesData[0]);

  const handleImageClick = (clickedImage) => {
    setSelectedImage(clickedImage);

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
          onClick={() => { handleImageClick(servicesData[0]);
           navigate(selectedImage.path);
        }
        }
        >
          <motion.img
            className="service-img"
            key={selectedImage.id}
            src={selectedImage.imgPath}
            alt={selectedImage.name}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2 }}
            
          />
        </motion.div>
        <div className="main-service-description">
             <p className='image-name'>{selectedImage.name.toUpperCase()}</p>
        </div>
      </div>
      <div className="services-items-container">
        {servicesData.slice(1, 6).map((image) => (
          <motion.div
            className="image"
            key={image.id}
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '-100%' }}
            transition={{ duration: 0.5 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => handleImageClick(image)}
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
