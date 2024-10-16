import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

import { signUp } from '../../actions/userAction';
import "./SignUp.css"
function SignUp() {
  const navigate = useNavigate()

  const { isAuthenticated, user } = useSelector((state) => state.user);


  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();

  useEffect(() => {
    if (isAuthenticated) {
      navigate("/")
  }
  }, [])
  

  const handleSubmit = async (e) => {
    e.preventDefault();
  //gdfg
    try {
      const userData = { name, email, password };
      dispatch(signUp(userData));


    } catch (error) {
      console.error('User registration failed:', error.response.data.message);
    }
  };

  return (
    <div className="login-container">


<div class="background">
        <div class="shape"></div>
        <div class="shape"></div>
    </div>
    <form className="login-form"  onSubmit={handleSubmit}>
        <h3>Sign Up Here</h3>

        <label for="username">Name</label>

  <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="signup-input"
      />
        <label for="username">Username</label>
      
        <input type="text" placeholder="Email or Phone"   onChange={(e) => setEmail(e.target.value)} id="username"/>

        <label for="password">Password</label>
        <input type="password" placeholder="Password"   onChange={(e) => setPassword(e.target.value)} id="password"/>

        <button className='login-btn'>Log In</button>
        <div class="social">
        have account?  &nbsp;
           <Link to="/signUp" style={{color:"blue"}}>
            Sign in
           </Link>
        </div>
    </form>


  </div>
  );
}

export default SignUp;
