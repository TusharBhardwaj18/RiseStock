import React, {useEffect} from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'

const CreateTicket = () => {
  useEffect(() =>{
        AOS.init({
          duration:1000,
          once: false,
        });
      }, []);
  return (
    <div className='container p-4'>
      <div className='row text-center p-3 text-md-start'>
        <div className='col-12'>
        <h1 className='fs-2 fw-bold 'data-aos='fade-up' data-aos-delay='300'>To create a ticket, select a relevant topic</h1>
        </div>
        </div>
        <div className='row g-4 g-lg-5 p-4' >
      <div className='col-12 col-md-6 col-lg-4 mb-4' data-aos='fade-up'  data-aos-delay='400'>
        <h6  className='fw-semibold d-flex align-items-center gap-1 mb-3 fs-5'> <span class="material-symbols-outlined fs-4">add_circle </span> Account Opening</h6>
        <div className='d-flex flex-column gap-3 ps-4 fs-6'>
        <a href='' style={{textDecoration:'none' }} >Online Account Opening </a>
        <a href='' style={{textDecoration:'none' }} >Minor</a>
        <a href='' style={{textDecoration:'none' }} >Company, Partnership and HUF Account </a>
        <a href='' style={{textDecoration:'none'}} >NRI Account Opening </a>
        <a href='' style={{textDecoration:'none'}} >Glossary </a>
      </div>
      </div>
      <div className='col-12 col-md-6 col-lg-4 mb-4' data-aos='fade-up' data-aos-delay='500'>
        <h6  className='fw-semibold d-flex align-items-center gap-1 mb-3 fs-5'><span class="material-symbols-outlined fs-4">account_circle </span> Your RiseStock Account</h6>
        <div className='d-flex flex-column gap-3 ps-4 fs-6'>
        <a href='' style={{textDecoration:'none'}} >Your Profile</a>
        <a href='' style={{textDecoration:'none'}} >Account Modification</a>
        <a href='' style={{textDecoration:'none'}} >DP ID and bank details </a>
        <a href='' style={{textDecoration:'none'}} >Login Credentials  </a>
        <a href='' style={{textDecoration:'none'}} >Nomination</a>
        <a href='' style={{textDecoration:'none'}} >Transfer and conversion of shares </a>
      </div>
      </div>
      <div className='col-12 col-md-6 col-lg-4 mb-4' data-aos='fade-up'  data-aos-delay='600'>
        <h6  className='fw-semibold d-flex align-items-center gap-1 mb-3 fs-5'> <span class="material-symbols-outlined fs-4">azm </span> Kite </h6>
        <div className='d-flex flex-column gap-3 ps-4 fs-6'>
        <a href='' style={{textDecoration:'none'}} > IPO</a>
        <a href='' style={{textDecoration:'none'}} >Trading FAQs</a>
        <a href='' style={{textDecoration:'none'}} >Margin Trading Facility (MTF) and Margins</a>
        <a href='' style={{textDecoration:'none'}} >Charts and Orders</a>
        <a href='' style={{textDecoration:'none'}} >Alerts and Nudges</a>
        <a href='' style={{textDecoration:'none'}} >General</a>
      </div>
      </div>
      <div className='col-12 col-md-6 col-lg-4 mb-4' data-aos='fade-up'  data-aos-delay='400'>
        <h6  className='fw-semibold d-flex align-items-center gap-1 mb-3 fs-5'> <span class="material-symbols-outlined fs-4">currency_rupee_circle </span> Funds</h6>
        <div className='d-flex flex-column gap-3 ps-4 fs-6'>
        <a href='' style={{textDecoration:'none'}} >Add Money </a>
        <a href='' style={{textDecoration:'none'}} >Withdraw money</a>
        <a href='' style={{textDecoration:'none'}} >Add bank accounts</a>
        <a href='' style={{textDecoration:'none'}} >eMandates</a>
      </div>
      </div>
      <div className='col-12 col-md-6 col-lg-4 mb-4' data-aos='fade-up'  data-aos-delay='500'>
        <h6  className='fw-semibold d-flex align-items-center gap-1 mb-3 fs-5'> <span class="material-symbols-outlined fs-4">output_circle </span> Console</h6>
        <div className='d-flex flex-column gap-3 ps-4 fs-6'>
        <a href='' style={{textDecoration:'none' }} >Portfolio </a>
        <a href='' style={{textDecoration:'none'}} >Corporate actions</a>
        <a href='' style={{textDecoration:'none' }} >Funds statement </a>
        <a href='' style={{textDecoration:'none' }} >Reports </a>
        <a href='' style={{textDecoration:'none' }} >Profile</a>
        <a href='' style={{textDecoration:'none' }} >Segments</a>
      </div>
      </div>
      <div className='col-12 col-md-6 col-lg-4 mb-4' data-aos='fade-up'  data-aos-delay='600'>
        <h6  className='fw-semibold d-flex align-items-center gap-1 mb-3 fs-5'> <span class="material-symbols-outlined fs-4">motion_photos_on </span> Coin</h6>
        <div className='d-flex flex-column gap-3 ps-4 fs-6'>
        <a href='' style={{textDecoration:'none' }} >Mutual funds</a>
        <a href='' style={{textDecoration:'none' }} >National Pension Scheme (NPS)</a>
        <a href='' style={{textDecoration:'none' }} >Fixed Deposit (FD) </a>
        <a href='' style={{textDecoration:'none' }} >Features on Coin</a>
        <a href='' style={{textDecoration:'none' }} >Payments and Orders</a>
        <a href='' style={{textDecoration:'none' }} >General</a>
      </div>
      </div>
      </div>
      </div>
  
  )
}

export default CreateTicket