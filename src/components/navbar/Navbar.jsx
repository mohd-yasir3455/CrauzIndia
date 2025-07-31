import styles from '../navbar/Navbar.module.css'
import { useState, useEffect, useRef } from 'react';
const Navbar = () => {
  const [isHovered, setIsHovered] = useState(false);
  const dropdownRef = useRef(null);
  const menuRef = useRef(null);
  const timeoutRef = useRef(null);

  const handleMouseEnter = () => {
    clearTimeout(timeoutRef.current);
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      if(!menuRef.current.matches(':hover')) {
        setIsHovered(false);
      }
    }, 200);
  };

  const handleMenuLeave = () => {
    setIsHovered(false);
  };

  useEffect(() => {
    return () => clearTimeout(timeoutRef.current); // Cleanup on unmount
  }, []);

  return (
    <div>
      <div className={styles['navbar-container']}>

        <div className={styles['navbar-logo']}>
          <a href="/">
            <img className={styles['logo-img']} src="src/assets/Logo/Main_logo.svg" alt="logo" />
          </a>
          <h1>Crauz India</h1>
        </div>

        <div className={styles['navbar-items-container']}>
            <a className={styles['navbar-item']} href="contact-us">Contact Us</a>
            <a className={styles['navbar-item']} href="about-us">About Us</a>
            <a className={styles['navbar-item']} href="portfolio">Portfolio</a>
            <a className={styles['navbar-item']} href="blog">Blog</a>
            <a className={styles['navbar-item']} ref={dropdownRef} onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave} href="#">Services</a>
        </div>
      
      </div>

      <div ref={menuRef}
        className={`${styles.dropdownMenu} ${isHovered ? styles.show : ''}`}
        onMouseLeave={handleMenuLeave}>

        <div className={styles['services']}>
            <a href="">Service</a>
            <a href="">Service</a>
            <a href="">Service</a>
            <a href="">Service</a>
        </div>

        <div className={styles['services']}>
            <a href="">Service</a>
            <a href="">Service</a>
            <a href="">Service</a>
            <a href="">Service</a>
        </div>

        <div className={styles['services']}>
            <a href="">Service</a>
            <a href="">Service</a>
            <a href="">Service</a>
            <a href="">Service</a>
        </div>
      </div>

    </div>
  )
}

export default Navbar
