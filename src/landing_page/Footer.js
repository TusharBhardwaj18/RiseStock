import React from 'react'

const Footer = () => {
  return (
    // rgb(20, 24, 37)
    <footer style={{backgroundColor:'rgb(20, 24, 37)'}}>  
    <div className='container-fluid border-top' >
      <div className='row mt-5'>
        <div className='col' >
          <img className='p-1 mb-5' style={{height:'200px', width:'200px'}} src='images/logo.png.png'></img>
        
          </div>
          <div className='col'>
           <p className='fw-bold '> Account</p>
            <a href="" style={{textDecoration:'none'}}>Open an account</a>
            <br />
            <a href="" style={{textDecoration:'none'}}>Fund transfer</a>
            <br />
            <a href="" style={{textDecoration:'none'}} >60 day challenge</a>
            <br />
           
          </div>
          <div className='col'>
                   <p className='fw-bold'> Support</p>
                   <a href="" style={{textDecoration:'none'}}>Contact</a>
            <br />
            <a href="" style={{textDecoration:'none'}}>Support portal</a>
            <br />
            <a href="" style={{textDecoration:'none'}} >Z-Connect blog</a>
            <br />
            <a href="" style={{textDecoration:'none'}}>List of charges</a>
            <br />
            <a href="" style={{textDecoration:'none'}}>Downloads & resources</a>
            <br />
                   
          </div>
          <div className='col'>
                  <p className='fw-bold'> Quick Links</p>
                  <a href="" style={{textDecoration:'none'}}> Upcoming IPOs</a>
            <br />
            <a href="" style={{textDecoration:'none'}}>Brokerage charges</a> 
            <br />
            <a href="" style={{textDecoration:'none'}}>Market holidays</a>
            <br />
            <a href="" style={{textDecoration:'none'}}>Economic calendar</a>
            <br />
            <a href="" style={{textDecoration:'none'}}>Calculatorss</a>
            <br />
            <a href="" style={{textDecoration:'none'}}>Markets</a>
            <br />
            <a href="" style={{textDecoration:'none'}}>Sectors</a>
            <br />
            <a href="" style={{textDecoration:'none'}}>Gift Nifty</a>
            <br />
          </div></div> <hr />
          <p className=' text-center mb-0 mt-0 p-1  '>© 2026, RiseStock Broking Ltd.<br />
               All rights reserved.</p>
               
              <div className="text-center">
      <a href="/terms-and-conditions" className="me-3 text-white link-primary link-underline-opacity-0" style={{textDecoration:'none'}}>Terms & conditions </a>
      <a href="" className="me-3 text-white link-primary link-underline-opacity-0" style={{textDecoration:'none'}}>Privacy policy </a>
      
    </div>
          </div>
          </footer>
  )
}

export default Footer 