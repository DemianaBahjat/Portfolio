import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './NavbarStyle.css'
 
export default function Navbar() {

  

  return (
    <>
     <nav className="navbar navbar-expand-lg py-3 fw-bold   ">
  <div className="container">
    <Link className="navbar-brand fw-bolder text-white" to={"/home"}>START FRAMEWORK </Link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0 ">

      <li className="nav-item ">
          <Link  className="text-white text-decoration-none ms-3" aria-current="page" to={"/"} ></Link>
        </li>

        <li className="nav-item">
          <Link   className="text-white text-decoration-none ms-3" aria-current="page" to={"/about"}>ABOUT</Link>
        </li>

        <li className="nav-item">
        <Link  className="text-white text-decoration-none ms-3"  aria-current="page" to={"/Portfolio"}> Portfolio </Link>
        
        </li>
          
        <li className="nav-item">
        <Link className="text-white text-decoration-none ms-3" aria-current="page" to={"/contact"}> CONTACT </Link>

        </li>
      </ul>
      
    </div>
  </div>
</nav>
    </>
  )
}
