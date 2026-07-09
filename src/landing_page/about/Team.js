import React from 'react'

const Team = () => {
  return (
    <div className="container mb-5">
      <div className="row border-top pt-5 text-center justify-content-center">
        <div className='col-12'>
          <h1 className="display-4 fw-bold" >People </h1>
          </div>
          </div>
          <div className='row justify-content-center text-center '>
            <div className='col-12 col-md-10 col-lg-8 mx-auto'>
            <h2 className="display-5 mt-2 text-center" >Tushar Bhardwaj</h2>
            <h3 className="text-center  ">Founder & CEO</h3>
            <p className="text-secondary fs-5 lh-base px-2 px-md-4 mb-4">Tushar is the visionary behind RiseStock, bringing extensive experience in finance and technology to lead our innovative platform.</p>
            <div className='d-flex justify-content-center align-items-center gap-3 fw-semibold mt-3 fs-5'>
              <span className='text-muted small'>Connect on:</span>
               <a href="https://www.linkedin.com/in/tushar-bh-1112e2" target="_blank" rel="noopener noreferrer" className="text-decoration-none text-primary"> LinkedIn</a>
               <span className='text-muted opacity-50'>/</span>
               <a href="https://twitter.com/its_tusharbh?s=11" target="_blank" rel="noopener noreferrer" className="text-decoration-none text-info"> Twitter</a>
            </div>
          </div>
        </div>
      </div>
  )
}

export default Team