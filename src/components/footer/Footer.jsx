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
          <p>Please fill the information for more detail</p>
          <input type="text" placeholder='Name' required="" />
          <input type="email" placeholder='Email' />
          <input type="tel" placeholder='Phone Number' pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" />
          <button>Submit</button>
        </div>

      </div>

      <div className={styles['footer-copyright']}>
        © Copyright Crauz India
      </div>
    </div>
  )
}

export default Footer
