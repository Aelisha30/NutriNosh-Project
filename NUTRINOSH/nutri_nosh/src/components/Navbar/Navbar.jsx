import React,{useState} from 'react'
import "./Navbar.css"
import { Link, useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { StoreContext } from '../../context/StoreContext';

const Navbar = ({setShowLogin}) => {
    const[menu,setMenu]=useState("Home");
    const {getTotalCartAmount,token,setToken}=useContext(StoreContext)
    const navigate = useNavigate()
    const logout = ()=>{
       localStorage.removeItem("token")
       setToken("");
       navigate("/")
    }
  return (
    <div className='navbar'>
        <Link to='/'><img src="./logo.png" alt="logo" classname="logo"/></Link>
        <ul className='navbar-menu'>
            <Link to='/'onClick={()=>setMenu("Home")} className={menu==="Home"?"active":""}>Home</Link>
            <a href="#explore-menu" onClick={()=>setMenu("Menu")} className={menu==="Menu"?"active":""}>Menu</a>
            <a href="#app-download" onClick={()=>setMenu("Mobile-App")} className={menu==="Mobile-App"?"active":""}>Mobile-App</a>
            <a href="#footer" onClick={()=>setMenu("Contact Us")}className={menu==="Contact Us"?"active":""}>Contact Us</a>
        </ul>
        <div className='navbar-right'>
        <i className="fa-solid fa-magnifying-glass fa-lg"></i>
        <div className='navbar-search-icon'>
        <Link to='/cart'><i className="fa-solid fa-basket-shopping fa-lg"></i></Link>
        <div className={getTotalCartAmount()===0?"":"dot"}></div>
        </div>
        {!token?<button onClick={()=>setShowLogin(true)}>Sign in</button>:
        <div className='navbar-profile'>
           <i className="fa-solid fa-lg fa-circle-user"></i>
           <ul className='nav-profile-dropdown'>
            <li><i className="fa-solid fa-lg fa-bag-shopping"></i><p>Orders</p></li>
            <hr/>
            <li onClick={logout}><i className="fa-solid fa-lg fa-right-from-bracket"></i><p>Logout</p></li>
           </ul>


        </div>
          }
        
        </div>
    </div>
  )
}

export default Navbar