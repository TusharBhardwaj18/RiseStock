import React, {useEffect} from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'

const Hero = () => {
  useEffect(() =>{
        AOS.init({
          duration:1000,
          once: false,
        });
      }, []);
  return (
    <section className='container-fluid py-5  mt-5 '>
      <div className='container'>
      <div className='d-flex flex-column flex-sm-row justify-content-between align-items-center align-items-sm-center gap-3 mb-5' data-aos='fade-right'>
        <h1 className='fw-bold fs-2 mb-0' data-aos-delay='200'>Support Portal</h1>
        <button className='btn btn-primary px-4 py-2 shadow-sm text-nowrap'data-aos='fade-up' data-aos-delay='400' >Track Ticket</button>
      </div>
      <div className='row'>
        <div className='col-12 col-md-10 col-lg-8'>
          <div className='input-group input-group-lg shadow-sm'data-aos='zoom-in' data-aos-delay='600'>
            <span className='input-group-text bg-white border-0 text-muted ps-3 pe-1'>
              <span class="material-symbols-outlined "> search </span>
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