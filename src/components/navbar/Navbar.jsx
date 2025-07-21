import styles from '../navbar/Navbar.module.css'
const Navbar = () => {
  return (
    <div className={styles['navbar-container']}>

      <div navbar-logo>
        <a className={styles['logo-link']} href="">Crauz India</a>
      </div>

      <div className="navbar-items-container">
          <a className={`${styles['navbar-item']} ${styles['navbar-contact']}`} href="contact-us">Contact Us</a>
          <a className={`${styles['navbar-item']} ${styles['navbar-about']}`} href="about-us">About Us</a>
          <a className={`${styles['navbar-item']} ${styles['navbar-portfolio']}`} href="portfolio">Portfolio</a>
          <a className={`${styles['navbar-item']} ${styles['navbar-blog']}`} href="blog">Blog</a>
          <a className={`${styles['navbar-item']} ${styles['navbar-Services']}`} href="services">Services</a>
      </div>

    </div>
  )
}

export default Navbar
