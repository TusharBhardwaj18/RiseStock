import React from 'react'

const Team = () => {
  return (
    <div className="container">
      <div className="row border-top p-5">
          <h1 className="display-4 fw-bold text-center " >People </h1>
          <div>
            <h1 className="display-5 mt-5 text-center" >Tushar Bhardwaj</h1>
            <h2 className="text-center  ">Founder & CEO</h2>
            <p className="text-muted text-center fs-4">Tushar is the visionary behind RiseStock, bringing extensive experience in finance and technology to lead our innovative platform.</p>
            <p className='fw-bold text-center fs-5'>Connect on 
               <a href="https://www.linkedin.com/in/tushar-bh-1112e2" target="_blank" rel="noopener noreferrer" className="text-decoration-none"> LinkedIn</a> /
               <a href="https://twitter.com/its_tusharbh?s=11" target="_blank" rel="noopener noreferrer" className="text-decoration-none"> Twitter</a>
            </p>
          </div>
        
        </div>
      </div>
  )
}

export default Team