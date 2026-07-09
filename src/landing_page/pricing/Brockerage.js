import React from 'react'

const Brockerage = () => {
  return (
    <div className="container py-5 ">
      <div className="row p-3 mt-2 justify-content-center border-bottom">
          <a href="" style={{ textDecoration: "none" }} className='text-center d-block mb-4'>
            <h3 className="fs-3 fw-bold text-primary">Brokerage calculator</h3>
          </a>
          <ul
            className="text-muted lh-lg fs-5 ps-3 ps-md-4"
          >
            <li className='mb-3'>
              Call & Trade and RMS auto-squareoff:Additional charges of ₹50 +
              GST per order.
            </li>
            <li className='mb-3'>Digital contract notes will be sent via e-mail.</li>
            <li className='mb-3'>
              Physical copies of contract notes, if required, shall be charged
              ₹20 per contract note. Courier charges apply.
            </li>
            <li className='mb-3'>
              For NRI account (non-PIS), 0.5% or ₹100 per executed order for
              equity (whichever is lower).
            </li>
            <li className='mb-3'>
              For NRI account (PIS), 0.5% or ₹200 per executed order for equity
              (whichever is lower).
            </li>
            <li className='mb-3'>
              If the account is in debit balance, any order placed will be
              charged ₹40 per executed order instead of ₹20 per executed order.
            </li>
          </ul>
          </div>
        <div className="row p-3 mt-4 justify-content-center border-bottom ">
          <a href="" style={{ textDecoration: "none" }}>
            <h3 className="fs-3 fw-bold text-primary text-center mt-3 mb-5">Charges for account opening</h3>
          </a>
          <ul
            className="text-muted lh-lg fs-5 ps-3 ps-md-4"
          >
            <li className='mb-3'>
             Individual account - <span className='badge bg-success bg-opacity-100 text-white px-2 py-2 rounded-1 fw-medium font monospace' style={{ letterSpacing:'0.5px',fontSize:'13px'}}>FREE</span> 
            </li>
            <li className='mb-3'>Minor account - <span className='badge bg-success bg-opacity-100 text-white px-2 py-2 rounded-1 fw-medium font monospace' style={{ letterSpacing:'0.5px',fontSize:'13px'}}>FREE</span> </li>
            <li className='mb-3'>
             NRI account - ₹ 300 
            </li>
            <li className='mb-3'>
             HUF account - <span className='badge bg-success bg-opacity-100 text-white px-2 py-2 rounded-1 fw-medium font monospace' style={{ letterSpacing:'0.5px',fontSize:'13px'}}>FREE</span>  (online) / ₹ 300 (offline)
            </li>
            <li className='mb-3'>
            Partnership, LLP, and Corporate accounts (offline only) - ₹ 300
            </li>
          </ul>
        </div>
      </div>
  
  )
}

export default Brockerage