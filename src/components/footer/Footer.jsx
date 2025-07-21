import styles from '../footer/Footer.module.css'

const Footer = () => {
  return (
    <div className={styles['footer']}>
      <div className={styles['footer-container']}>
        <div className={styles['footer-items']}>
          <a href="">Footer</a>
          <a href="">Footer</a>
          <a href="">Footer</a>
          <a href="">Footer</a>
          <a href="">Footer</a>
        </div>

        <div className={styles['footer-items']}>
          <a href="">Footer</a>
          <a href="">Footer</a>
          <a href="">Footer</a>
          <a href="">Footer</a>
          <a href="">Footer</a>
        </div>

        <div className={styles['footer-items']}>
          <a href="">Footer</a>
          <a href="">Footer</a>
          <a href="">Footer</a>
          <a href="">Footer</a>
          <a href="">Footer</a>
        </div>

        <div className={styles['footer-items']}>
          <a href="">Footer</a>
          <a href="">Footer</a>
          <a href="">Footer</a>
          <a href="">Footer</a>
          <a href="">Footer</a>
        </div>
      </div>

      <div className={styles['footer-copyright']}>
        © Copyright Crauz India
      </div>
    </div>
  )
}

export default Footer
