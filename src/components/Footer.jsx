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
                <li><LocationOnOutlinedIcon/>{t("dubai")}</li>
                <li><a href="https://api.whatsapp.com/send?phone=+9710501040332"><WhatsAppIcon/></a></li>
                <p>{t("street1")}</p>
                <div className="col">
                <li><LocationOnOutlinedIcon/>{t("abu dhabi")}</li>
                <li><a href="https://api.whatsapp.com/send?phone=+971 50 256 7619"><WhatsAppIcon/></a></li>
                <p>{t("street2")}</p>
                
                </div>
            </div>
          
         
            <div className="col">
                <li><LocationOnOutlinedIcon/>{t("umm")}</li>
                <li><a href="https://api.whatsapp.com/send?phone="><WhatsAppIcon/></a></li>
                <p>{t("street3")}</p>
                <div className="col">
                <li><LocationOnOutlinedIcon/>{t("al")}</li>
                <li><a href="https://api.whatsapp.com/send?phone="><WhatsAppIcon/></a></li>
                <p>{t("street4")}</p>
                
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