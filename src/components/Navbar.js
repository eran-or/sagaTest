import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = (props) => {
  return (
    <header className="row navbar navbar-dark bg-dark bd-navbar ">
      <h3 className="navbar-brand mb-0 col-4 wellcom"><NavLink to="/">Wallets</NavLink></h3>
      <ul className="nav ml-auto col-auto">
        <li className="nav-item wellcom">
          <NavLink to="/profile">User Profile </NavLink>
        </li>
      </ul>
    </header>
  )
}

export default Navbar