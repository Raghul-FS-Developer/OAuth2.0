import Home from "./components/home";
import Navbar from "./components/navbar";

import Login from "./components/login";
import {Routes ,Route, Navigate}  from 'react-router-dom' 
import Intro from "./components/intro";
import { useEffect, useState} from "react";

import REACT_URL from "./db";
function App() {
  const [user,setUser] =useState(null);

  useEffect(()=>{
    
   const getUser =  ()=>{
     fetch(`${REACT_URL}/login/success`,{
      method: "GET",
      credentials: "include",
      headers:{
        Accept:"application/json",
        "Content-Type":"application/json",
        "Access-Control-Allow-Credential":true,
       },
     }).then((response)=> {
      if(response.status === 200) return response.json()
      throw new Error("authentication")
     }).then(resObject=>{
      setUser(resObject.user)
     }).catch((err) => {console.log(err)})
   }
   getUser()
  },[])
  console.log(user)
  return (
   <>
   <Navbar user={user}/>
  <Routes>
    <Route path='/' element={<Intro/>}/>
  <Route path='/home' element={ user ? <Home/> : <Navigate to='/login'/>}/>
  <Route path='/login' element={user ? <Navigate to='/home'/> :<Login/>}/>  
    
  </Routes>

    
       </>
  );
}

export default App;
