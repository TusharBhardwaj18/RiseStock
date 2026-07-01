import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
      <nav class="navbar navbar-expand-lg " style={{height:'80px'}} >
  <div class="container">
    <Link class="navbar-brand" to="/">
      <img  style={{height:'100px', width:'100px'}}  src='images/Logo.png.png'  />

    </Link>
    
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
   
        <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <Link class="nav-link active" aria-current="page" to="/signup">
            Signup
          </Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link active" aria-current="page" to="/about">
            About
          </Link>
        </li>
         <li class="nav-item">
          <Link class="nav-link  active" aria-current="page" to="/product">
            Product
          </Link>
        </li>
         <li class="nav-item">
          <Link class="nav-link active" aria-current="page" to="/pricing">
            Pricing
          </Link>
        </li>
         <li class="nav-item">
          <Link class="nav-link active" aria-current="page" to="/support">
            Support
          </Link>
        </li>
        <li class="nav-item dropdown">
          <Link class="nav-link dropdown-toggle" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            More
          </Link>
          <ul class="dropdown-menu">
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