import React from 'react'
import ApartmentOutlinedIcon from '@mui/icons-material/ApartmentOutlined';
import LibraryBooksOutlinedIcon from '@mui/icons-material/LibraryBooksOutlined';
import WorkOutlineOutlinedIcon from '@mui/icons-material/WorkOutlineOutlined';
import GavelOutlinedIcon from '@mui/icons-material/GavelOutlined';
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import DirectionsBoatOutlinedIcon from '@mui/icons-material/DirectionsBoatOutlined';
import BusinessOutlinedIcon from '@mui/icons-material/BusinessOutlined';
import AttachMoneyOutlinedIcon from '@mui/icons-material/AttachMoneyOutlined';
import LocalPoliceOutlinedIcon from '@mui/icons-material/LocalPoliceOutlined';
import CachedOutlinedIcon from '@mui/icons-material/CachedOutlined';
import CheckCircleOutlinedIcon from '@mui/icons-material/CheckCircleOutlined';
import { useTranslation } from 'react-i18next';
import { Nav} from 'react-bootstrap';

const Services=()=> {
  const {t} = useTranslation()

return (
<div>
  <div className="pageTitle">
  <div className="container">
    <div className="row">
      <div className="col-md-6 col-sm-6">
        <h1>{t("service")}</h1>
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
         
      <div data-aos="flip-down" className="box">
          <div className="icon">
            <i><HomeOutlinedIcon  fontSize="large"/></i>
          </div>
          <h4>{t("service-title1")}</h4>
          <span className="line"></span>
          <Nav.Link href="/services/realstate"><button type="button" class="btn btn-outline-primary">{t("read")}</button></Nav.Link>
          <p></p>
        </div>

        <div data-aos="flip-down" className="box">
          <div className="icon">
            <i><DirectionsBoatOutlinedIcon fontSize="large"/></i>
          </div>
          <h4>{t("service-title2")}</h4>
          <span className="line"></span>
          <Nav.Link href="/services/maritime"><button type="button" class="btn btn-outline-primary">{t("read")}</button></Nav.Link>
          <p></p>
        </div>
        
        <div data-aos="flip-down" className="box ">
          <div className="icon">
            <i><LibraryBooksOutlinedIcon fontSize="large"/></i>
          </div>
          <h4>{t("service-title3")}</h4>
          <span className="line"></span>
          <Nav.Link href="/services/commerical"><button type="button" class="btn btn-outline-primary">{t("read")}</button></Nav.Link>
          <p></p>
        </div>

        <div data-aos="flip-down" className="box ">
          <div className="icon">
            <i><GavelOutlinedIcon fontSize="large"/></i>
          </div>
          <h4>{t("service-title4")}</h4>
          <span className="line"></span>
          <Nav.Link href="/services/litigation"><button type="button" class="btn btn-outline-primary">{t("read")}</button></Nav.Link>
          <p></p>
        </div>

        <div data-aos="flip-down" className="box ">
          <div className="icon">
            <i><WorkOutlineOutlinedIcon fontSize="large"/></i>
          </div>
          <h4>{t("service-title5")}</h4>
          <span className="line"></span>
          <Nav.Link href="/services/labor"><button type="button" class="btn btn-outline-primary">{t("read")}</button></Nav.Link>
          <p></p>
        </div>
        
        <div data-aos="flip-down" className="box ">
          <div className="icon">
            <i><PersonOutlinedIcon fontSize="large"/></i>
          </div>
          <h4>{t("service-title6")}</h4>
          <span className="line"></span>
          <Nav.Link href="/services/personalandinheritance"><button type="button" class="btn btn-outline-primary">{t("read")}</button></Nav.Link>
          <p></p>
        </div>

        <div data-aos="flip-down" className="box ">
          <div className="icon">
            <i><ApartmentOutlinedIcon fontSize="large"/></i>
          </div>
          <h4>{t("service-title7")}</h4>
          <span className="line"></span>
          <Nav.Link href="/services/establishofcompanies"><button type="button" class="btn btn-outline-primary">{t("read")}</button></Nav.Link>
          <p></p>        
        </div>

        <div data-aos="flip-down" className="box ">
          <div className="icon">
            <i><BusinessOutlinedIcon fontSize="large"/></i>
          </div>
          <h4>{t("service-title12")}</h4>
          <span className="line"></span>
          <Nav.Link href="/services/corporate"><button type="button" class="btn btn-outline-primary">{t("read")}</button></Nav.Link>
          <p></p>        
        </div>
        
        <div data-aos="flip-down" className="box ">
          <div className="icon">
            <i><CachedOutlinedIcon fontSize="large"/></i>
          </div>
          <h4>{t("service-title8")}</h4>
          <span className="line"></span>
          <Nav.Link href="/services/mergeandaquision"><button type="button" class="btn btn-outline-primary">{t("read")}</button></Nav.Link>
          <p></p>        
        </div>

        <div data-aos="flip-down" className="box ">
          <div className="icon">
            <i><LocalPoliceOutlinedIcon fontSize="large"/></i>
          </div>
          <h4>{t("service-title9")}</h4>
          <span className="line"></span>
          <Nav.Link href="/services/Criminal"><button type="button" class="btn btn-outline-primary">{t("read")}</button></Nav.Link>
          <p></p>        
        </div>

        <div data-aos="flip-down" className="box ">
          <div className="icon">
            <i><AttachMoneyOutlinedIcon fontSize="large"/></i>
          </div>
          <h4>{t("service-title10")}</h4>
          <span className="line"></span>
          <Nav.Link href="/services/banking"><button type="button" class="btn btn-outline-primary">{t("read")}</button></Nav.Link>
          <p></p>        
        </div>

        <div data-aos="flip-down" className="box ">
          <div className="icon">
            <i><CheckCircleOutlinedIcon fontSize="large"/></i>
          </div>
          <h4>{t("service-title11")}</h4>
          <span className="line"></span>
          <Nav.Link href="/services/mediation"><button type="button" class="btn btn-outline-primary">{t("read")}</button></Nav.Link>
          <p></p>        
        </div>

       

      </div>
      </div>
    </div>
        
    )
}
export default Services;