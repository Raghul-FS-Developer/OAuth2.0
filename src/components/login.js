import React from "react";
import "./login.css";
import { BsGoogle } from "react-icons/bs";


function Login({loginWithPopup}) {
 
  return (
    <div className="login">

      <div className="wrapper">
        <div className="left">
        <h1 className="loginTitle">Choose a Login Method</h1>
          <div className="loginButton google" onClick={loginWithPopup}>
            <BsGoogle className="icon " />
            Google
          </div>
         
        </div>
        <div className="center">
          <div className="line" />
          <div className="or">OR</div>
        </div>
        <div className="right">
          <input type="text" placeholder="Username" />
          <input type="password" placeholder="Password" />
          <button className="submit" disabled>Login</button>
        </div>
      </div>
    </div>
  );
}

export default Login;
