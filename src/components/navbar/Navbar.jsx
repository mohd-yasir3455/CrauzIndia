import styles from '../navbar/Navbar.module.css'
const Navbar = () => {
  return (
    <div className={styles['navbar-container']}>

      <div className={styles['navbar-logo']}>
        <a href="/">
          <img className={styles['logo-img']} src="src/assets/Logo/Main_logo.svg" alt="logo" />
        </a>
        <h1>Crauz India</h1>
      </div>

      <div className={styles['navbar-items-container']}>
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
