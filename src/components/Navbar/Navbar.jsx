import React, { useState } from 'react';
import './Navbar.css';
import logo_muskan_final from '../../assets/logo_muskan_final.svg';
import underline from '../../assets/nav_underline.svg';
import AnchorLink from 'react-anchor-link-smooth-scroll';

const Navbar = () => {
  const [menu, setMenu] = useState("home");

  return (
    <div className='navbar'>
      <img src={logo_muskan_final} alt="Logo" />
      <ul className="nav-menu">
        <li onClick={() => setMenu("home")}>
          <AnchorLink className='anchor-link' offset={50} href='#home'>
            <p>Home</p>
          </AnchorLink>
          {menu === "home" && <img src={underline} alt="underline" />}
        </li>
        <li onClick={() => setMenu("about")}>
          <AnchorLink className='anchor-link' offset={50} href='#about'>
            <p>About Me</p>
          </AnchorLink>
          {menu === "about" && <img src={underline} alt="underline" />}
        </li>
        <li onClick={() => setMenu("projects")}>
          <AnchorLink className='anchor-link' offset={50} href='#projects'>
            <p>Projects</p>
          </AnchorLink>
          {menu === "projects" && <img src={underline} alt="underline" />}
        </li>
        <li onClick={() => setMenu("contact")}>
          <AnchorLink className='anchor-link' offset={50} href='#contact'>
            <p>Contact</p>
          </AnchorLink>
          {menu === "contact" && <img src={underline} alt="underline" />}
        </li>
      </ul>
      <div className="nav-connect">Connect With Me</div>
    </div>
  );
};

export default Navbar;
