import React from 'react'
import Intro from '../components/Home/Intro'
import About from '../components/Home/About'
import Map from '../components/Home/Map'
import Why from '../components/Home/Why'

const Home = () => {
  return (
    <div className='text-black' >
        <Intro/>

        <Why/>

        <About/>
        <Map/>
    </div>
  )
}

export default Home