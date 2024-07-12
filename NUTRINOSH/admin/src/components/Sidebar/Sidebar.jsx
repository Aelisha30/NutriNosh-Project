import React from 'react'
import './Sidebar.css'
import { NavLink } from 'react-router-dom'

const Sidebar = () => {
  return (
    <div className='sidebar'>
        <div className="sidebar-options">
            <NavLink to='/add' className="sidebar-option">
            <i className="fa-solid fa-circle-plus fa-2x"></i>
                <p>Add Items</p>
            </NavLink>
            <NavLink to='/list' className="sidebar-option">
            <i class="fa-solid fa-clipboard-list fa-2x"></i>
                <p>List Items</p>
            </NavLink>
            <NavLink to='/orders' className="sidebar-option">
            <i class="fa-solid fa-box fa-2x"></i>
                <p>Orders</p>
            </NavLink>
        </div>
    </div>
  )
}

export default Sidebar