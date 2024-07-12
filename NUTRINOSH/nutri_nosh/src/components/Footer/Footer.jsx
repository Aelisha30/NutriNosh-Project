import React from 'react'
import './Footer.css'
import { assets } from '../../frontend_assets/assets'
const Footer = () => {
  return (
    <div className='footer' id="footer">
        <div className="footer-content">
            <div className="footer-content-left">
               <img src={assets.logo}/>
               <p>Welcome to NutriNosh, your ultimate destination for delicious meals delivered right to your doorstep. Explore our diverse menu featuring a variety of cuisines crafted with fresh, high-quality ingredients. Whether you're craving comfort food, healthy options, or something indulgent, we've got you covered. Enjoy convenient ordering, fast delivery, and exceptional service every time. Join us in savoring the joy of great food, effortlessly delivered."</p>
               <div className="footer-social-icons">
                <img src={assets.facebook_icon} alt="facebook-logo" />
                <img src={assets.twitter_icon} alt="x-logo" />
                <img src={assets.linkedin_icon} alt="linkedin-logo" />
               </div>
            </div>
            <div className="footer-content-center">
              <h2>COMPANY</h2>
              <ul>
                <li>Home</li>
                <li>About Us</li>
                <li>Delivery</li>
                <li>Privacy Policy</li>
              </ul>
            </div>
            <div className="footer-content-right">
                <h2>Get In Touch</h2>
                <ul>
                    <li>+1-222-984-5607</li>
                    <li>contact@nutri-nosh.com</li>
                </ul>
        </div>
    </div>
    <hr />
    <p className='footer-copyright'>
        Copyright ⓒ {new Date().getFullYear()} NutriNosh.com - All Rights Reserved.
    </p>
    </div>
  )
}

export default Footer