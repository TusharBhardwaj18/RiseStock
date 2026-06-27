import React from 'react'

const Hero = () => {
  return (
    <div className='container p-5 mb-5'>
      <div className='row text-center'>
        <img src='images/HeroSection.png.jpeg' className='mb-5' style={{height: '550px', borderRadius:'45px'}} alt='Hero Image'></img>
        <h1 className='mt-5'>Invest in everything</h1>
        <p>Online platform to invest in stocks, derivatives, mutual funds, ETFs, bonds, and more.</p>
        <button className='p-3 btn btn-primary fs-5 mb-5' style={{width :'23%' , margin: '0 auto'}}> Sign up </button>
        </div>   </div>
  )
}

export default Hero