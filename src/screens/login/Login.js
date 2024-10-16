import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { clearErrors, login } from '../../actions/userAction';
import { useAlert } from 'react-alert';
import { Link, useNavigate } from "react-router-dom";

import "./Login.css"
function Login() {
    const navigate = useNavigate()
    const dispatch = useDispatch();
    const alert = useAlert();
    const [email , setEmail] = useState("");

    const [password , setPassword] = useState("");

    const { error, loading, isAuthenticated } = useSelector(
        (state) => state.user
      );
    const handleSubmit =(e) => {
        e.preventDefault();
        dispatch(login(email, password));
      
    }
    useEffect(() => {
        if (error) {
          alert.error(error);
          dispatch(clearErrors());
        }
    
        if (isAuthenticated) {
            navigate("/")
        }
      }, [dispatch, error, alert, isAuthenticated]);
  return (
    <div className="login-container">

<div class="background">
        <div class="shape"></div>
        <div class="shape"></div>
    </div>
    <form className='login-form'  onSubmit={handleSubmit}>
        <h3>Login Here</h3>

        <label for="username">Username</label>
        <input type="text" placeholder="Email or Phone"   onChange={(e) => setEmail(e.target.value)} id="username"/> 

        <label for="password">Password</label>
        <input type="password" placeholder="Password"   onChange={(e) => setPassword(e.target.value)} id="password"/>

        <button className='login-btn'>Log In</button>
        <div class="social">
           Don't have account?  &nbsp;
           <Link to="/signUp" style={{color:"blue"}}>
            Sign up
           </Link>
        </div>
    </form>
      
 

  </div>
  )
}

export default Login