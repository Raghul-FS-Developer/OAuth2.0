import React from 'react'
import "./navbar.css"
import {useNavigate} from 'react-router-dom'
import REACT_URL from '../db'
function Navbar({user}) {
  const nav = useNavigate()
  const logout =()=>{
    window.open(`${REACT_URL}/logout`,"_self")
  }
  return (
    <div className='navbar'>
    <span className='logo' onClick={()=>nav('/')} style={{cursor:"pointer"}}>OAuth App</span>
    { user ? (
    <ul className='list'>
    <li className=''>
    <img src={user.photos[0].value} alt='' className='avatar'/>
    </li>
    <li className='listItem'>{user.displayName}</li>
    <li className='listItem' onClick={logout}>Logout</li>
    </ul>
    ) : <span onClick={()=>nav('/login')} style={{cursor:"pointer"}}>Login</span>}
    </div>
  )
}

export default Navbar