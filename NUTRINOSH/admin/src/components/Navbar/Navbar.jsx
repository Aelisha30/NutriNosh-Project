import React from 'react'
import './Navbar.css'

const Navbar = () => {
  return (
    <div className='navbar'>
        <img className="logo" src="./logo.png" alt="" />
        <p>Admin Panel</p>
        <i className="fa-solid fa-circle-user fa-2x"></i>
        
    </div>
  )
}

export default Navbar