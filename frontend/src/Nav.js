
import './App.css';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Nav = () => {
  const navigate = useNavigate()
  const [input, setInput] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`/search/${input}`);
  }
  return (
    <div class="m-4">
      <nav class="navbar navbar-expand-lg navbar-light ">
        <div class="container-fluid">
          <a href="/" class="navbar-brand">
            <img
              alt="..."
              src='images/logo1.png'
              style={{ width: "100px", height: "100px", overflow: "hidden", borderRadius: "150px" }}
            /></a>
          <a href='/' class="navbar-band"></a>



          <button type="button" class="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarCollapse">

            <div class="navbar-nav ms-auto">
              <a class="nav-link" href="/"  ><font color="black">Home</font>  </a>
              <a class="nav-link" href="products" ><font color="black">Products</font>  </a>
              <a class="nav-link" href="aboutus" ><font color="black">About Us</font>  </a>
              <a class="nav-link" href="contactus" ><font color="black">Contact us</font>  </a>
            </div>
          </div>
          <form class="d-flex" role="search" onSubmit={handleSubmit}>
            <input class="form-control me-2" placeholder="Search" aria-label="Search"
              onChange={(e) => setInput(e.target.value)}
              type="text" />
            <button class="btn btn-outline-dark" type="submit">Search</button>
          </form>
        </div>

      </nav>
    </div>
  )
}

export default Nav