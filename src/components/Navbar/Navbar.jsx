import React from 'react'
import './Navbar.css'

const Navbar = () => {
  return (
    <nav className='container'>
        <div>
            <img src='/images/Frame 2 1.png' alt='my logo'/ >
        </div>

        <ul>
            <li>Home</li>
            <li>About</li>
            <li>More</li>
        </ul>
    </nav>
  )
}

export default Navbar