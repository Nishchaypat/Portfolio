import React from 'react'
import'./contact.css'
import linkedin from '../../assets/linkedin.png'
import github from '../../assets/github.png'
import emailjs from '@emailjs/browser'
import { useRef } from 'react'

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_x6qx7vj', 'template_qsqntop', form.current, {
        publicKey: 'Z561a5RNf0ipWWDzy',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };
  function handleClick() {
    alert("Sent!");
  }
  return (
    <section className='contact'>    
        <div id='contact'>
            <h1 className='contactTitle'>Contact Form</h1>
            <span className='contactDesc'> Please fill out the following to connect or click the social media options </span>
            <form className='contactForm' ref={form} onSubmit={sendEmail}>
                <input type='text' className='name' placeholder='Your Name' name='your_name'/>
                <input type='email' className='email' placeholder='Email' name='your_email'/>
                <textarea className='msg' name='message' row='5' placeholder='Your Message'></textarea>
                <button type='submit' value='Send' className='btn' onClick={handleClick}> Submit </button>
                <div className='links'>
                <a href='https://github.com/nishchaypat' target='_blank' rel='noopener noreferrer'>
                <img src={github} alt='GitHub' className='link' />
                </a>
                <a href='https://linkedin.com/in/nishchay-pat' target='_blank' rel='noopener noreferrer'>
                <img src={linkedin} alt='' className='link'/>
                </a>
                </div>
            </form>
        </div>
    </section>
  )
}

export default Contact