import React from 'react'

const Navbar = () => {
  return (
      <nav class="navbar navbar-expand-lg  ">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">
      <img style={{height:'90px', width:'100px'}} src='images/Logo.png.png'  />
    </a>
    
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <form class="d-flex" role="search">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Signup</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">About</a>
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
      </form>
    </div>
  </div>
</nav>
  )
}

export default Navbar