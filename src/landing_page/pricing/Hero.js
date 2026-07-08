import React from 'react'

const Hero = () => {
  return (
    <div className='container border-bottom'>
      <div className='row justify-content-center mt-5'>
      <h1 className='text-center mt-5 fs-1 '>Charges</h1>
      <h3 className='text-muted text-center mt-2 mb-5'>List of all charges and taxes</h3>
    </div>
     <div className="row p-5 border-top text-center">
        <div className="col-4 ">
          <img src="images/pricingEquity.svg" />
          <h1 className="fs-3">Free equity delivery</h1>
          <p className="text-muted">
            All equity delivery investments (NSE, BSE), are absolutely free — ₹
            0 brokerage.
          </p>
        </div>
        <div className="col-4">
          <img src="images/intradayTrades.svg" />
          <h1 className="fs-3">Intraday and F&O trades</h1>
          <p className="text-muted">
            Flat Rs. 20 or 0.03% (whichever is lower) per executed order on
            intraday trades across equity, currency, and commodity trades.
          </p>
        </div>
        <div className="col-4 ">
          <img src="images/pricingEquity.svg" />
          <h1 className="fs-3">Free direct MF</h1>
          <p className="text-muted">
            All direct mutual fund investments are absolutely free — ₹ 0
            commissions & DP charges.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Hero