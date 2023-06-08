import React, { useRef } from 'react'
import emailjs from '@emailjs/browser';
import './Contact.css'

const Contact = () => {
    const form = useRef();
    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_o5r4fdj', 'template_n87tw4l', form.current, '7-iJou_mtFeypOg1K')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
        e.target.reset();
    };
  return (
    <div className='contact'>
            <div className="container">
                <div className="form-container">
                    <form ref={form} onSubmit={sendEmail}>
                        <h1><span>Contact</span> Us</h1>
                        <div>
                            <label>Name</label>
                            <input type="text" name="user_name" placeholder='Enter your name' required/>
                        </div>
                        <div>
                            <label>Email</label>
                            <input type="email" name="user_email" placeholder='Enter your email' required/>
                        </div>
                        <div>
                            <label>Message</label>
                            <textarea rows='10' name="message" placeholder='Enter your message'/>
                        </div>
                        <button>Submit</button>
                    </form>
                </div>
            </div>
        </div>
  )
}

export default Contact
