import React from 'react'
import './Nav.css'
const Nav = () => {
  return (
    <div><nav>
        <div className='logo'>
        <img src="/images/brand_logo.png" alt="logo" />
        </div>
        <ul>
          
          <li href="#">menu</li>
          <li href="#">Location</li>
          <li href="#">About</li>
          <li href="#">Contact</li>
    </ul>
    <button>Login</button>
      </nav></div>
  )
}

export default Nav