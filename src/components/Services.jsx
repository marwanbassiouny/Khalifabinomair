import React from 'react'
import ApartmentOutlinedIcon from '@mui/icons-material/ApartmentOutlined';
import LibraryBooksOutlinedIcon from '@mui/icons-material/LibraryBooksOutlined';
import WorkOutlineOutlinedIcon from '@mui/icons-material/WorkOutlineOutlined';
import GavelOutlinedIcon from '@mui/icons-material/GavelOutlined';
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import DirectionsBoatOutlinedIcon from '@mui/icons-material/DirectionsBoatOutlined';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
 
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
          <h5>{t("service-title1")}</h5>
          <span className="line"></span>
          <Link to="/realstate"><button type="button" class="btn btn-outline-primary">read more</button></Link>
          <p></p>
        </div>

        <div data-aos="flip-down" className="box">
          <div className="icon">
            <i><DirectionsBoatOutlinedIcon fontSize="large"/></i>
          </div>
          <h5>{t("service-title2")}</h5>
          <span className="line"></span>
          <Link to="/maritime"><button type="button" class="btn btn-outline-primary">read more</button></Link>
          <p></p>
        </div>
        
        <div data-aos="flip-down" className="box ">
          <div className="icon">
            <i><LibraryBooksOutlinedIcon fontSize="large"/></i>
          </div>
          <h5>{t("service-title3")}</h5>
          <span className="line"></span>
          <Link to="/realstate"><button type="button" class="btn btn-outline-primary">read more</button></Link>
          <p></p>
        </div>

        <div data-aos="flip-down" className="box ">
          <div className="icon">
            <i><GavelOutlinedIcon fontSize="large"/></i>
          </div>
          <h5>{t("service-title4")}</h5>
          <span className="line"></span>
          <Link to="/litigation"><button type="button" class="btn btn-outline-primary">read more</button></Link>
          <p></p>
        </div>

        <div data-aos="flip-down" className="box ">
          <div className="icon">
            <i><WorkOutlineOutlinedIcon fontSize="large"/></i>
          </div>
          <h5>{t("service-title5")}</h5>
          <span className="line"></span>
          <Link to="/labor"><button type="button" class="btn btn-outline-primary">read more</button></Link>
          <p></p>
        </div>
        
        <div data-aos="flip-down" className="box ">
          <div className="icon">
            <i><PersonOutlinedIcon fontSize="large"/></i>
          </div>
          <h5>{t("service-title6")}</h5>
          <span className="line"></span>
          <Link to="/realstate"><button type="button" class="btn btn-outline-primary">read more</button></Link>
          <p></p>
        </div>

        <div data-aos="flip-down" className="box ">
          <div className="icon">
            <i><ApartmentOutlinedIcon fontSize="large"/></i>
          </div>
          <h5>{t("service-title7")}</h5>
          <span className="line"></span>
          <Link to="/realstate"><button type="button" class="btn btn-outline-primary">read more</button></Link>
          <p></p>        
        </div>

        <div data-aos="flip-down" className="box ">
          <div className="icon">
            <i><WorkOutlineOutlinedIcon fontSize="large"/></i>
          </div>
          <h5>{t("service-title8")}</h5>
          <span className="line"></span>
          <Link to="/realstate"><button type="button" class="btn btn-outline-primary">read more</button></Link>
          <p></p>        
        </div>

        <div data-aos="flip-down" className="box ">
          <div className="icon">
            <i><WorkOutlineOutlinedIcon fontSize="large"/></i>
          </div>
          <h5>{t("service-title9")}</h5>
          <span className="line"></span>
          <Link to="/Criminal"><button type="button" class="btn btn-outline-primary">read more</button></Link>
          <p></p>        
        </div>

        <div data-aos="flip-down" className="box ">
          <div className="icon">
            <i><WorkOutlineOutlinedIcon fontSize="large"/></i>
          </div>
          <h5>{t("service-title10")}</h5>
          <span className="line"></span>
          <Link to="/banking"><button type="button" class="btn btn-outline-primary">read more</button></Link>
          <p></p>        
        </div>

      </div>
      </div>
    </div>
        
    )
}
export default Services;