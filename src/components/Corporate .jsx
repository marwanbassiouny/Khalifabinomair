import { useTranslation } from 'react-i18next';
import image2 from "../images/corporate.jpg"
import image1 from "../images/corporate2.jpg"
import { useNavigate } from 'react-router-dom';

const Corporate  =()=>{

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
          <span data-aos="fade-down">{t("service-title12")}</span>
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
                         <h5 data-aos="fade-right">{t("service-12")}</h5>
                         <h5 data-aos="fade-right">{t("service-12-1")}</h5>
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
                         <h5 data-aos="fade-right">{t("service-12-2")}</h5>
                         <h5 data-aos="fade-right">{t("service-12-3")}</h5>
                        </div>
                        <div className="col-sm-5">
                        <div>
                            <div data-aos="fade-down" className="about-img-3">
                                <img src={image1} alt="Image"></img>
                            </div>                        
                        </div>
                        </div>
                       </div>



                       <h3 className="titlee" data-aos="fade-down" >
                    <span data-aos="fade-down">{t("service-title12-1")}</span></h3> 
                    <div className='row'>
                    <div className='col-lg-7'>
                      <h5 data-aos="fade-right">
                        <ul>
                        <li>{t("service-12-4")}</li>
                        <li>{t("service-12-5")}</li>
                        <li>{t("service-12-6")}</li>
                        <li>{t("service-12-7")}</li>
                        <li>{t("service-12-8")}</li>
                        <li>{t("service-12-9")}</li>
                        <li>{t("service-12-10")}</li>
                        <li>{t("service-12-11")}</li>
                        <li>{t("service-12-12")}</li>
                        <li>{t("service-12-13")}</li>
                        <li>{t("service-12-14")}</li>
                        <li>{t("service-12-15")}</li>
                        <li>{t("service-12-16")}</li>
                        <li>{t("service-12-17")}</li>
                        <li>{t("service-12-18")}</li>
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
export default Corporate ;
