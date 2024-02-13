import React from 'react'
import './Footer.css'

function Footer() {
  return (
    <div className='footer'>
        <div className='logo'>
        <img src='https://alexharkness.com/wp-content/uploads/2020/06/logo-2.png' height={60} alt='logo'/>
        </div>
        <div className='items-footer'>
            <div className='follow'>
                <li style={{fontWeight: "bold"}}>Resource</li>
                <li>Home</li>
                <li>About-us</li>
            </div>
            <div className='follow'>
                <li style={{fontWeight: "bold"}}>Follow</li>
                <li>Github</li>
                <li>Discord</li>
            </div>
            <div className='follow'>
                <li style={{fontWeight: "bold"}}>Legal</li>
                <li>Privacy & Policy</li>
                <li>Terms & Conditions</li>
            </div>
        </div>
    </div>
  )
}

export default Footer