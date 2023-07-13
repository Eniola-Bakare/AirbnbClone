import './App.css'
import Card from './components/Card'
import HeroSection from './components/Hero'
import Navbar from './components/Navbar'

import data from './Data'

function App() {
  const cardArr = data.map(eachCard => {
    return (
      <Card 
        key = {eachCard.id}
        img = {eachCard.coverImg}
        rating = {eachCard.stats.rating}
        reviewCount = {eachCard.stats.reviewCount}
        location = {eachCard.location}
        title = {eachCard.title}
        price = {eachCard.price}
        openSpots={eachCard.openSpots}
      />
    )
  })

  return (
    <>
      <Navbar />
      <HeroSection />
      <section className='cards-list'>
        {cardArr}
      </section>
      
    </>
  )
}

export default App
