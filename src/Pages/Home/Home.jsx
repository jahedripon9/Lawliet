import Hero from "../Hero/Hero.jsx";
import Questions from "../Questions/Questions"
import Services from "../Services/Services"
import StatsSection from "../StatsSection/StatsSection"
import Testimonial from "../Testimonial/Testimonial"

const Home = () => {
  return (
    <div>
        <Hero />
        <Services />
        <StatsSection />
        <Testimonial />
        <Questions />
    </div>
  )
}

export default Home