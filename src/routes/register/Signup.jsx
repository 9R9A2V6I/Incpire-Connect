import React, { useState } from 'react';
import './Signup.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Signup() {
  const [inputData, setInputData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
    contactNo: '',
    professionType: '',
  });

  const navigate = useNavigate();

  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputData({
      ...inputData,
      [name]: value,
    });
  };

  const validate = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d@$!%*?&]{8,}$/;
    const contactNoRegex = /^[0-9]{10,10}$/;
    let errorMessage = '';

    if (!emailRegex.test(inputData.email)) {
      errorMessage = 'Invalid email format';
    } else if (!passwordRegex.test(inputData.password)) {
      errorMessage = 'password Wrong';
    } else if (inputData.password !== inputData.confirmPassword) {
      errorMessage = 'Passwords do not match';
    } else if (!contactNoRegex.test(inputData.contactNo)) {
      errorMessage = 'Contact No. between 10 and 15 ';
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
          username: inputData.username,
          email: inputData.email,
          password: inputData.password,
          confirmPassword: inputData.confirmPassword,
          contactNo: inputData.contactNo,
          professionType: inputData.professionType,
        }
      );

      if (response.status === 201) {
        navigate('/login');

        setInputData({
          username: '',
          email: '',
          password: '',
          confirmPassword: '',
          contactNo: '',
          professionType:" "
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
    <div className="signUpContainer">
      <section className="signUpSection">
        <form onSubmit={handleSubmit}>
          <h1 className="signUpHeader">Sign Up</h1>
          <div className="inputContainer">
            <div className="inputbox">
              <ion-icon name="mail-outline"></ion-icon>
              <input
                type="text"
                required
                name="username"
                value={inputData.username}
                onChange={handleChange}
              />
              <label>Username</label>
            </div>
            <div className="inputbox">
              <ion-icon name="lock-closed-outline"></ion-icon>
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
            <div className="inputbox">
              <ion-icon name="lock-closed-outline"></ion-icon>
              <input
                type="text"
                required
                name="contactNo"
                value={inputData.contactNo}
                onChange={handleChange}
              />
              <label>Contact No.</label>
            </div>
            <div className="professionBox mt-10">
              <label for="underline_select" class="sr-only">
                Your Profession
              </label>
              <select
                id="underline_select"
                name="professionType"
                value={inputData.professionType}
                onChange={handleChange}
                class="block py-2.5 px-0 w-full text-sm text-gray-500 bg-transparent border-0 border-b-2 border-gray-200 appearance-none dark:text-gray-400 dark:border-gray-700 focus:outline-none focus:ring-0 focus:border-gray-200 peer"
              >
                <option selected>Choose a Profession</option>
                <option value="influencer">influencer</option>
                <option value="client">client</option>
              </select>
            </div>
          </div>
          {error && <p className="error">{error}</p>}
          <button type="submit" className="signUpbtn">
            Sign Up
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
}

export default Signup;
