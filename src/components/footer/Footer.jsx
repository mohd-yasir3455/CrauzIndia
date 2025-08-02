import styles from '../footer/Footer.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram, faFacebook, faLinkedin, faWhatsappSquare } from '@fortawesome/free-brands-svg-icons';
const Footer = () => {
  return (
    <div className={styles['footer']}>
      <div className={styles['footer-container']}>

        <div className={styles['footer-logo-links']}>
          <div className={styles['footer-items-container']}>
            <div className={styles['footer-logo']}>
              <img className={styles['footer-image']} src="/src/assets/Logo/footer-logo-white.svg" alt="" />
              <h3 style={{color:'white'}}>Raw to Remarkable</h3>
            </div>
          </div>

          <div className={styles['social-links']}>
            <a href='/' className={styles['social-link']}><FontAwesomeIcon icon={faInstagram}/></a>
            <a href='/' className={styles['social-link']}><FontAwesomeIcon icon={faLinkedin}/></a>
            <a href='/' className={styles['social-link']}><FontAwesomeIcon icon={faWhatsappSquare}/></a>
            <a href='/' className={styles['social-link']}><FontAwesomeIcon icon={faFacebook}/></a>
          </div>
        </div>

        <div className={styles['contact-us-form']}>
          <div> <h1>Contact Us</h1></div> <br />
          <div className={styles['contact-us-div']}>
          <h3>Email:</h3>
          <input className={styles['contact-us-input']} type="email" /></div> <br />
          <div className={styles['contact-us-div']}> <h3>Message:</h3>
          <textarea  className={styles['contact-us-input']} style={{ height: '3rem' }}name="" id=""></textarea> </div><br />

          <input type="submit" className={styles['contact-us-button']} />
        </div>

      </div>

      <div className={styles['footer-copyright']}>
        © Copyright Crauz India
      </div>
    </div>
  )
}

export default Footer
