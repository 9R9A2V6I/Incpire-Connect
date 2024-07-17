import React from 'react';
import './Navbar.css';
import logo from '../../assets/C.png';
import { useSelector,  } from 'react-redux';
import { toggle } from '../../redux/toggleSlice';


function Navbar() {
  const toggleState = useSelector((state) => state.toggle.value);
  return (
    <>
      <nav>
        <div className="left">
          <a href="/" className="logo">
            <img src={logo} alt="" />
          </a>
        </div>
        <div className="center">
          <a href="/">Home</a>
          <a href="/">About</a>
          <a href="connect">Contact</a>
          <a href="/">Agents</a>
          
        </div>
        <div className='right'>
            <a href="login" className={`loginBar '  ${toggleState ? 'border border-white text-#fff' : 'bg-black text-white'} `}>Log In</a>
            <a href="register" className={`signUpBar border ${toggleState ? 'bg-white text-black' : 'border border-black text-black'} `}>Sign up</a>
          </div>
      </nav>
    </>
  );
}

export default Navbar;
