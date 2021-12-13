import React, { Component } from 'react';
import LanguageSwitcher from './LanguageSwitcher';
import { useTranslation } from 'react-i18next';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import { Link } from 'react-router-dom';
 
const Navbar =()=> {
    
  const {t} = useTranslation()
        
        return (

<div className="fixed">
        <div className="header">
            <div className="container">
                 <Link to="#" className="iconbtn "><FacebookOutlinedIcon/></Link>
                 <Link to="#" className="iconbtn"></Link>
                 <Link to="#" className="iconbtn"></Link>
                 <div className='dropdown'>
                   <LanguageSwitcher/>
                 </div>
                
               
                </div>
              </div>
        
<nav className="navbar navbar-expand-lg navbar-dark ">
    <div className="container container-fluid">
        <Link to="/"><img src="" alt=""></img></Link>
                <h3 className="navtext"></h3>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse " id="navbarNavAltMarkup">
                  <div className="navbar-nav mx-auto">
                 
                    <Link  to="/Home">{t("home")}</Link>
                    <Link to="/Aboutus">{t("aboutus")}</Link>
                    <Link  to="/Services">{t("service")}</Link>
                    <Link  to="/contactus" tabindex="-1" aria-disabled="true">{t("contactus")}</Link>
                  </div>
                </div>
              </div>
            </nav>
        
    </div>
        )
    }

    export default Navbar;