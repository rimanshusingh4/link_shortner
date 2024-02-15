import React from 'react'
import './Footer.css'
import Logo from '../../assets/logo.png'
function Footer() {
  return (
    <>
     <div className='footer'>
        <div className='logo'>
        <img src={Logo} height={60} alt='logo'/>
        <p>There is always one more bug to fix.</p>
        </div>
        <div className='items-footer'>
            <div className='follow'>
                <h3>Useful links</h3>
                <ul>
                    <li>Home</li>
                <li>About-us</li>
                </ul>
            </div>
            <div className='follow'>
                <h3>Connect</h3>
               <ul>
               <li>Github</li>
                <li>Discord</li>
               </ul>
            </div>
            <div className='follow'>
                <h3>Legal</h3>
                <ul>
                    <li>Privacy & Policy</li>
                <li>Terms & Conditions</li>
                </ul>
                
            </div>
        </div>

    </div>

    <div className='credit'>
        <p>Copyright 2024 | Developed By Rimanshu & Shakshi</p>
    </div>
    </>
   
  )
}

export default Footer