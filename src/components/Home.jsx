import React  from 'react'
import GavelOutlinedIcon from '@mui/icons-material/GavelOutlined';
import AccountBalanceOutlinedIcon from '@mui/icons-material/AccountBalanceOutlined';
import WorkOutlinedIcon from '@mui/icons-material/WorkOutlined';
import "aos/dist/aos.css"
import { useTranslation } from 'react-i18next';
import Carousel from './Carousel';
import image from "../images/khalifa.jpg"

const Home =()=> {
    
    const {t} = useTranslation()
    
    return(
<div>
  
  <Carousel/>
  
  <div className="container">
    <div className="howitwrap">
            <div className="row">
                <div data-aos="fade-down" className="col-md-5"><img src={image} alt="" /></div>
          <div className="col-md-7">
          <div className="stcontent"> 
          <div className="section-title">
            <h3 className="titlee" data-aos="fade-down" >
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
<div id="home-about" className="wel-head">
      <h2 className="wel-title">{t("belifs")}</h2>
        <span className="linee"></span>
        </div>
  <div data-aos="zoom-in" data-aos-easing="ease-in-out-cubic" className="flip-box">
  <div className="flip-box-inner">
    <div className="flip-box-front">
      <h1>{t("IntegrityT")}</h1>
    </div>
    <div className="flip-box-back">
      <h4>{t("Integrity")}</h4>
    </div>
  </div>
</div>



<div data-aos="zoom-in" data-aos-easing="ease-in-out-cubic" className="flip-box">
  <div className="flip-box-inner">
    <div className="flip-box-front">
      <h1>{t("TeamworkT")}</h1>
    </div>
    <div className="flip-box-back">
      <h4>{t("Teamwork")}</h4>
    </div>
  </div>
</div>

<div data-aos="zoom-in" data-aos-easing="ease-in-out-cubic" className="flip-box">
  <div className="flip-box-inner">
    <div className="flip-box-front">
      <h1>{t("DiligenceT")}</h1>
    </div>
    <div className="flip-box-back">
      <h4>{t("Diligence")}</h4>
    </div>
  </div>
</div>



  </div>
  
</div>
    
)
       
}  
export default Home;
