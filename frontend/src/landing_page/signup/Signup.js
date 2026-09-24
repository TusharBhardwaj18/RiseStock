import React from 'react'

const Signup = () => {
  return (
    <div className='container p-4 mt-5  overflow-hidden ' >
      {/* <div className='text-center ' style={{fontSize:'35px', fontWeight:'600'}}>
         SIGN UP 
          </div> */}
          {/* <h3 className='text-center text-white-50 fs-6 mt-0 ' >
             Join our community of investors today and take the first step towards achieving your financial goals.
          </h3> */}
          <div className='border border-3 border-white-50 rounded-5 p-4 mt-0' style={{maxWidth:'600px', margin:'0 auto', minHeight:'400px', backgroundColor:'#02192e'}}>
             <div className='text-center fw-bold fs-1 ' style={{ color:'blue'}}>
         SIGN -  <span style={{color:'green'}}>UP</span>
          </div>
            <h3 className='text-center text-white-50 fs-6 mt-0 mb-3' >
             Join our community of investors today and take the first step towards achieving your financial goals.
          </h3>
          <h1 className='text-center text-white-50 fs-5 fw-bold '>Enter Your Details</h1>
          <input type='number' placeholder='Enter your phone number ' className='form-control mb-3 rounded-pill p-3' style={{backgroundColor:'#998080', color:'white', border:'none'}} />
            <input type='text' placeholder='Enter your email ' className='form-control mb-3 rounded-pill p-3' style={{backgroundColor:'#998080', color:'white', border:'none'}} />
            <input type='password' placeholder='Create your password ' className='form-control mb-3 rounded-pill p-3' style={{backgroundColor:'#998080', color:'white', border:'none'}} />
            <input type='password' placeholder='Confirm your password ' className='form-control mb-3 rounded-pill p-3' style={{backgroundColor:'#998080', color:'white', border:'none'}} />
            <button className='btn btn-primary rounded-pill p-2 mt-3 w-100 cursor-pointer' style={{backgroundColor:'#279bfa'}}>Sign Up</button>
            <a href='/login' className='text-center fs-6 text-white-50 d-block'>Already have an account? <span style={{color:'green'}}>Login here</span></a>

          </div>
        </div>
  )
}

export default Signup