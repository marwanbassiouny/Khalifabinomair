import React from 'react'
import Navbar from './Navbar';
import Footer from './Footer';
import { useTranslation } from 'react-i18next';
 
const Services=()=> {
  const {t} = useTranslation()
return (
<div>
  <div className="pageTitle">
  <div className="container">
    <div className="row">
      <div className="col-md-6 col-sm-6">
        <h1>About Us</h1>
      </div>
    </div>
  </div>
  </div>
  
    <div className="pd-y">
     <div className="wel-head">
      <h2 className="wel-title">{t("service")}</h2>
        <span className="linee"></span>
      </div>
      

      <div className="main-box">
          <div data-aos="flip-down" className="box ">
          <div className="icon">
            <i className="fas fa-desktop"></i>
          </div>
          <h5>{t("service-title1")}</h5>
          <span className="line"></span>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Assumenda labore.</p>          
        </div>

        <div data-aos="flip-down" className="box">
          <div className="icon">
            <i className="fas fa-globe"></i>
          </div>
          <h5>{t("service-title2")}</h5>
          <span className="line"></span>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Assumenda labore.</p>
        </div>
        
        <div data-aos="flip-down" className="box ">
          <div className="icon">
            <i className="fas fa-search"></i>
          </div>
          <h5>{t("service-title3")}</h5>
          <span className="line"></span>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Assumenda labore.</p>
        </div>

        <div data-aos="flip-down" className="box ">
          <div className="icon">
            <i className="fas fa-search"></i>
          </div>
          <h5>{t("service-title5")}</h5>
          <span className="line"></span>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Assumenda labore.</p>
        </div>

        <div data-aos="flip-down" className="box ">
          <div className="icon">
            <i className="fas fa-search"></i>
          </div>
          <h5>{t("service-title5")}</h5>
          <span className="line"></span>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Assumenda labore.</p>
        </div>
        
        <div data-aos="flip-down" className="box ">
          <div className="icon">
            <i className="fas fa-search"></i>
          </div>
          <h5>{t("service-title6")}</h5>
          <span className="line"></span>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Assumenda labore.</p>
        </div>

        <div data-aos="flip-down" className="box ">
          <div className="icon">
            <i className="fas fa-search"></i>
          </div>
          <h5>{t("service-title7")}</h5>
          <span className="line"></span>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Assumenda labore.</p>        
        </div>

        <div data-aos="flip-down" className="box ">
          <div className="icon">
            <i className="fas fa-search"></i>
          </div>
          <h5>{t("service-title7")}</h5>
          <span className="line"></span>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Assumenda labore.</p>        
        </div>

        <div data-aos="flip-down" className="box ">
          <div className="icon">
            <i className="fas fa-search"></i>
          </div>
          <h5>{t("service-title7")}</h5>
          <span className="line"></span>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Assumenda labore.</p>        
        </div>

      </div>
      </div>
    </div>
        
    )
}
export default Services;