import React, {useEffect} from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'

const OpenAccount = () => {
   useEffect(() =>{
        AOS.init({
          duration:1000,
          once: false,
        });
      }, []);
  return (
     <div className='container p-5 mb-5  '>
      <div className='row text-center justify-content-center'>
       
          <div className='col-12 col-md-10 col-lg-8'>
          <h1 className='mt-0  fw-bold'  data-aos='fade-up' data-aos-delay='100' >Open a RiseStock account  </h1>
        <p className='pt-3 text-white-50 fs-5'  data-aos='fade-up' data-aos-delay='200'>Modern platforms and apps, ₹0 investments, and flat ₹20 intraday and F&O trades.</p>
        <div className=' mt-4 d-flex justify-content-center'>
        <button className='p-3 btn btn-lg fs-5 border-0 rounded-pill shadowsm col-10 col-sm-6 col-md-4 col-lg-3 ' data-aos='fade-up' data-aos-delay='600' 
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
        > Sign up Now </button>
        
        </div>
       </div>
        </div> </div>
  )
}

export default OpenAccount