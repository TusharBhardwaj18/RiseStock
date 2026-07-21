import React from 'react'

const Pricing = () => {
  return (
     <div className="container">
      <div className="row p-2  border-bottom text-center">
        <h1 className='mt-0 display-4 fw-bold'>Pricing</h1>
        <h3 className="text-muted mt-3 fw-bold fs-5">
          Free equity investments and flat ₹20 traday and F&O trades
        </h3>
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

export default Pricing