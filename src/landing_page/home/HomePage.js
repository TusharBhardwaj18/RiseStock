import React from 'react'
import Hero from './Hero'
import Pricing from './Pricing'
import Education from './Education'
import OpenAccount from '../OpenAccount'
import Navbar from '../Navbar'
import Footer from '../Footer'

const HomePage = () => {
  return (
    <>
   <div className='overflow-x-hidden'>
    <Hero />
    {/* <Pricing /> */}
    <Education />
    <OpenAccount />
    </div>
   
    </>
  )
}

export default HomePage