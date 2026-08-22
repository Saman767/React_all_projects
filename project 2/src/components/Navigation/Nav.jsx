import React from 'react'
import styles from './Nav.module.css'
const Nav = () => {
  return (
    <nav className={`${styles.navigation} container`} >
        <div className='logo'>
            <img src="/images/Frame 2 1.png" alt="logo" />
        </div>
        <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Contact</a></li>
            
        </ul>
    </nav>
  )
}

export default Nav