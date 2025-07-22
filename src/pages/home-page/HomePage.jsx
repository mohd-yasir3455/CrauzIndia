import Navbar from "../../components/navbar/Navbar"
import Footer from "../../components/footer/Footer"
import styles from "../home-page/HomePage.module.css"

const HomePage = () => {
  return (
    <div>

      <div className={styles['div-class']}>
        <Navbar></Navbar>
        <div className={styles['main-div']}>
          Innovating To <br />Impact
        </div>
      </div>

      <div className={styles['our-goal']}>
        <h1>Our Goal</h1>
        To deliver digital solutions that are fast, flexible, and built to perform, helping brands grow smarter and move quicker.
        <h3>Freelance-First & Business-Focused</h3>
        We are powered by people — a diverse and skilled freelance community that brings strategic thinking and real-world execution together. Every project is built to drive brand visibility and business growth, efficiently and effectively.
        <h3>Creatively Bold</h3>
        We think beyond the brief. From objective-led communication to bold, unconventional ideas — we push creative boundaries that make brands stand out. #BuiltDifferent
        <h3>Fast, Flexible, Reliable</h3>
        With a wide talent base and agile workflows, we ensure quick turnarounds, cost-effective delivery, and reliable output every single time.
      </div>

      <div className={styles['slider-container']}>
        <a href="">Services 1</a>
        <a href="">Services 2</a>
        <a href="">Services 3</a>
        <a href="">Services 4</a>
      </div>

      <Footer></Footer>
    </div>
  )
}

export default HomePage
