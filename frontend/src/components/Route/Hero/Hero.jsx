import React from "react";
import { Link } from "react-router-dom";
import styles from "../../../styles/styles";

// Import your local image
import bannerImage1 from './bannerImage1.jpg';

const Hero = () => {
  return (
    <div className={`relative w-full ${styles.normalFlex}`}>
      <div
        className={`relative min-h-[70vh] 800px:min-h-[80vh] w-full bg-no-repeat ${styles.normalFlex}`}
        style={{
          backgroundImage: `url(${bannerImage1})`,  // Use the first image
          backgroundSize: 'cover',
        }}
      >
        <Link to="/">
          <img 
            src={bannerImage1} 
            alt="Banner" 
            style={{ 
              position: 'absolute', 
              top: '-50px',
              zIndex: '-1', 
              height: '100%', 
              objectFit: 'cover', 
              width: "100%" 
            }} 
          />
        </Link>

        <div className={`${styles.section} w-[90%] 800px:w-[60%]`} style={{ marginTop: '150px' }}>
          <h1 className={`text-[35px] leading-[1.2] 800px:text-[60px] text-[blue] font-[700] capitalize`}>
            <p className="pt-5 text-[25px] font-[700] text-[green]">Welcome to</p>
            ARIARIA
            <p className="text-[35px] text-[blue] font-[700]">MARKETPLACE</p>
          </h1>
          <p className="pt-5 text-[16px] font-[Poppins] font-[400] text-[#000000ba]">
            Create your store today and sell to a global audience.
          </p>
          <Link to="/products" className="inline-block">
            <div className={`${styles.button} mt-5`}>
              <span className="text-[#fff] font-[Poppins] text-[18px]">Shop Now!</span>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
