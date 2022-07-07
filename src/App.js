import Home from "./components/home";
import Navbar from "./components/navbar";
import {useAuth0} from '@auth0/auth0-react'
import Login from "./components/login";
import {Routes ,Route, Navigate}  from 'react-router-dom' 
import Intro from "./components/intro";




function App() {
  const {loginWithPopup, logout, user ,isAuthenticated} = useAuth0() 
  
  

  return (
   <>
   <Navbar user={user} logout={logout}/>
  <Routes>
    <Route path='/' element={<Intro/>}/>
  <Route path='/home' element={ 
     isAuthenticated ?
     <Home/> 
     : <Navigate to='/login'/>
     }/>
  <Route path='/login' element={
   isAuthenticated ?
     <Navigate to='/home'/> :
     <Login loginWithPopup={loginWithPopup}/>
     }/>  
    
  </Routes>

    
       </>
  );
}

export default App;
