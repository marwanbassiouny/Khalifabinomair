import React, { useRef } from 'react';
import emailjs from 'emailjs-com';
import Navbar from './Navbar';
import Footer from './Footer';

export const ContactUs = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_uu4l072', 'template_308a8p1', form.current, 'user_gpy1SwY6VxPTsL7tyPtsz')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      form.current.reset();
  };
  const result=()=>{
   return(
     <p>the message is sent </p>
   )
 }
  return (
    <div>
      <Navbar/>
      <div className="contactOverlay">
        <div className="container">
          <div className="form">
          <form ref={form} onSubmit={sendEmail}>
              <div className="formWord">
                <h2>Say Hello!</h2>
                <span>Full Name</span>
                <br />
                <input className="input100" type="text" name="fullName" required />
                <br />
                <span>Phone Number</span>
                <br />
                <input className="input100" type="text" name="phone" required />
                <br />
                <span>Enter Email</span>
                <br />
                <input className="input100" type="text" name="email" required />
                <br />
              </div>
              <div className="formWord">
                <span>Message</span>
                <br />
                <textarea name="message" required></textarea>
                <br />
                <input className="button" type="submit" value="Send" />

                <div className="row"></div>
              </div>
            </form>
          </div>
        </div>
      </div>
    <Footer/>
    </div>
  );
};