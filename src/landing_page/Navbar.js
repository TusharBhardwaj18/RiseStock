import React from 'react'

const Navbar = () => {
  return (
      <nav class="navbar navbar-expand-lg " style={{height:'80px'}} >
  <div class="container">
    <a class="navbar-brand" href="#">
      <img  style={{height:'100px', width:'100px'}}  src='images/Logo.png.png'  />

    </a>
    
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
   
        <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Signup</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active" href="#">About</a>
        </li>
         <li class="nav-item">
          <a class="nav-link  active" href="#">Product</a>
        </li>
         <li class="nav-item">
          <a class="nav-link active" href="#">Pricing</a>
        </li>
         <li class="nav-item">
          <a class="nav-link active" href="#">Support</a>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            More
          </a>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="#">Results</a></li>
            <li><a class="dropdown-item" href="#">What's New</a></li>
            <li><a class="dropdown-item" href="#">Explore</a></li>
            <li><a class="dropdown-item" href="#">FAQs</a></li>
          </ul>
        </li>
       
      </ul>
  
    </div>
  </div>
</nav>
  )
}

export default Navbar