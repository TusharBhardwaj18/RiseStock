import React from 'react'

const Footer = () => {
  return (
    // rgb(20, 24, 37)
    <footer style={{backgroundColor:'rgb(20, 24, 37)'}}>  
    <div className='container-fluid border-top' >
      <div className='row mt-5'>
        <div className='col' >
          <img className='p-2' style={{height:'200px', width:'200px'}} src='images/logo.png.png'></img>
        
          </div>
          <div className='col'>
           <p className='fw-bold '> Account</p>
            <a href="">Open an account</a>
            <br />
            <a href="">Fund transfer</a>
            <br />
            <a href="">60 day challenge</a>
            <br />
           
          </div>
          <div className='col'>
                   <p className='fw-bold'> Support</p>
                   <a href="">Contact</a>
            <br />
            <a href="">Support portal</a>
            <br />
            <a href="">Z-Connect blog</a>
            <br />
            <a href="">List of charges</a>
            <br />
            <a href="">Downloads & resources</a>
            <br />
                   
          </div>
          <div className='col'>
                  <p className='fw-bold'> Quick Links</p>
                  <a href=""> Upcoming IPOs</a>
            <br />
            <a href="">Brokerage charges</a> 
            <br />
            <a href="">Market holidays</a>
            <br />
            <a href="">Economic calendar</a>
            <br />
            <a href="">Calculatorss</a>
            <br />
            <a href="">Markets</a>
            <br />
            <a href="">Sectors</a>
            <br />
            <a href="">Gift Nifty</a>
            <br />
          </div></div> <hr />
          <p className=' text-center mb-0 mt-0 p-1  '>© 2026, RiseStock Broking Ltd.<br />
               All rights reserved.</p>
               
              <div className="text-center">
      <a href="" className="me-3">Terms & conditions </a>
      <a href="" className="me-3">Privacy policy </a>
      
    </div>
          </div>
          </footer>
  )
}

export default Footer 