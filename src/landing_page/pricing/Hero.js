import React from 'react'

const Hero = () => {
  return (
    <div className='container border-bottom overflow-hidden'>
      <div className='row justify-content-center mt-5'>
      <h1 className='text-center mt-5 fs-1 fw-bold '>Charges</h1>
      <h3 className='text-muted text-center mt-2 mb-5'>List of all charges and taxes</h3>
    </div>
      <div className="row g-5  text-center">
        <div className="col-12 col-md-4 ">
          <img src="images/pricingEquity.svg" className='img-fluid mb-3' style={{maxHeight:'150px'}} />
          <h1 className="fs-3">Free equity delivery</h1>
          <p className="text-muted px-2">
            All equity delivery investments (NSE, BSE), are absolutely free — ₹
            0 brokerage.
          </p>
        </div>
        <div className="col-12 col-md-4">
          <img src="images/intradayTrades.svg" className='img-fluid mb-3' style={{maxHeight:'150px'}}  />
          <h1 className="fs-3">Intraday and F&O trades</h1>
          <p className="text-muted px-2">
            Flat Rs. 20 or 0.03% (whichever is lower) per executed order on
            intraday trades across equity, currency, and commodity trades.
          </p>
        </div>
        <div className="col-12 col-md-4 ">
          <img src="images/pricingEquity.svg" className='img-fluid mb-3' style={{maxHeight:'150px'}} />
          <h1 className="fs-3">Free direct MF</h1>
          <p className="text-muted px-2">
            All direct mutual fund investments are absolutely free — ₹ 0
            commissions & DP charges.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Hero