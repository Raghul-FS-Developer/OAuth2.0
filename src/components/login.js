import React from "react";
import "./login.css";
import { BsGoogle } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";
import { AiFillGithub } from "react-icons/ai";
import REACT_URL from "../db";
function Login() {

  const google = ()=>{
  window.open(`${REACT_URL}/google`,"_self")
  }
  const github = ()=>{
    window.open(`${REACT_URL}/github`,"_self")
  }
  const twitter = ()=>{
    window.open(`${REACT_URL}/twitter`,"_self")
  }
  return (
    <div className="login">
      <h1 className="loginTitle">Choose a Login Method</h1>
      <div className="wrapper">
        <div className="left">
          <div className="loginButton google" onClick={google}>
            <BsGoogle className="icon " />
            Google
          </div>
          <div className="loginButton  facebook" onClick={twitter} >
            <FaFacebookF className="icon" />
            Facebook
          </div>
          <div className="loginButton  github" onClick={github}>
            <AiFillGithub className="icon" size={20} />
            Github
          </div>
        </div>
        <div className="center">
          <div className="line" />
          <div className="or">OR</div>
        </div>
        <div className="right">
          <input type="text" placeholder="Username" />
          <input type="password" placeholder="Password" />
          <button className="submit">Login</button>
        </div>
      </div>
    </div>
  );
}

export default Login;
