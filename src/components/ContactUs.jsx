import React, { useRef } from 'react';
import emailjs from 'emailjs-com';

import { useTranslation } from 'react-i18next';

export const ContactUs = () => {
  
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_h80ku9v', 'template_ksvm5ot', form.current, 'user_bkM0j5yDihVsFe9cmM0VD')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      form.current.reset();
  };
 

 const {t} = useTranslation()
 
  return (
    <div>
  <div className="pageTitle">
    <div className="container">
      <div className="row">
        <div className="col-md-6 col-sm-6">
          <h1>{t("contactus")}</h1>
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
                <span>{t("contact-title5")}</span>
                <br />
                <textarea name="message" required></textarea>
                <br />
                <input className="button" type="submit" value={t("send")} />
              </div>
      
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};