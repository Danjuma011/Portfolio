import React from 'react'
import "./contact.css"
import {MdOutlineMarkEmailRead} from 'react-icons/md'
import {BsWhatsapp} from 'react-icons/bs'
import { useRef } from 'react';
import emailjs from 'emailjs-com'

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_wg75n1e',
            'template_oxd3ryn', form.current, 'ap7TRNS7g_3fTjYFe')
      .then(() => {
          alert("message sent successfully");
      }, () => {
          alert("message not sent");
      });
      e.target.reset()
  };

  return (
    <section id='contact'>
      <h5> Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className='container contact__container'>
        <div className='contact__options'>
          <article className='contact__option'>
              <MdOutlineMarkEmailRead className='contact__option-icon'/>
              <h4>Email</h4>
              <h5>ayanfolarin@gmail.com</h5>
              <a href="mailto:ayanfolarin@gmail.com" target="_blank">Send A Message</a>
          </article>

          <article className='contact__option'>
              <BsWhatsapp className='contact__option-icon'/>
              <h4>WhatsApp</h4>
              <h5>+2349069079881</h5>
              <a href="https://wa.me/2349069079881" target="_blank">Send A Message</a>
          </article>
        </div>
        {/* END OF CONTACT OPTIONS */}
        <form ref={form} onSubmit= {sendEmail}>
          <input type="text" name='name' placeholder='Your Fullname' required />
          <input type="email" name='email' placeholder='Your Email' required />
          <textarea name="message" rows="7" placeholder='Your Message' required></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact
