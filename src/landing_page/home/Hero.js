import React, {useEffect} from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'

const Hero = () => {
    useEffect(() =>{
      AOS.init({
        duration:1000,
        once: false,
      });
    }, []);
  return (
    <div className='container p-4 mt-2 mb-5 overflow-hidden'>
      <div className='row align-items-center g-4 '>
         <div className='col-12 col-md-6 text-center' data-aos='fade-right'>
          <img src='images/HeroSection.png.jpeg' className='img-fluid shadow-sm mt-5' style={{maxHeight: '550px', borderRadius:'45px'}} alt='Hero Image'></img>
        </div>
        <div className='col-12 text-center col-md-6 mt-5 text-md-start' data-aos='fade-left'>
          <div className=' text-center mt-5  '>
          <h1 className='mt-0 fs-1 fw-bold' data-aos='fade-up' data-aos-delay='200' >Rise with Confidence  </h1>
          <h2 className='fs-2  fw-bold' data-aos='fade-up' data-aos-delay='400'>Trade with Clarity</h2>
        <p className='pt-3 fw-bold text-white-50' data-aos='fade-up' data-aos-delay='600'>Your trusted partner in smart investing — secure trades, real‑time insights, and strategies designed to help your wealth grow.</p>
        <button className='p-3 btn btn-lg px-5 py-3 rounded-pill fw-bold transition-all border-0'
        data-aos='zoom-in' data-aos-delay='800'
        style={{
          background:'linear-gradient(45deg, #00f2fe 0%, #4facfe 100%)',
          boxShadow:'0 4px 15px rgba(79, 172, 254, 0.4)',
          transition:'all 0.3s ease'
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = 'translateY(-3px)';
          e.currentTarget.style.boxShadow = '0 8px 25px rgba(79, 172, 254, 0.8)';
        }}
         onMouseLeave={(e) => {
          e.currentTarget.style.transform = 'translateY(0)';
          e.currentTarget.style.boxShadow = '0 4px 15px rgba(79, 172, 254, 0.4)';
        }}

        > Sign up </button>
        </div>
        </div>
        </div>  </div>
  )
}

export default Hero