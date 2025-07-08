import React from 'react'
import './Navbar.css'
import logo_muskan_final from '../../assets/logo_muskan_final.svg'
const Navbar = () => {
  return (
    <div className='navbar'>
     <img src={logo_muskan_final} alt="" />
     <ul className="nav-menu">
        <li>Home</li>
        <li>About Me</li>

        <li>Projects</li>
        <li>Contact</li>
     </ul>
     <div className="nav-connect">Connect With Me</div>
    </div>
  )
}

export default Navbar
