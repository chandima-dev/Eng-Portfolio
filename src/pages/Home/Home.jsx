import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import styles from './Home.module.css'; // Import as a module

const Slideshow = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  // Update paths as your images are located in the public folder
  const images = [
    "/images/img1.jpeg",
    "/images/img2.jpeg",
    "/images/img3.jpeg" // Update or add paths as needed
  ];

  return (
    <div className={styles.slideshow}>
      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index} className={styles.slide}>
            <img src={image} alt={`Slide ${index + 1}`} />
            <div className={styles.textOverlay}>
              <h2>Committed to superior quality, services, and products.</h2>
              <p>Experts in Structural Designing – Unleashing Innovation, Expertise, and Unmatched Efficiency.</p>
              <button className={styles.discoverMore}>Discover More →</button>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Slideshow;
