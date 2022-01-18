import React from 'react'
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

 const Footer =()=>{
    
  
    const {t} = useTranslation()
    
    return (
                 
    <div className="site-footer">
      <div className="container">
        <div className="row">
          <div className="col col-lg-7">
            <h6>{t("aboutus")}</h6>
  
           <ul className="footer-about">
            <div className="col">
            <div className="col-10">
                <li><a href="https://www.google.com/maps/place/24%C2%B029'27.0%22N+54%C2%B021'52.3%22E/@24.490839,54.3623323,17z/data=!3m1!4b1!4m5!3m4!1s0x0:0x36c839cffff2cad1!8m2!3d24.490839!4d54.364521?hl=en"><LocationOnOutlinedIcon/></a>{t("abu dhabi")}</li>
                <li><a className='location' href="https://api.whatsapp.com/send?phone=+971 50 256 7619"><WhatsAppIcon/></a></li>
                <p>{t("street2")}</p>
                </div>
                <div className="col">
                <div className="col-10">
                <li><a href="https://www.google.com/maps/place/Roti+King+Sweet+Bakery+UAQ/@25.577992,55.5584253,17z/data=!3m1!4b1!4m5!3m4!1s0x3ef5fe6982298af3:0xb59122b5d07a9d3f!8m2!3d25.577992!4d55.560614"><LocationOnOutlinedIcon/></a>{t("dubai")}</li>
                <li><a className='location' href="https://api.whatsapp.com/send?phone=+9710501040332"><WhatsAppIcon/></a></li>
                <p>{t("street1")}</p>
                </div>
              </div>
          </div>
          
         
          <div className="col">
            <div className="col-12">
                <li><a href="https://www.google.com/maps/place/Roti+King+Sweet+Bakery+UAQ/@25.577992,55.5584253,17z/data=!3m1!4b1!4m5!3m4!1s0x3ef5fe6982298af3:0xb59122b5d07a9d3f!8m2!3d25.577992!4d55.560614"><LocationOnOutlinedIcon/></a>{t("al")}</li>
                <li><a className='location' href="https://api.whatsapp.com/send?phone="><WhatsAppIcon/></a></li>
                <p>{t("street4")}</p>
            </div>
            <div className="col">
                <div className="col-12">
                  <li><a href="https://www.google.com/maps/place/Roti+King+Sweet+Bakery+UAQ/@25.577992,55.5584253,17z/data=!3m1!4b1!4m5!3m4!1s0x3ef5fe6982298af3:0xb59122b5d07a9d3f!8m2!3d25.577992!4d55.560614"><LocationOnOutlinedIcon/></a>{t("umm")}</li>
                  <li><a className='location' href="https://api.whatsapp.com/send?phone="><WhatsAppIcon/></a></li>
                  <p>{t("street3")}</p>
                </div>
              </div>
          </div>
        </ul>     
</div>

          <div className="col-lg-3">
            <h6>{t("servicee")}</h6>
            <ul className="footer-links">
              <li><Link to="Services/realstate">{t("service-title1")}</Link></li>
              <li><Link to="Services/maritime">{t("service-title2")}</Link></li>
              <li><Link to="Services/commerical">{t("service-title3")}</Link></li>
              <li><Link to="Services/litigation">{t("service-title4")}</Link></li>
              <li><Link to="Services/labor">{t("service-title5")}</Link></li>
              <li><Link to="Services/Criminal">{t("service-title9")}</Link></li>
            </ul>
          </div>

          <div className="col col-lg-2">
            <h6>{t("links")}</h6>
            <ul className="footer-links">
              <li><Link to="/home"> {t("home")}</Link></li>
              <li><Link to="/Aboutus">{t("aboutus")}</Link></li>
              <li><Link to="/Services">{t("service")}</Link></li>
              <li><Link to="/contactus">{t("contactus")}</Link></li>
              
            </ul>
          </div>
        </div>
        <hr/>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-md-8 col-sm-6 col-xs-12">
            <p className="copyright-text">{t("copyright")}</p>
          </div>
       
          <div className="col-md-4 col-sm-6 col-xs-12">
            <ul className="social-icons">
              <li><a className="facebook" href="#"><FacebookOutlinedIcon/></a></li>
              <li><a className="twitter" href="#"><TwitterIcon/></a></li>
              <li><a className="instagram" href="#"><InstagramIcon/></a></li>  
            </ul>
          </div>
        </div>
      </div>    
    </div>
        )
    }

    export default Footer;