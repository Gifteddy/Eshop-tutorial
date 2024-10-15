import React from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import styles from "../../../styles/styles";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Import your local images
import bannerImage1 from './bannerImage1.jpg';
import bannerImage2 from './bannerImage2.jpg';
import bannerImage3 from './bannerImage3.jpg';

const Hero = () => {
  // Carousel settings
  const settings = {
    dots: true,         // Shows navigation dots
    infinite: true,     // Loop slides
    speed: 500,         // Transition speed
    slidesToShow: 1,    // Show one slide at a time
    slidesToScroll: 1,  // Scroll one slide at a time
    autoplay: true,     // Autoplay the slides
    autoplaySpeed: 3000 // 3 seconds per slide
  };

  return (
    <div className={`relative w-full ${styles.normalFlex}`}>
      {/* React Slick Carousel */}
      <Slider {...settings}>
        <div
          className={`relative min-h-[70vh] 800px:min-h-[80vh] w-full bg-no-repeat ${styles.noramlFlex}`}
          style={{
            backgroundImage: 'url(${bannerImage1})',  // Use the first image
            backgroundSize: 'cover'
          }}
        >
          
          <Link to="/">
          {/* Use the imported logo */}
          <img src={bannerImage1} alt="Logo" style={{position: 'absolute', zIndex: '-1', height: '100%', objectFit: 'cover', width: "100%"}} />
        </Link>
          
          <div className={`${styles.section} w-[90%] 800px:w-[60%]`} style={{marginTop: '150px'}}>
            <h1 className={`text-[35px] leading-[1.2] 800px:text-[60px] text-[blue] font-[700] capitalize`}>
              <p className="pt-5 text-[25px] font-[700] text-[green]">Welcome to </p>
              ARIARIA
              <p className=" text-[35px] text-[blue] font-[700]">MARKETPLACE</p>
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

        {/* Slide 2 */}
        <div
          className={`relative min-h-[70vh] 800px:min-h-[80vh] w-full bg-no-repeat ${styles.noramlFlex}`}
          style={{
            backgroundImage: `url(${bannerImage2})`,  // Use the second image
            backgroundSize: 'cover'
          }}
        >
                    <Link to="/">
          {/* Use the imported logo */}
          <img src={bannerImage2} alt="Logo" style={{position: 'absolute', zIndex: '-1', height: '100%', objectFit: 'cover', width: "100%"}} />
        </Link>
                    <div className={`${styles.section} w-[90%] 800px:w-[60%]`} style={{marginTop: '150px'}}>
            <h1 className={`text-[35px] leading-[1.2] 800px:text-[60px] text-[blue] font-[700] capitalize`}>
              <p className="pt-5 text-[25px] font-[700] text-[green]">Welcome to </p>
              ARIARIA
              <p className=" text-[35px] text-[blue] font-[700]">MARKETPLACE</p>
            </h1>
            <p className="pt-5 text-[16px] font-[Poppins] font-[400] text-[#000000ba]">
            Join thousands of vendors selling locally made products to the world.
            </p>
            <Link to="/products" className="inline-block">
              <div className={`${styles.button} mt-5`}>
                <span className="text-[#fff] font-[Poppins] text-[18px]">Discover Now</span>
              </div>
            </Link>
          </div>
        </div>

        {/* Slide 3 */}
        <div
          className={`relative min-h-[70vh] 800px:min-h-[80vh] w-full bg-no-repeat ${styles.noramlFlex}`}
          style={{
            backgroundImage: `url(${bannerImage3})`,  // Use the third image
            backgroundSize: 'cover'
          }}
        >
                    <Link to="/">
          {/* Use the imported logo */}
          <img src={bannerImage3} alt="Logo" style={{position: 'absolute', zIndex: '-1', height: '100%', objectFit: 'cover', width: "100%"}} />
        </Link>
                    <div className={`${styles.section} w-[90%] 800px:w-[60%]`} style={{marginTop: '150px'}}>
            <h1 className={`text-[35px] leading-[1.2] 800px:text-[60px] text-[blue] font-[700] capitalize`}>
              <p className="pt-5 text-[25px] font-[700] text-[green]">Welcome to </p>
              ARIARIA
              <p className=" text-[35px] text-[blue] font-[700]">MARKETPLACE</p>
            </h1>
            <p className="pt-5 text-[16px] font-[Poppins] font-[400] text-[#000000ba]">
              Own a shop in Ariaria from anywhere in the world today.
            </p>
            <Link to="/products" className="inline-block">
              <div className={`${styles.button} mt-5`}>
                <span className="text-[#fff] font-[Poppins] text-[18px]">Get Started!</span>
              </div>
            </Link>
          </div>
        </div>
      </Slider>
    </div>
  );
};

export default Hero;
