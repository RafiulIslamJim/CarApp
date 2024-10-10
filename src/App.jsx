import './index.css'
import Navbar from './components/Navbar/Navbar'
import HeroSection from './components/HeroSection'
import PopularCar from './components/cards/PopularCar'
import Cards from './components/cards/Cards'
import Footer from './components/Footer'


function App() {

  return (
    <>
      <Navbar/>
      <HeroSection/>
      <PopularCar/>
      <Cards/>
      <Footer/>
    </>
  )
}
// import Navbar from './components/Navbar/Navbar'

export default App
