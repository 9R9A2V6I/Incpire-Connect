import React, { useState } from 'react';
import 'ionicons';
import '../login/Login.css';
import axios from 'axios';

const ForgetPass = () => {
  const [inputData, setInputData] = useState({
    password: '',
    confirmPassword: '',
  });

  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputData({
      ...inputData,
      [name]: value,
    });
  };

  const validate = () => {
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d@$!%*?&]{8,}$/;

    let errorMessage = '';

    if (!passwordRegex.test(inputData.password)) {
      errorMessage = 'password Wrong';
    } else if (inputData.password !== inputData.confirmPassword) {
      errorMessage = 'Passwords do not match';
    }

    setError(errorMessage);
    return errorMessage === '';
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validate()) {
      return;
    }

    try {
      const response = await axios.post(
        'http://localhost:5000/workout/users/signup',
        {
          password: inputData.password,
          confirmPassword: inputData.confirmPassword,
        }
      );

      if (response.status === 201) {
        alert('Registered successfully');
        setInputData({
          password: '',
          confirmPassword: '',
        });
        // Handle successful registration, e.g., navigate to another screen
      } else {
        setError(response.data.errors.join(', '));
      }
    } catch (error) {
      if (error.response && error.response.data.errors) {
        setError(error.response.data.errors.join(', '));
      } else {
        alert('An error occurred. Please try again.');
        console.error('Error:', error);
      }
    }
  };

  return (
    <div className="loginContainer">
      <section className="loginSection">
        <form onSubmit={handleSubmit}>
          <h1 className="signUpHeader">Forget Password</h1>

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
          <div className="inputbox">
            <ion-icon name="lock-closed-outline"></ion-icon>
            <input
              type="password"
              required
              name="confirmPassword"
              value={inputData.confirmPassword}
              onChange={handleChange}
            />
            <label>Confirm Password</label>
          </div>

          {error && <p className="error">{error}</p>}
          <button type="submit" className="loginBtn">
            Sign In
          </button>
          <div className="register">
            <p>
              If you have an account? <a href="login">Sign In</a>
            </p>
          </div>
        </form>
      </section>
    </div>
  );
};

export default ForgetPass;
