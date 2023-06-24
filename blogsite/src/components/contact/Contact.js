import React, { useRef, useState } from 'react';
import { IoMdClose } from 'react-icons/io';
import emailjs from '@emailjs/browser';
import './Contact.css';

const Contact = () => {
  const form = useRef();
  const [showDialog, setShowDialog] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_o5r4fdj', 'template_n87tw4l', form.current, '7-iJou_mtFeypOg1K')
      .then((result) => {
        console.log(result.text);
        setShowDialog(true);
      })
      .catch((error) => {
        console.log(error.text);
      });
    e.target.reset();
  };

  const handleClose = () => {
    setShowDialog(false);
  };

  return (
    <div className="contact">
      <div className="container">
        <div className="form-container">
          <form ref={form} onSubmit={sendEmail}>
            <h1>
              <span>Contact</span> Us
            </h1>
            <div>
              <label>Name</label>
              <input type="text" name="user_name" placeholder="Enter your name" required />
            </div>
            <div>
              <label>Email</label>
              <input type="email" name="user_email" placeholder="Enter your email" required />
            </div>
            <div>
              <label>Message</label>
              <textarea rows="10" name="message" placeholder="Enter your message" />
            </div>
            <button>Submit</button>
          </form>
        </div>
      </div>
      {showDialog && (
        <div className="dialog">
          <p>Message sent successfully!</p>
          <IoMdClose className="close-icon" onClick={handleClose} />
        </div>
      )}
    </div>
  );
};

export default Contact;
