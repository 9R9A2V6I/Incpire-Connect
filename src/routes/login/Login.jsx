import React, { useState } from 'react';
import 'ionicons';
import './Login.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();
  const [inputData, setInputData] = useState({
    email: '',
    password: '',
  });

  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputData({
      ...inputData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        'http://localhost:5000/workout/users/login',
        {
          email: inputData.email,
          password: inputData.password,
        }
      );

      if (response.status === 200) {
        const token = response.data.token; // Access the token from the response data
        localStorage.setItem('token', token);
        
        navigate('/');
        setInputData({
          email: '',
          password: '',
        });
        setErrorMessage('');
      } else {
        setErrorMessage(response.data.message || 'Invalid Email or Password');
      }
    } catch (error) {
      setErrorMessage(
        error.response?.data?.message || 'Invalid Email or Password '
      );
    }
  };

  return (
    <div className="loginContainer">
      <section className="loginSection">
        <form onSubmit={handleSubmit}>
          <h1 className="loginHeader">Login</h1>
          <div className="inputbox">
            <ion-icon name="mail-outline"></ion-icon>
            <input
              type="email"
              required
              name="email"
              value={inputData.email}
              onChange={handleChange}
            />
            <label>Email</label>
          </div>
          <div className="inputbox">
            <ion-icon name="lock-closed-outline"></ion-icon>
            <input
              type="password"
              required
              name="password"
              value={inputData.password}
              onChange={handleChange}
            />
            <label>Password</label>
          </div>
          <div className="forget">
            <label>
              <input type="checkbox" /> Remember Me
            </label>
            <a href="forgetPass">Forget Password</a>
          </div>
          {errorMessage && <p className="error">{errorMessage}</p>}
          <button type="submit" className="loginBtn">
            Log in
          </button>
          <div className="register">
            <p>
              Don't have an account? <a href="register">Register</a>
            </p>
          </div>
        </form>
      </section>
    </div>
  );
};

export default Login;
