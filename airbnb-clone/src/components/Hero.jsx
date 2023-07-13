import photoGrid from '../assets/photoGrid.svg'


function HeroSection (){
  return (
    <section className='hero-div'>
      <img src={photoGrid} alt="a photo grid" className='hero--image'/>

      <section className='heroText'>
        <h1 className='hero--h1'>Online Experiences</h1>
        <p className='hero--description'>Join unique interactive activities led by one-of-a-kind hosts-all without leaving home.</p>
      </section>
    </section >
  )
}

export default HeroSection