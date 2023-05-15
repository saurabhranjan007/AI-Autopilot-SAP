import React from 'react'
import './nav.style.css'
import logo from '../../Static/unnamed.png'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <nav>
      <div className="logo">
        <img src={logo} alt="LTIMindtree Logo" />
      </div>
      <Link className="title" to='/'>
        AI Auto Pilot for SAP
      </Link>
    </nav>
  )
}

export default Navbar