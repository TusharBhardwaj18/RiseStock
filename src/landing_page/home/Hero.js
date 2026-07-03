import React from 'react'

const Hero = () => {
  return (
    <div className='container p-5 mb-5 overflow:hidden'>
      <div className='row align-items-center '>
        <div className='col-6 text-center '>
          <div className='heroflex mb-5'>
          <h1 className='mt-0 display-4 fw-bold' >Rise with Confidence  </h1>
          <h2 className='display-5 fw-bold'>Trade with Clarity</h2>
        <p className='pt-3 fw-bold'>Your trusted partner in smart investing — secure trades, real‑time insights, and strategies designed to help your wealth grow.</p>
        <button className='p-3 btn btn-primary btn-lg px-5 py-3crounded-pill shadow-sm fw-bold bg-black' > Sign up </button>
        </div>
        </div>
        <div className='col-6 mt-4'>
          <img src='images/HeroSection.png.jpeg' className='mb-5' style={{height: '650px', borderRadius:'45px'}} alt='Hero Image'></img>
       
        
        </div> </div>  </div>
  )
}

export default Hero