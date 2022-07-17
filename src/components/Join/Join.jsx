import React from 'react'
import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import './Join.css'

const Join = () => {
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_a2pwokr', 'template_l80zqri', form.current, 'pEcwO79xRbejV2qb9')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
      };

  return (
      <div className="Join" id="join-us">
          <div className="left-j">
              <hr />
                <div>
                  <span className='stroke-text'>READY TO </span>
                  <span>LEVEL UP</span>
                  </div>
                <div>
                  <span >YOUR BODY</span>
                  <span className='stroke-text'>WITH US?</span>
                </div>
          </div>
          <div className="right-j">
            
               <form className='email-container' ref={form} onSubmit={sendEmail}>
                    <input  type="email" name='user_email' placeholder='Enter Your Email Address' />
                    <input type="text" name='user_name' placeholder='enter name' />
                    <button
                    className='btn btn-j'>Join Now</button>
               </form>
               
          </div>
      </div>
  )
}

export default Join