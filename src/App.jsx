import { Route, Routes } from "react-router"
import HomePage from "./pages/home-page/HomePage"
import ContactUs from "./pages/contact-us/ContactUs"
import AboutUs from "./pages/about-us/AboutUs"
import Portfolio from "./pages/portfolio/Portfolio"
import Blog from "./pages/blog/Blog"
import Services from "./pages/services/Services"

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/services" element={<Services />} />
      </Routes>
    </div>
  )
}

export default App
