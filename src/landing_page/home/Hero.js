import React from 'react'

const Hero = () => {
  return (
    <div className='container p-5 mb-5 overflow-hidden'>
      <div className='row align-items-center g-4 '>
         <div className='col-12 col-md-6 text-center'>
          <img src='images/HeroSection.png.jpeg' className='img-fluid shadow-sm mt-5' style={{maxheight: '550px', borderRadius:'45px'}} alt='Hero Image'></img>
        </div>
        <div className='col-12 text-center col-md-6 mt-5 text-md-start'>
          <div className=' '>
          <h1 className='mt-0 display-4 fw-bold ' >Rise with Confidence  </h1>
          <h2 className='display-5 fw-bold'>Trade with Clarity</h2>
        <p className='pt-3 fw-bold text-muted'>Your trusted partner in smart investing — secure trades, real‑time insights, and strategies designed to help your wealth grow.</p>
        <button className='p-3 btn btn-primary btn-lg px-5 py-3   rounded-pill shadow-sm fw-bold bg-black border-0' > Sign up </button>
        </div>
        </div>
        </div>  </div>
  )
}

export default Hero