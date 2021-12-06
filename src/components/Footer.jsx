import React from 'react'
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import { useTranslation } from 'react-i18next';

 const Footer =()=>{
    
  
    const {t} = useTranslation()
    
    return (
                 
    <div className="site-footer">
      <div className="container">
        <div className="row">
          <div className="col-sm-12 col-md-6">
            <h6>About</h6>
            <p className="text-justify">{t("footer-about")}</p>
          </div>

          <div className="col-xs-6 col-md-3">
            <h6>Services</h6>
            <ul className="footer-links">
              <li><a href="">{t("service-title1")}</a></li>
              <li><a href="">{t("service-title2")}</a></li>
              <li><a href="">{t("service-title3")}</a></li>
              <li><a href="">{t("service-title4")}</a></li>
              <li><a href="">{t("service-title5")}</a></li>
              <li><a href="">{t("service-title6")}</a></li>
            </ul>
          </div>

          <div className="col-xs-6 col-md-3">
            <h6>Quick Links</h6>
            <ul className="footer-links">
              <li><a href="http://scanfcode.com/about/"> {t("home")}</a></li>
              <li><a href="http://scanfcode.com/contact/">{t("aboutus")}</a></li>
              <li><a href="http://scanfcode.com/contribute-at-scanfcode/">{t("service")}</a></li>
              <li><a href="http://scanfcode.com/privacy-policy/">{t("contactus")}</a></li>
              
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