import React,{useState} from 'react';

import { useTranslation } from 'react-i18next';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import { Link } from 'react-router-dom';
import LocaleContext from './LocaleContext';
import { useContext } from 'react';
import { Navbar,Nav,Container,NavDropdown} from 'react-bootstrap';
import i18n from "i18next";

const Navbarr =()=> {
  const { locale } = useContext(LocaleContext);

  const {t} = useTranslation()

  function changeLocale (l) {
    if (locale !== l) {
      i18n.changeLanguage(l);
    }
  }
  
  
  return (

<div className="fixed">
  <div className="header">
            <div className="container">
                 <Link to="#" className="iconbtn "><FacebookOutlinedIcon/></Link>
                 <Link to="#" className="iconbtn"></Link>
                 <Link to="#" className="iconbtn"></Link>
                 <div className='dropdown'>
                 <NavDropdown title={t('language')} id="basic-nav-dropdown"> 
                    <NavDropdown.Item  onClick={() => changeLocale('en')}>English</NavDropdown.Item>
                    <NavDropdown.Item  onClick={() => changeLocale('ar')}>العربية</NavDropdown.Item>
                 </NavDropdown>
                 </div>
                </div>
              </div>

<Navbar className='navbar'  expand="lg">
  <Container>
    <Navbar.Brand href="/home"><img src="" alt=""></img></Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="navbar-nav mx-auto">
        <Nav.Link href="/Home">{t("home")}</Nav.Link>
        <Nav.Link href="/Aboutus">{t("aboutus")}</Nav.Link>
        <Nav.Link href="/Services">{t("service")}</Nav.Link>
        <Nav.Link href="/contactus" >{t("contactus")}</Nav.Link>
        
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
</div>
         
  /*      
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
         */
    
        )
    }

    export default Navbarr;