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
    <div className='container border-bottom p-4 overflow-hidden'>
      <div className='row justify-content-center mt-5'>
      <h1 className='text-center mt-5 fs-1 fw-bold ' data-aos='fade-up'>Charges</h1>
      <h3 className='text-white-50 text-center mt-2 mb-5' data-aos='fade-up' data-aos-delay='200'>List of all charges and taxes</h3>
    </div>
      <div className="row g-5 text-center">
        <div className="col-12 col-md-4 " data-aos='zoom-in' data-aos-delay='400'>
          <img src="images/pricingEquity.svg" className='img-fluid mb-3' style={{maxHeight:'150px'}} />
          <h1 className="fs-3">Free equity delivery</h1>
          <p className="text-white-50 px-2">
            All equity delivery investments (NSE, BSE), are absolutely free — ₹
            0 brokerage.
          </p>
        </div>
        <div className="col-12 col-md-4" data-aos='zoom-in' data-aos-delay='600'>
          <img src="images/intradayTrades.svg" className='img-fluid mb-3' style={{maxHeight:'150px'}}  />
          <h1 className="fs-3">Intraday and F&O trades</h1>
          <p className="text-white-50 px-2">
            Flat Rs. 20 or 0.03% (whichever is lower) per executed order on
            intraday trades across equity, currency, and commodity trades.
          </p>
        </div>
        <div className="col-12 col-md-4 " data-aos='zoom-in' data-aos-delay='800'>
          <img src="images/pricingEquity.svg" className='img-fluid mb-3' style={{maxHeight:'150px'}} />
          <h1 className="fs-3">Free direct MF</h1>
          <p className="text-white-50 px-2">
            All direct mutual fund investments are absolutely free — ₹ 0
            commissions & DP charges.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Hero