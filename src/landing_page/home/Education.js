import React, { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'

const Education = () => {
  useEffect(() =>{
    AOS.init({
      duration:1000,
      once: false,
    });
  }, []);
  return (
    <div className='container p-3'>
      <div className='row'>
        <h2 className='fw-bold fs-1 text-center ' data-aos='fade-up'>Platform for Trading and Investing</h2>
        <h3 className='text-center text-success fw-bold mt-1 fs-sm-4 fs-5' data-aos='fade-up'
        data-aos-delay='200'>#AbTradingSabkeLiaAsanHai</h3>
        <div className='col-12 text-center' data-aos='zoom-in' data-aos-delay='400'>
        <img src='../images/platform-touch.webp'className='img-fluid mt-1' style={{maxheight:'400px', width:'auto'}}></img>
      </div>
      </div>

    </div>
  )
}

export default Education