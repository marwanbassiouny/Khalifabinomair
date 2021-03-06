import { useTranslation } from 'react-i18next';
import image2 from "../images/personal.jpg"
import image1 from "../images/personal2.jpg"
import image3 from "../images/personal1.jpg"
import image4 from "../images/personal3.jpg"
import { useNavigate } from 'react-router-dom';

const Personal =()=>{

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
          <span data-aos="fade-down">{t("service-title6")}</span>
          </h3>       
      </div>
      </div>
      <span className="linee"></span>
      </div>

    
        <div className="about serv pd-y ">
            <div className="container">
                <div className="row">
                <div className="stcontent"> 
                    <div className="section-title">
                    
                        <div className='row'>
                        <div className='col-sm-7'>
                         <h5 data-aos="fade-right">{t("service-6-1")}</h5>
                         <h5 data-aos="fade-right">{t("service-6-2")}</h5>
                        </div>
                        <div className="col-sm-5">
                        <div>
                            <div data-aos="fade-down" className="about-img-3">
                                <img src={image2} alt="Image"></img>
                            </div>                        
                        </div>
                        </div>
                       </div>

                       <div className='row'>
                        <div className='col-sm-7'>
                         <h5 data-aos="fade-right">{t("service-6-3")}</h5>
                        </div>
                        <div className="col-sm-5">
                        <div>
                            <div data-aos="fade-down" className="about-img-3">
                                <img src={image3} alt="Image"></img>
                            </div>                        
                        </div>
                        </div>
                       </div>

                       <div className='row'>
                        <div className='col-sm-7'>
                         <h5 data-aos="fade-right">{t("service-6-18")}</h5>
                        </div>
                        <div className="col-sm-5">
                        <div>
                            <div data-aos="fade-down" className="about-img-3">
                                <img src={image1} alt="Image"></img>
                            </div>                        
                        </div>
                        </div>
                       </div>

                       <div className='row'>
                        <div className='col-sm-7'>
                         <h5 data-aos="fade-right">{t("service-6-19")}</h5>
                        </div>
                        <div className="col-sm-5">
                        <div>
                            <div data-aos="fade-down" className="about-img-3">
                                <img src={image4} alt="Image"></img>
                            </div>                        
                        </div>
                        </div>
                       </div>

                       <h3 className="titlee" data-aos="fade-down" >
                    <span data-aos="fade-down">{t("service-title6-2")}</span></h3> 
                    <div className='row'>
                    <div className='col-lg-7'>
                      <h5 data-aos="fade-right">
                        <ul>
                        <li>{t("service-6-4")}</li>
                        <li>{t("service-6-5")}</li>
                        <li>{t("service-6-6")}</li>
                        <li>{t("service-6-7")}</li>
                        <li>{t("service-6-8")}</li>
                        <li>{t("service-6-9")}</li>
                        <li>{t("service-6-10")}</li>
                        <li>{t("service-6-11")}</li>
                        <li>{t("service-6-12")}</li>
                        <li>{t("service-6-13")}</li>
                        <li>{t("service-6-14")}</li>
                        <li>{t("service-6-15")}</li>
                        <li>{t("service-6-16")}</li>
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
export default Personal;
