import styles from '../footer/Footer.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram, faFacebook, faLinkedin, faWhatsappSquare } from '@fortawesome/free-brands-svg-icons';
const Footer = () => {
  return (
    <div className={styles['footer']}>
      <div className={styles['footer-container']}>
        <div className={styles['footer-items']}>
          <img className={styles['footer-image']} src="/src/assets/Logo/footer-logo.svg" alt="" />
        </div>

        <div className={styles['footer-items']}>
          <a className={styles['footer-item']} href="">Footer</a>
          <a className={styles['footer-item']} href="">Footer</a>
          <a className={styles['footer-item']} href="">Footer</a>
          <a className={styles['footer-item']} href="">Footer</a>
          <a className={styles['footer-item']} href="">Footer</a>
        </div>

        <div className={styles['contact-us-form']}>
          <div> <b>Contact Us </b></div> <br />
          <div className={styles['contact-us-div']}>
          <span>Email: </span>
          <input style={{ width: '20rem', height: '1.5rem' }} type="email" /></div> <br />
          <div className={styles['contact-us-div']}><span>Message: </span>
          <textarea  style={{ width: '20rem',height: '3rem' }} name="" id=""></textarea> </div><br />

         <input type="submit" className={styles['contact-us-button']} />
        </div>
      </div>

      <div className={styles['social-links']}>
        <a href='/' className={styles['social-link']}><FontAwesomeIcon icon={faInstagram} style={{color: '#F700B1'}}/></a>
        <a href='/' className={styles['social-link']}><FontAwesomeIcon icon={faLinkedin} style={{color: 'blue'}}/></a>
        <a href='/' className={styles['social-link']}><FontAwesomeIcon icon={faWhatsappSquare} style={{color: 'green'}}/></a>
        <a href='/' className={styles['social-link']}><FontAwesomeIcon icon={faFacebook} style={{color: 'blue'}}/></a>
      </div>

      <div className={styles['footer-copyright']}>
        © Copyright Crauz India
      </div>
    </div>
  )
}

export default Footer
