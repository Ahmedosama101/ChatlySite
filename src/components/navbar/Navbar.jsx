import React, { useState } from "react";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import logo from '../../assets/chatly_logo.png';
import './navbar.css';

const Menu = () => (
  <>
   <p><a href='#home'>Home</a></p>
          <p><a href='#wgpt3'>What is CHATLY?</a></p>          
          <p><a href='#features'>Case Studies</a></p>
          <p><a href='#blog'>Library</a></p>
  </>
)
// BEM --> Block Element Modifier
const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  return (
    <div className='tech__navbar'> 
      <div className='tech__navbar-links'>
        <div className='tech__navbar-links-logo'> 
          <img src={logo} alt="logo"/>
        </div>
        <div className='tech__navbar-links_container'> 
         <Menu />
        </div>
      </div>
      <div className='tech__navbar-sign'>
        <p>Sign in</p>
        <button type="button">Sign up</button>
      </div>
      <div className='tech__navbar-menu'>
        {toggleMenu 
          ? <RiCloseLine color="#fff" size={27} onClick={() => setToggleMenu(false)} />
          : <RiMenu3Line color="#fff" size={27} onClick={() => setToggleMenu(true)} />
        }
       {toggleMenu && (
          <div className='tech__navbar-menu_container scale-up-center'>
            <div className='tech__navbar-menu_container-links'>
              <Menu />
              <div className='tech__navbar-menu_container-links-sign'>
               <p>Sign in</p>
               <button type="button">Sign up</button>
              </div>
            </div>
          </div>
        )} 
      </div>
    </div>
)
}

export default Navbar
