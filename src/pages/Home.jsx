import React from 'react'
import PropertyCard from '../components/PropertyCard'
import HeroSection from '../components/HeroSection'
import PropertyShowcase from '../components/PropertyShowcase'
import Testimonal from '../components/Testimonal'

const Home = () => {
  return (
    <div>
      <HeroSection />
      <PropertyCard />
      <PropertyShowcase />
      <Testimonal />
    </div>
  )
}

export default Home