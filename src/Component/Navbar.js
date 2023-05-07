import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import { useSelector } from "react-redux";

function Navbar() {

  const state = useSelector((state)=> state.handleCart)
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <Link className="navbar-brand fw-bold m-2 px-6" to="/">E-Commerse</Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse mx-3" id="navbarSupportedContent">
          <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink className="nav-link" to="/">Home <span className="sr-only">(current)</span></NavLink>
            </li>
            <li className="nav-item dropdown">
              <Link className="nav-link" to="/Products">
                Products
              </Link>
            </li>
            <li className="nav-item ">
              <Link className="nav-link" to="/about">About</Link>
            </li>
            <li className="nav-item ">
              <Link className="nav-link" to="/contact">Contact</Link>
            </li>

          </ul>
          <div className='buttons'>
            <Link to='/login' className='btn btn-outline-primary'>
              <i className='fa fa-sign-in me-1'></i>Login
            </Link>
            <Link to='/register' className='btn btn-outline-primary ms-2 m-2'>
              <i className='fa fa-user-plus me-1'></i>Register
            </Link>
            <Link to='/cart' className='btn btn-outline-primary ms-2'>
              <i className='fa fa-shopping-cart me-1'></i>Cart ({0})
            </Link>
          </div>

        </div>
      </nav>
    </div>
  )

}

export default Navbar