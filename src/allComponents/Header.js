import React from 'react';
import Group34 from './../assets/Group34.png'

const Header = () => {
  return (
    <div>
      <nav class="navbar navbar-expand-lg bg-none color-dark">
        <div class="container-fluid">
          <img src={Group34} alt="" />
          <a class="navbar-brand" href="#"> &nbsp; Notarize<span className=' hq text-primary'>HQ</span> </a>
          <button class="navbar-toggler " type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Solutions
                </a>
                <ul class="dropdown-menu">
                  <li><a class="dropdown-item" href="#">Action</a></li>
                  <li><a class="dropdown-item" href="#">Another action</a></li>
                  <li><hr class="dropdown-divider" /></li>
                  <li><a class="dropdown-item" href="#">Something else here</a></li>
                </ul>
              </li>
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">Pricing</a>
              </li>
              <li class="nav-item">
                <a class="nav-link bg-red-700 text-red-700" href="#">For Notaries</a>
              </li>
              <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Company
                </a>
                <ul class="dropdown-menu">
                  <li><a class="dropdown-item" href="#">Action</a></li>
                  <li><a class="dropdown-item" href="#">Another action</a></li>
                  <li><hr class="dropdown-divider" /></li>
                  <li><a class="dropdown-item" href="#">Something else here</a></li>
                </ul>
              </li>
            </ul>
            <form class="d-flex" role="search">
              {/* <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/> */}
              <button class="btn bg-none btn-sm primary text-primary" type="submit">Sign In</button>
              <button class="btn btn-primary mx-2 rounded-4 btn-sm px-3" type="submit">Notarize Now</button>
            </form>
          </div>
        </div>
      </nav>


    </div>
  )
}

export default Header