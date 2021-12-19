import react from 'react';
import { useTranslation } from 'react-i18next';
import image2 from "../images/banking.jpg"
import image from "../images/bank.jpg"
import { useNavigate } from 'react-router-dom';


const Banking =()=>{
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
      <h2 className="wel-title">{t("service-title10")}</h2>
        <span className="linee"></span>
        </div>
        
    
        <div className="about serv pd-y">
            <div className="container">
                <div className="row">
                    <div className="col-md-5">
                        <div>
                            <div data-aos="fade-down" className="about-img-3">
                                <img src={image} alt="Image"></img>
                            </div> 
                            <div data-aos="fade-up" className="about-img-3">
                                <img src={image2} alt="Image"></img>
                            </div>                             
                        </div>
                    </div>
                    
                    <div className="col-md-7">
                    <div className="stcontent"> 
                    <div className="section-title">
                        <h3 className="titlee" data-aos="fade-down" >
                        <span data-aos="fade-down">{t("service-title10")}</span></h3> 
                        <h5 data-aos="fade-right">{t("service-10-1")}</h5>
                        <h5 data-aos="fade-right">{t("service-10-2")}</h5>
                        <h5 data-aos="fade-right">{t("service-10-3")}</h5>
                        <h5 data-aos="fade-right">{t("service-10-4")}</h5>
                        <h5 data-aos="fade-right">{t("service-10-5")}</h5> 
                        <button type="button" class="btn btn-outline-primary" onClick={() =>  navigate('/Services')}>{t("back")}</button>

                    </div>
                    </div>
                </div>
            </div>
        </div>
    </div> 
</div>

    )
}
export default Banking;
