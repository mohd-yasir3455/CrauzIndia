import Navbar from "../../components/navbar/Navbar"
import Footer from "../../components/footer/Footer"
import styles from "../about-us/AboutUs.module.css"

const AboutUs = () => {
  return (
    <div>
      <div className={styles['about-us-container']}>
        <Navbar></Navbar>
        <div className={styles['about-us']}>
            <h1 className={styles['about-us-h1']}>About Us</h1> <br />
            <p className={styles['about-us-p']}>Scroll to know more</p>
            <p className={styles['about-us-symbol']}>^</p>
        </div>
      </div>

      <div className={styles['who-we-are-container']}>
        <div className={styles['who-we-are']}>
          <h1 className={styles['who-we-are-h1']}>Who We Are</h1>
          <p className={styles['who-we-are-p']}>Crauz 360 is a next-gen digital solution provider powered by a dynamic freelance community. Founded in 2024 and headquartered in Noida, we bring together talented freelancers from across India to deliver affordable, fast, and scalable digital services for businesses of all sizes.
          We are not your typical agency — we are a freelancer-first platform built to empower both clients and creators. Our mission is to make high-quality digital solutions accessible without the long timelines or heavy budgets.</p> <br />
          <p className={styles['who-we-are-p']}>With over 100+ successful projects and 75+ happy clients, we’ve proven that our quick turnaround time (TAT), flexible engagement models, and wide skill network can deliver results — faster and smarter.
          Whether you're looking to build a brand, launch a product, or scale your online presence, Crauz 360 connects you with the right talent at the right time — with zero compromise on quality.</p>
        </div>
      </div>

      <div className={styles['who-we-do-container']}>
        <div className={styles['who-we-are']}>
          <h1 className={styles['who-we-are-h1']}>What We Do</h1>
          <p className={styles['who-we-are-p']}>Driven by a powerful community of skilled freelancers, we @ Crauz deliver fast, flexible, and cost-effective digital solutions across design, development, marketing, and content. With deep domain knowledge and hands-on execution, we help brands achieve more in less time and with lower costs. Our aim is to empower businesses by providing access to a wide range of digital talent — all under one roof.</p>
        </div>
      </div>
      <Footer></Footer>
    </div>
  )
}

export default AboutUs
