import { useState } from 'react';
import styles from './Header.module.css';
import { FaFacebook, FaLinkedin, FaPhone, FaEnvelope, FaClock, FaBars, FaTimes } from 'react-icons/fa';
import { Link } from 'react-router-dom';

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
            <li><Link to="/">Home</Link></li> {/* Update this to your actual route */}
            <li><Link to="/about">About Us</Link></li> {/* Update this if you have an About Us page */}
            <li><Link to="/projects">Projects</Link></li> {/* Update this if you have a Projects page */}
            <li><Link to="/contactus">Contact Us</Link></li>
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
