import React from 'react'
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

 const Footer =()=>{
    
  
    const {t} = useTranslation()
    
    return (
                 
    <div className="site-footer">
      <div className="container">
        <div className="row">
          <div className="col-sm-12 col-md-6">
            <h6>{t("aboutus")}</h6>
            <p className="text-justify">{t("footer-about")}</p>
          </div>

          <div className="col-xs-6 col-md-3">
            <h6>{t("servicee")}</h6>
            <ul className="footer-links">
              <li><Link to="/realstate">{t("service-title1")}</Link></li>
              <li><Link to="/maritime">{t("service-title2")}</Link></li>
              <li><Link to="/commerical">{t("service-title3")}</Link></li>
              <li><Link to="/litigation">{t("service-title4")}</Link></li>
              <li><Link to="/labor">{t("service-title5")}</Link></li>
              <li><Link to="/Criminal">{t("service-title9")}</Link></li>
            </ul>
          </div>

          <div className="col-xs-6 col-md-3">
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