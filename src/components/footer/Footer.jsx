import styles from '../footer/Footer.module.css'

const Footer = () => {
  return (
    <div className={styles['footer']}>
      <div className={styles['footer-container']}>
        <div className={styles['footer-items']}>
          <a className={styles['footer-item']} href="">Footer</a>
          <a className={styles['footer-item']} href="">Footer</a>
          <a className={styles['footer-item']} href="">Footer</a>
          <a className={styles['footer-item']} href="">Footer</a>
          <a className={styles['footer-item']} href="">Footer</a>
          
        </div>

        <div className={styles['footer-items']}>
          <a className={styles['footer-item']} href="">Footer</a>
          <a className={styles['footer-item']} href="">Footer</a>
          <a className={styles['footer-item']} href="">Footer</a>
          <a className={styles['footer-item']} href="">Footer</a>
          <a className={styles['footer-item']} href="">Footer</a>
        </div>

        <div className={styles['contact-us-form']}>
          Contact Us
          <span>Email: </span>
          <input type="email" />
          <span>Message: </span>
          <textarea name="" id=""></textarea>

          <input type="submit" />
        </div>
      </div>

      <div className={styles['social-links']}>
        <a className={styles['social-link']} href="">Social Link</a>
        <a className={styles['social-link']} href="">Social Link</a>
        <a className={styles['social-link']} href="">Social Link</a>
        <a className={styles['social-link']} href="">Social Link</a>
        
      </div>

      <div className={styles['footer-copyright']}>
        © Copyright Crauz India
      </div>
    </div>
  )
}

export default Footer
