import react from 'react';
import { useTranslation } from 'react-i18next';
import image2 from "../images/videobg.jpg"


const Criminal =()=>{
const {t} = useTranslation()

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
      <h2 className="wel-title">{t("service-title9")}</h2>
        <span className="linee"></span>
        </div>
        
    
        <div className="about serv pd-x">
            <div className="container">
                <div className="row">
                    <div className="col-md-5">
                        <div>
                            <div data-aos="fade-down" className="about-img-3">
                                <img src={image2} alt="Image"></img>
                            </div>                           
                        </div>
                    </div>
                    
                    <div className="col-md-7">
                    <div className="stcontent"> 
                    <div className="section-title">
                        <h3 className="titlee" data-aos="fade-down" >
                        <span data-aos="fade-down">{t("service-title9")}</span></h3> 
                        <h5 data-aos="fade-right">{t("service-9")}</h5>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    </div> 
</div>

    )
}
export default Criminal;
