import React  from 'react'
import image from "../mohamed khalil.jpg"
import GavelOutlinedIcon from '@mui/icons-material/GavelOutlined';
import AccountBalanceOutlinedIcon from '@mui/icons-material/AccountBalanceOutlined';
import WorkOutlinedIcon from '@mui/icons-material/WorkOutlined';
import "aos/dist/aos.css"
import { useTranslation } from 'react-i18next';
import Carousel from './Carousel';
import Navbar from './Navbar';
import Footer from './Footer';

const Home =()=> {
    
    const {t} = useTranslation()
    
    return(
<div>
  <Navbar/>
  <Carousel/>
  <div className="container">
    <div className="howitwrap">
            <div className="row">
                <div className="col-md-4"><img src={image} alt="" /></div>
                    <div className="col-md-8">
                        <div className="stcontent"> 
          
          <div className="section-title">
            <h3 className="titlee" data-aos="fade-down" data-aos-offset="300" data-aos-easing="ease-in-sine">
              {t("welcome")} <span data-aos="fade-down">{t("to")}</span></h3> 
            <p data-aos="fade-right">{t("Introduction")}</p> 
          </div>
          
          <ul className="howlist">
            <li>
              <div className="howbox">
                <div data-aos="fade-right" className="iconcircle"><GavelOutlinedIcon /></div>
                <h4 data-aos="fade-left">{t("vision")}</h4>
                <p data-aos="fade-left">{t("ourvision")}</p>
              </div>
            </li>
           
            <li>
              <div className="howbox">
                <div data-aos="fade-right" className="iconcircle"><AccountBalanceOutlinedIcon/></div>
                <h4 data-aos="fade-left">{t("message")}</h4>
                <p data-aos="fade-left">{t("ourmessage")}
                </p>
              </div>
            </li>         
            
            <li>
              <div className="howbox">
                <div data-aos="fade-right" className="iconcircle"><WorkOutlinedIcon /></div>
                <h4 data-aos="fade-left">{t("fightforjustice")}</h4>
                <p data-aos="fade-left"> {t("justice")}</p>
              </div>
            </li> 
        
          </ul>
        </div>
      </div>
    </div>
  </div>
</div>
  
<div className="pd-y flex-container">
<div className="wel-head">
      <h2 className="wel-title">About Us</h2>
        <span className="linee"></span>
        </div>
  <div data-aos="zoom-in" data-aos-easing="ease-in-out-cubic" className="flip-box">
  <div className="flip-box-inner">
    <div className="flip-box-front">
      <h1>Integrity</h1>
    </div>
    <div className="flip-box-back">
      <h5>We act with integrity and uphold a 
        code of conduct where transparency, honesty, and ethical behaviour come first.</h5>
    </div>
  </div>
</div>



<div data-aos="zoom-in" data-aos-easing="ease-in-out-cubic" className="flip-box">
  <div className="flip-box-inner">
    <div className="flip-box-front">
      <h1>Teamwork</h1>
    </div>
    <div className="flip-box-back">
      <h5>We believe we have a commitment to our community and the legal profession and quality
         teamwork benefits our firm, team members and clients.</h5>
    </div>
  </div>
</div>

<div data-aos="zoom-in" data-aos-easing="ease-in-out-cubic" className="flip-box">
  <div className="flip-box-inner">
    <div className="flip-box-front">
      <h1>Diligence</h1>
    </div>
    <div className="flip-box-back">
      <h5>Our clients’ interests are at the heart of our business, and we owe them excellence in all our services.
         We invest in our knowledge and stay abreast of regulatory and legislative developments.</h5>
    </div>
  </div>
</div>

  </div>
  <Footer/>
</div>
    
)
       
}  
export default Home;
