import React, { useState } from 'react'
import {  Link} from 'react-router-dom';
import { BiMenuAltRight } from "react-icons/bi";
import { BiUserCircle } from "react-icons/bi";
import { BiX } from "react-icons/bi";
import './Nav.css';
import Body from './Body';

const NavBar = () => {

  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {

    setIsOpen(!isOpen);

  };

  return (
    <>
    <div className="navbody">
      <div className="header">
        <div className="navbar">
          <div className="logo"><a href="#">Ethics Wala Coder</a></div>
          <ul className="links" >
            <li><a href="hero">Home</a></li>
            <li><a href="about">About</a></li>
            <li><a href="contact">Contact</a></li>

          </ul>
          
          
          <Link to="/login" className="action_btn" >Login &nbsp;<BiUserCircle className="loginicon" /></Link>
       
          <div className="toggle_btn" onClick={toggleMenu}>{isOpen ? <BiX /> : <BiMenuAltRight />}</div>
        </div>
        <div className={`dropdown_menu  ${isOpen ? 'open' : ''}`}>
          <li><a href="hero">Home</a></li>
          <li><a href="about">About</a></li>
          <li><a href="contact">Contact</a></li>
          <li><Link to="/login" className="action_btn">Login &nbsp;<BiUserCircle className="loginicon" /></Link></li>
        </div>
     
      </div>
      
    </div>
       {/* <Body/> */}
       </>
  )
}

export default NavBar
