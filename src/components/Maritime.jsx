
import { useTranslation } from 'react-i18next';
import image2 from "../images/Maritime.jpg"
import { useNavigate } from 'react-router-dom';

const Maritime =()=>{
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
          <span data-aos="fade-down">{t("service-title2")}</span>
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
                        <div className='col-sm-7'>
                         <h5 data-aos="fade-right">{t("service-2")}</h5>
                        </div>
                        <div className="col-sm-5">
                        <div>
                            <div data-aos="fade-down" className="about-img-3">
                                <img src={image2} alt="Image"></img>
                            </div>                        
                        </div>
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
export default Maritime;
