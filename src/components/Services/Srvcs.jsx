import { useState } from 'react';
import './Srvcs.css'
import { motion } from 'framer-motion';
const Srvcs = () => {
  const [isAnimating, setIsAnimating]= useState(false);
  return (
    <div className="service-container">
      <div className="inner-container"  >
        <motion.div className="items" id='box1'
            animate={{
              
              rotate:isAnimating?360:0

            }}
            intial={{
              opacity:0.1
            }}
            transition={{
              type: "spring",
              stiffness: 50,
              
            }}
            onClick={()=>{
              setIsAnimating(!isAnimating)
            }}

        >

        <a href="/digitalmarketing" >
          <img src="src/assets/digitalicon.png" alt=""   />
        </a>
        </motion.div>
        <motion.div className="items"
        animate={{  
          rotate:isAnimating?360:0
        }}
        intial={{
          opacity:0.1
        }}
        transition={{
          type: "spring",
          stiffness: 50,
        }}
        onClick={()=>{
          setIsAnimating(!isAnimating)
        }}
        >
        <a href="/webdevelopment" >
          <img src="src/assets/webicon.png" alt=""   />
        </a>
        </motion.div>
        <div className="items">
        <a href="/graphicdesign" >
          <img src="src/assets/graphicicon.png" alt=""   />
        </a>
        </div>
        <div className="items">
        <a href="/appdevelopment" >
          <img src="src/assets/appicon.png" alt=""   />
        </a>
        </div>
        <div className="items">
        <a href="/branding" >
          <img src="src/assets/brandicon.png" alt=""   />
        </a>
        </div>
      </div>
      
    </div>
  )
}

export default Srvcs
