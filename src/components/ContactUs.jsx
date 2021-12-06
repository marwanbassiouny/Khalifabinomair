import React, { useRef } from 'react';
import emailjs from 'emailjs-com';
import Navbar from './Navbar';
import Footer from './Footer';
import { useTranslation } from 'react-i18next';

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
     <p>{t("contact-title6")}</p>
   )
  }

 const {t} = useTranslation()
 
  return (
    <div>
      <Navbar/>
  <div className="pageTitle">
    <div className="container">
      <div className="row">
        <div className="col-md-6 col-sm-6">
          <h1>About Us</h1>
        </div>
      </div>
    </div>
    </div>

      <div className="contactOverlay">
        <div className="container">
          <div className="form">
          <form ref={form} onSubmit={sendEmail}>
              <div className="formWord">
                <h2  data-aos="fade-down-right">{t("contact-title1")}</h2>
                <span>{t("contact-title2")}</span>
                <br />
                <input className="input100" type="text" name="fullName" required />
                <br />
                <span>{t("contact-title3")}</span>
                <br />
                <input className="input100" type="text" name="phone" required />
                <br />
                <span>{t("contact-title4")}</span>
                <br />
                <input className="input100" type="text" name="email" required />
                <br />
              </div>
              <div className="formWord">
                <span>{t("contact-title5")}</span>
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