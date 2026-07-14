import React from 'react'

const Hero = () => {
  return (
    <section className='container-fluid py-5  mt-5 '>
      <div className='container'>
      <div className='d-flex flex-column flex-sm-row justify-content-between align-items-center align-items-sm-center gap-3 mb-5'>
        <h1 className='fw-bold fs-2 mb-0'>Support Portal</h1>
        <button className='btn btn-primary px-4 py-2 shadow-sm text-nowrap'>Track Ticket</button>
      </div>
      <div className='row'>
        <div className='col-12 col-md-10 col-lg-8'>
          <div className='input-group input-group-lg shadow-sm'>
            <span className='input-group-text bg-white border-0 text-muted ps-3 pe-2'>
              <i className='bi bi-search'></i>
            </span>
        <input type='text' 
        className='form-control border-0 py-3  fs-6 ps-1'
        placeholder='Eg: How do I open my account, How do i activate F&O...'
        style={{boxShadow:'none'}}
        />
        </div>
        </div>
        </div>
        </div>
    </section>
  )
}

export default Hero