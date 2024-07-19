import React, { useState, useEffect } from 'react';
import './Navbar.css';
import logo from '../../assets/C.png';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';


import { logout } from '../../redux/authSlice';
import ProfileIcon from '../../assets/Gifs/output-onlinegiftools.gif';
import Sidebar from '../sidebar/Sidebar';

function Navbar() {
 
  const toggleState = useSelector((state) => state.toggle.value);
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const handleLogout = () => {
    dispatch(logout());
  };

 

  useEffect(() => {}, [navigate, handleLogout]);

  return (
    <>
      <nav className="">
        <div className="w-11/12 flex justify-between items-center">
          <div className="left">
            <a href="/" className="logo">
              <img src={logo} alt="Logo" />
            </a>
          </div>
          <div className="center">
            <a href="/">Home</a>
            <a href="/">About</a>
            <a href="connect">Contact</a>
            <a href="allInfuc">Agents</a>
          </div>
          <div className="right">
            {isAuthenticated ? (
              <>
                <div
                  className={`loginBar cursor-pointer ${
                    toggleState
                      ? 'border border-white text-#fff'
                      : 'bg-black text-white'
                  }`}
                  onClick={handleLogout}
                >
                  Log Out
                </div>
                <img
                  src={ProfileIcon}
                  alt="Profile"
                  className="w-14 h-14 cursor-pointer"
                  onClick={toggleSidebar}
                />
              </>
            ) : (
              <>
                <a
                  href="login"
                  className={`loginBar ${
                    toggleState
                      ? 'border border-white text-#fff'
                      : 'bg-black text-white'
                  }`}
                >
                  Log In
                </a>
                <a
                  href="register"
                  className={`signUpBar border ${
                    toggleState
                      ? 'bg-white text-black'
                      : 'border border-black text-black'
                  }`}
                >
                  Sign up
                </a>
              </>
            )}
          </div>
        </div>
      </nav>
      <Sidebar toggleSidebar={toggleSidebar} isSidebarOpen={isSidebarOpen}/>
    </>
  );
}

export default Navbar;
