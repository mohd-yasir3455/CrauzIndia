import Navbar from "../../components/navbar/Navbar"
import Footer from "../../components/footer/Footer"
import styles from "../home-page/HomePage.module.css"
import SlideShow from "../../components/slideshow/SlideShow"
const HomePage = () => {
    const services = [
      <a href="">Services 1</a>,
      <a href="">Services 2</a>,
      <a href="">Services 3</a>,
      <a href="">Services 4</a>,
      ]
  return (
    <div>

      <div className={styles['div-class']}>
        <Navbar></Navbar>
        <div className={styles['main-div']}>
          Raw To <br />Remarkable
        </div>
      </div>
      <SlideShow ></SlideShow>
      <div className={styles['our-goal-container']}>
        <div className={styles['our-goal']}>
          <div className={styles['our-goal-text']}>
            <h1 className={styles['our-goal-h1']}>Our Goal</h1>
            <p className={styles['our-goal-p']}>To deliver digital solutions that are fast, flexible, and built to perform, helping brands grow smarter and move quicker.</p>
            <h3 className={styles['our-goal-h3']}>Freelance-First & Business-Focused</h3>
            <p className={styles['our-goal-p']}>We are powered by people — a diverse and skilled freelance community that brings strategic thinking and real-world execution together. Every project is built to drive brand visibility and business growth, efficiently and effectively.</p>
            <h3 className={styles['our-goal-h3']}>Creatively Bold</h3>
            <p className={styles['our-goal-p']}>We think beyond the brief. From objective-led communication to bold, unconventional ideas — we push creative boundaries that make brands stand out. <u>#BuiltDifferent</u></p>
            <h3 className={styles['our-goal-h3']}>Fast, Flexible, Reliable</h3>
            <p className={styles['our-goal-p']}>With a wide talent base and agile workflows, we ensure quick turnarounds, cost-effective delivery, and reliable output every single time.</p>
          </div>
        </div>
      </div>

        <div className={styles['our-work-container']}>
          <h1 className={styles['our-work-title']}>Our Work</h1>
          <div className={styles['our-work-1']}>
              <h1>Work 1</h1>
          </div>

          <div className={styles['our-work-2']}>
              <h1>Work 2</h1>
          </div>
        </div>
       
       
      <Footer></Footer>
    </div>
  )
}

export default HomePage
