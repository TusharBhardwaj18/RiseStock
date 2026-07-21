import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
      <nav class="navbar navbar-expand-lg px-3 py-0 navbar-dark shadow-sm fixed-top overflow-hidden " style={{minHeight:'50px', backgroundColor:'rgb(20, 24, 37)'}} >
  <div class="container-fluid">
    <Link class="navbar-brand d-flex align-items-center" to="/">
      <img className='img-fluid' style={{maxHeight:'53px', width:'auto', objectFit:'contain'}}  src='images/logo.png' alt='Logo' />
    </Link>
    
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavDropdown">
   
        <ul class="navbar-nav ms-auto mb-2 mb-lg-0  align-items-lg-center gap-2">
          <li class="nav-item ">
          <Link class="nav-link active text-white  link-primary" aria-current="page" to="/">
            Home
          </Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link active text-white link-primary" aria-current="page" to="/signup">
            Signup
          </Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link active text-white link-primary" aria-current="page" to="/about">
            About
          </Link>
        </li>
         <li class="nav-item">
          <Link class="nav-link  active text-white link-primary" aria-current="page" to="/product">
            Product
          </Link>
        </li>
         <li class="nav-item">
          <Link class="nav-link active text-white link-primary" aria-current="page" to="/pricing">
            Pricing
          </Link>
        </li>
         <li class="nav-item">
          <Link class="nav-link active text-white link-primary" aria-current="page" to="/support">
            Support
          </Link>
        </li>
        <li class="nav-item dropdown">
          <Link class="nav-link dropdown-toggle" to="#" role="button" id='navbarDropdownMenuLink' data-bs-toggle="dropdown" aria-expanded="false">
            More
          </Link>
          <ul class="dropdown-menu dropdown-menu-end" aria-labelledby='navbarDropdownMenuLink'>
            <li><Link class="dropdown-item" to="#">Results</Link></li>
            <li><Link class="dropdown-item" to="#">What's New</Link></li>
            <li><Link class="dropdown-item" to="#">Explore</Link></li>
            <li><Link class="dropdown-item" to="#">FAQs</Link></li>
          </ul>
        </li>
       
      </ul>
  
    </div>
  </div>
</nav>
  )
}

export default Navbar