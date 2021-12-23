import react from 'react';
import { useTranslation } from 'react-i18next';
import image2 from "../images/labor.png"
import image from "../images/labor2.jpg"
import image3 from "../images/labor3.jpg"
import { useNavigate } from 'react-router-dom';


const Labor =()=>{
const {t} = useTranslation()
const navigate = useNavigate();

return(
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

    <div className="wel-head pd-x">
    <div className="stcontent"> 
      <div className="section-title">
          <h3 className="titlee" data-aos="fade-down" >
          <span data-aos="fade-down">{t("service-title5")}</span>
          </h3>       
      </div>
      </div>
      <span className="linee"></span>
      </div>

        <div className="about serv">
            <div className="container">
                <div className="row">
                <div className="stcontent"> 
                <div className="section-title">
                    <div className='row'>
                    <div className='col-lg-7'>
                      <h5 data-aos="fade-right">{t("service-5")}</h5>
                    </div>
                    <div className="col-lg-5">
                    <div>
                        <div data-aos="fade-down" className="about-img-3">
                            <img src={image2} alt="Image"></img>
                        </div>                        
                    </div>
                    </div>
                    </div>

                    <div className='row'>
                    <div className='col-lg-7'>
                      <h5 data-aos="fade-right">{t("service-5-1")}</h5>
                    </div>
                    <div className="col-lg-5">
                    <div>
                        <div data-aos="fade-down" className="about-img-3">
                            <img src={image} alt="Image"></img>
                        </div>                        
                    </div>
                    </div>
                    </div>

                    <div className='row'>
                    <div className='col-lg-7'>
                      <h5 data-aos="fade-right">{t("service-5-2")}</h5>
                    </div>
                    <div className="col-lg-5">
                    <div>
                        <div data-aos="fade-down" className="about-img-3">
                            <img src={image3} alt="Image"></img>
                        </div>                        
                    </div>
                    </div>
                    </div>

                

                    <h3 className="titlee" data-aos="fade-down" >
                    <span data-aos="fade-down">{t("service-title5-2")}</span></h3> 
                    <div className='row'>
                    <div className='col-lg-7'>
                      <h5 data-aos="fade-right">
                        <ul>
                        <li>{t("service-5-3")}</li>
                        <li>{t("service-5-4")}</li>
                        <li>{t("service-5-5")}</li>
                        <li>{t("service-5-6")}</li>
                        <li>{t("service-5-7")}</li>
                        <li>{t("service-5-8")}</li>
                        <li>{t("service-5-9")}</li>
                        <li>{t("service-5-10")}</li>
                        <li>{t("service-5-11")}</li>
                        <li>{t("service-5-12")}</li>
                        <li>{t("service-5-13")}</li>
                        <li>{t("service-5-14")}</li>
                        <li>{t("service-5-15")}</li>
                        </ul>
                        </h5>
                    </div>
                    </div>
                       <button type="button" class="btn btn-outline-primary" onClick={() =>  navigate('/Services')}>{t("back")}</button>
                    
                    </div>
                </div>
            </div>
        </div>
    </div> 
</div>

    )
}
export default Labor;
