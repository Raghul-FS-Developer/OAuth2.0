import React from 'react'
import "./navbar.css"
import {useNavigate} from 'react-router-dom'

function Navbar({ user,logout}) {
  const nav = useNavigate()

  return (
    <div className='navbar'>
    <span className='logo' onClick={()=>nav('/')} style={{cursor:"pointer"}}>OAuth App</span>
    { user ? (
    <ul className='list'>
    <li className=''>
    <img src={user?.picture} alt='' className='avatar'/>
    </li>
    <li className='listItem'>{user?.name}</li>
    <li className='listItem' onClick={logout}>Logout</li>
    </ul>
    ) : <span onClick={()=>nav('/login')} style={{cursor:"pointer"}}>Login</span>}
    </div>
  )
}

export default Navbar