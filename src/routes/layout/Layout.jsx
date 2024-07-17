import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import Navbar from '../../component/navabar/Navbar';
import './Layout.css';
import { useSelector } from 'react-redux';
import { toggle } from '../../redux/toggleSlice';
import {} from '../../redux/authSlice';
import Footer from '../../component/footer/Footer';

function Layout() {
  const toggleState = useSelector((state) => state.toggle.value);

  return (
    <div className={`layout  ${toggleState ? 'bg-black text-white' : ''}`}>
      <div className="navbar">
        <Navbar />
      </div>
      <div className="content">
        <Outlet />
      </div>
      <div className="footer">
        <Footer />
      </div>
    </div>
  );
}

function RequireAuth() {
  // const { currentUser } = useContext(AuthContext);
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  if (!isAuthenticated) return <Navigate to="/login" />;
  else {
    return (
      <div className="layout">
        <div className="navbar">
          <Navbar />
        </div>
        <div className="content">
          <Outlet />
        </div>
        <div className="footer">
          <Footer />
        </div>
      </div>
    );
  }
}

export { RequireAuth, Layout };
