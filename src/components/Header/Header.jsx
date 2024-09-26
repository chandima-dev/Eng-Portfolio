import { useState } from 'react';
import styles from './Header.module.css';
import { FaFacebook, FaLinkedin, FaPhone, FaEnvelope, FaClock, FaBars, FaTimes } from 'react-icons/fa';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <div className={styles.topBar}>
        <div className={styles.contactInfo}>
          <span><FaPhone /> (+94) 70 590 1816</span>
          <span><FaEnvelope /> info@chalk.com</span>
          <span><FaClock /> Mon - Fri: 8:00 - 17:30</span>
        </div>
      </div>
      <header className={styles.header}>
        <div className={styles.logo}>
          <span>Falcon Engineering</span>
        </div>
        <div className={styles.menuToggle} onClick={toggleMenu}>
          {isOpen ? (
            <div className={styles.closeButton}>
              <FaTimes />
            </div>
          ) : (
            <div className={styles.openButton}>
              <FaBars />
            </div>
          )}
        </div>
        <div className={`${styles.navbar} ${isOpen ? styles.navOpen : ''}`}>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About Us</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="/contactus">Contact Us</a></li>
          </ul>
        </div>
        <div className={styles.socialMedia}>
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><FaFacebook /></a>
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
        </div>
      </header>
    </div>
  );
};

export default Header;
