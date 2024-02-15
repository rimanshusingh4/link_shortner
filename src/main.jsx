import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Navbar from './component/Navbar/Navbar.jsx'
import Footer from './component/Footer/Footer.jsx'
import MainSection from './component/MainSection.jsx'
import bgAnim from './component/bgAnim.jsx'
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Navbar/>
    <MainSection/>
    <bgAnim/>
    <Footer/>
  </React.StrictMode>,
)
