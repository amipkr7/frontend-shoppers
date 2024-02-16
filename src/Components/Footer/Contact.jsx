import React from 'react'
import phone from '../Assets/phone.png'
import support from '../Assets/support.png'
import '../Footer/Contact.css'
import caller from '../Assets/caller.webp'
const Contact = () => {
  return (
    <div>
      <div className="main-container">
        <div className="right">
            <span>GET IN TOUCH</span>
            <p>Want to get in touch?We'd love to hear from you.Here's how u can reach to us</p>
          
        </div>
        <div className="left">
            <img src={caller} alt="" />
            
        </div>
      </div>
      <div className="down-container">
        <div className="left-wala">
            <img src={phone} alt="" /><br />
            <span>Talk to sales</span><br />
            <span>Just pick-up the phone to chat with a member of our sales team</span><br />
            <span>+91 6306988936</span>
        </div>
        <div className="right-wala">
            <img src={support} alt="" /><br />
            <span>Contact Customer Support</span><br />
            <span>Sometimes you need a little help ....No worry we are here for you</span>
        </div>
      </div>
    </div>
  )
}

export default Contact
