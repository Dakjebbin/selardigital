import React from 'react'
import Header from '../components/Header'
import Hero from '../components/Hero'
import Products from '../components/Products'
import About from '../components/About'

const Home = () => {
  return (
    <div>
        <Header/>
        <Hero/>
        <Products/>
        <About/>
    </div>
  )
}

export default Home