import styles from '../navbar/Navbar.module.css'
import { useState, useEffect, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram, faFacebook, faLinkedin, faWhatsappSquare } from '@fortawesome/free-brands-svg-icons';
import { faAngleDown, faAngleUp } from '@fortawesome/free-solid-svg-icons';
const Navbar = () => {
  const [isHovered, setIsHovered] = useState(false);
  const dropdownRef = useRef(null);
  const menuRef = useRef(null);
  const timeoutRef = useRef(null);
  const [arrowIcon,setArrowIcon] = useState(true)
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

  const handleContactClick = () => {
    const dropdown = document.getElementById("ContactMenu");
    dropdown.style.display = dropdown.style.display === "flex" ? "none" : "flex";
    setArrowIcon((arrowIcon?false:true));
  }

  useEffect(() => {
    return () => clearTimeout(timeoutRef.current); // Cleanup on unmount
  }, []);

  return (
    <div>
      <div className={styles['navbar-container']}>

        <div className={styles['navbar-logo']}>
          <a href="/">
            <img className={styles['logo-img']} src="src/assets/Logo/Main-logo.svg" alt="logo" />
          </a>
        </div>

        <div className={styles['navbar-items-container']}>

            <a className={styles['navbar-item']} href="about-us">About Us</a>
            <a className={styles['navbar-item']} ref={dropdownRef} onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave} href="#">Services</a>
            <a className={styles['navbar-item']} href="portfolio">Portfolio</a>
            <a className={styles['navbar-item']} href="blog">Blog</a>
            <div className={styles['navbar-item']} onClick={handleContactClick}>Contact Us {arrowIcon?<FontAwesomeIcon icon={faAngleDown} />:<FontAwesomeIcon icon={faAngleUp} />}
              <div className={styles['contact-us-dropdown']} id='ContactMenu'>
                <a href="">Partner</a>
                <a href="">Work with us</a>
                <a href="">4C Connect</a>
              </div>
            </div>
        </div>

      <div className={styles['social-links']}>
        <a href='/' className={styles['social-link']}><FontAwesomeIcon icon={faInstagram} style={{color:'#FF0000'}}/></a>
        <a href='/' className={styles['social-link']}><FontAwesomeIcon icon={faLinkedin} style={{color:'#FF0000'}}/></a>
        <a href='/' className={styles['social-link']}><FontAwesomeIcon icon={faWhatsappSquare} style={{color:'#FF0000'}}/></a>
        <a href='/' className={styles['social-link']}><FontAwesomeIcon icon={faFacebook} style={{color:'#FF0000'}}/></a>
      </div>

      </div>
      
    
      <div ref={menuRef}
        className={`${styles.dropdownMenu} ${isHovered ? styles.show : ''}`}
        onMouseLeave={handleMenuLeave}>
          <h1>Services</h1>
        <div className={styles.ServiesContainer}>

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
      
    </div>
  )
}

export default Navbar
