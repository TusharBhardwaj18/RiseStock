import React from 'react'

const Footer = () => {
  return (
    // rgb(20, 24, 37)
    <footer style={{backgroundColor:'rgb(20, 24, 37)'}} className='text-white pt-0 pb-2'>  
    <div className='container-fluid border-top border-secondary pt-4' >
      <div className='row g-4'>
        <div className='col-12 col-md-6 col-lg-3 text-center text-md-start' >
          <img className='p-1 mb-3 image-fluid' style={{maxheight:'120px', width:'200px'}} src='images/logo.png.png'></img>
        
          </div>
          <div className='col-12 col-md-6 col-lg-3 text-center text-md-start'>
           <p className='fw-bold mb-3'> Account</p>
            <a href="" style={{textDecoration:'none'}} className='text-white-50 d-block mb-2 link-primary'>Open an account</a>
            <a href="" style={{textDecoration:'none'}} className='text-white-50 d-block mb-2 link-primary'>Fund transfer</a>
            <a href="" style={{textDecoration:'none'}} className='text-white-50 d-block mb-2 link-primary' >60 day challenge</a>
          </div>
          <div className='col-12 col-md-6 col-lg-3 text-center text-md-start'>
                   <p className='fw-bold'> Support</p>
           <a href="" style={{textDecoration:'none'}}className='text-white-50 d-block mb-2 link-primary'>Contact</a>
            <a href="" style={{textDecoration:'none'}} className='text-white-50 d-block mb-2 link-primary'>Support portal</a>
            <a href="" style={{textDecoration:'none'}} className='text-white-50 d-block mb-2 link-primary' >Z-Connect blog</a>
            <a href="" style={{textDecoration:'none'}} className='text-white-50 d-block mb-2 link-primary'>List of charges</a>
            <a href="" style={{textDecoration:'none'}} className='text-white-50 d-block mb-2 link-primary'>Downloads & resources</a>  
          </div>
          <div className='col-12 col-md-6 col-lg-3 text-center text-md-start'>
                  <p className='fw-bold'> Quick Links</p>
                  <a href="" style={{textDecoration:'none'}} className='text-white-50 d-block mb-2 link-primary'> Upcoming IPOs</a>
            <a href="" style={{textDecoration:'none'}} className='text-white-50 d-block mb-2 link-primary'>Brokerage charges</a> 
            <a href="" style={{textDecoration:'none'}} className='text-white-50 d-block mb-2 link-primary'>Market holidays</a>
            <a href="" style={{textDecoration:'none'}} className='text-white-50 d-block mb-2 link-primary'>Economic calendar</a>
            <a href="" style={{textDecoration:'none'}} className='text-white-50 d-block mb-2 link-primary'>Calculatorss</a>
            <a href="" style={{textDecoration:'none'}} className='text-white-50 d-block mb-2 link-primary'>Markets</a>
            <a href="" style={{textDecoration:'none'}} className='text-white-50 d-block mb-2 link-primary'>Sectors</a>
            <a href="" style={{textDecoration:'none'}} className='text-white-50 d-block mb-2 link-primary'>Gift Nifty</a>
          </div></div> 
          <hr className='border-secondary my-4' />
          <div className='row'>
            <div className='col-12 text-center'>
          <p className=' text-white-50 mb-2 '>© 2026, RiseStock Broking Ltd.<br />
               All rights reserved.
               </p>
              <div className="d-flex justify-content-center gap-3">
      <a href="/terms-and-conditions" className="me-3 text-white-50 link-primary small" style={{textDecoration:'none'}}>Terms & conditions </a>
      <a href="" className="me-3 text-white-50 link-primary small" style={{textDecoration:'none'}}>Privacy policy </a>
      </div>
      </div>
    </div>
          </div>
          </footer>
  )
}

export default Footer 