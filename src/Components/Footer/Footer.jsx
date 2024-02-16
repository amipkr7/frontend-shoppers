import React from 'react'
import '../Footer/Footer.css'
import footer_logo from '../Assets/logo_big.png'
import instagram_icon from '../Assets/instagram_icon.png'
import pintester_icon from '../Assets/pintester_icon.png'
import whatsapp_icon from '../Assets/whatsapp_icon.png'
import {Link} from 'react-router-dom'

function Footer() {
  return (
    <div className='footer'>
      <div className="footer-logo">
        <img src={footer_logo} alt="" />
        <p>SHOPPER</p>
        </div>
        <ul className="footer-links">
         <Link to="/company"><li>Company</li></Link> 
          <Link to="/products"><li>Products</li></Link>
          <Link to="/offices"><li>Offices</li></Link>
          <Link to="/about"><li>About</li></Link>
          <Link to="/contact"><li>Contact</li></Link>
        </ul>
        <div className="footer-social-icon">
          <div className="footer-icons-container">
            <img src={instagram_icon} alt="" />
          </div>
          <div className="footer-icons-container">
            <img src={pintester_icon} alt="" />
          </div>
          <div className="footer-icons-container">
            <img src={whatsapp_icon} alt="" />
          </div>
        </div>
        <div className="footer-copyright">
          <hr />
          <p>Copyright @2023-All Right reserved</p>
        </div>
      </div>
   
  )
}

export default Footer
