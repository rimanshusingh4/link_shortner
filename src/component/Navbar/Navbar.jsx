import React from 'react'
import  './Navbar.css'
function Navbar() {
  return (
    <>
        <nav className='container1'>
          <div className='items'>
            <div className='logo'>
              <img src='https://alexharkness.com/wp-content/uploads/2020/06/logo-2.png' height={60} alt='logo'/>
            </div>
            <div className='list'>
              <ul className='lists'>
                <li>Home</li>
                <li>Service</li>
                <li>About-us</li>
              </ul>
            </div>
            <div>
              <button className='button'>Login</button>
              <button className='button'>Register</button>
            </div>
          </div>
        </nav>
    </>
  )
}

export default Navbar