import React from 'react'

const Footer = () => {
  return (
    <div className='container '>
      <hr />
      <div className='row'>
        <div className='col'>
          <img style={{height:'200px', width:'200px'}} src='images/logo.png.png'></img>
          </div>
          <div className='col'>
           <p> Account</p>
            <a href="">Open an account</a>
            <br />
            <a href="">Fund transfer</a>
            <br />
            <a href="">60 day challenge</a>
            <br />
           
          </div>
          <div className='col'>
                   <p> Support</p>
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
                  <p> Quick Links</p>
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
          <p className=' text-center '>© 2026, RiseStock Broking Ltd.<br />
               All rights reserved.</p>
          </div>
  )
}

export default Footer 