import React from 'react'
import '../NewsLetter/NewsLetter.css'
import { useRef } from 'react';
import emailjs from '@emailjs/browser';


function NewsLetter() {
  const form = useRef();

  // function clicker()
  // {
  //   alert("E-mail has been send")
  // }

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_0ff5qmk', 'template_cw9vm3i', form.current, 'FX2D7LxFbaeeOORIV')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };
  return (
    <div className='newsletter'>
      <h1>Get Exclusive Offers On Your Email</h1>
      <p>Subscribe to our newsletter and stay updated</p>
      <div className='insider'>
         {/* <input type="email" placeholder='Your Email id'/>
         <button>Subscribe</button> */}
         <form ref={form} onSubmit={sendEmail}>
      <label>Name</label>
      <input type="text" name="user_name" /><br /><br />
      <label>Email</label>
      <input type="email" name="user_email" /><br /><br />
      <label>Message</label>
      <textarea name="message" /><br /><br />
      <input type="submit" onClick={clicker=>{alert("message has been send")}} value="Send" /><br />
    </form>
      </div><br /><br />
    </div>
  )
}

export default NewsLetter
