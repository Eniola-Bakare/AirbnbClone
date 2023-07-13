import './App.css'
import Card from './components/Card'
import HeroSection from './components/Hero'
import Navbar from './components/Navbar'
import katie from "./assets/katie-zaferes.png"

function App() {

  return (
    <>
      <Navbar />
      <HeroSection />
      <Card 
        img = {katie}
        rating = {5.0}
        reviewCount = {6}
        country = "Switzerland"
        title = "Life Lessons with Katie Zaferes"
        price = {136}
      />
      
    </>
  )
}

export default App
