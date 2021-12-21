import React,{useState} from "react";
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import "aos/dist/aos.css";
import { useTranslation } from 'react-i18next';
import image from "../images/khalifa.jpg"
import image2 from "../images/videobg.jpg"
import image3 from "../images/6.jpg"
import image4 from "../images/basam.jpeg"
import image5 from "../images/Abdelrahman Al-Sabbah.jpg"
import image6 from "../images/hussien seif .jpg"
import image7 from "../images/mohamed khalil.jpg"
import image8 from "../images/essam.jpg"
import image10 from "../images/ahmed fouda.png"
import image9 from "../images/abo.jpg"
import image12 from "../images/nessren.jpg"
import image11 from "../images/salma.jpg"
import Float from './Floatbutton';


const About = ()=> {

    const {t} = useTranslation()
    const team = [t("dubai"),t("abu dhabi")]
    const [myteam,setmyteam] = useState(false)
  
  return (

<div>
<div className="pageTitle">
  <div className="container">
    <div className="row">
      <div className="col-md-6 col-sm-6">
        <h1>{t("aboutus")}</h1>
      </div>
    </div>
  </div>
</div>

    <div className="wel-head pd-x">
      <h2 className="wel-title">{t("about")}</h2>
        <span className="linee"></span>
        </div>
        
    
        <div className="about pd-y">
            <div className="container">
                <div className="row">
                    <div className="col-md-5">
                        <div className="about-img">
                            <div data-aos="fade-down" className="about-img-1">
                                <img src={image2} alt="Image"></img>
                            </div>
                            <div data-aos="fade-left" className="about-img-2">
                                <img src={image3} alt="Image"></img>
                            </div>
                        </div>
                    </div>
                    <div  className="text-about col-md-7">
                        <div data-aos="fade-down" className="section-header">
                            <h2>{t("about-us-title")}</h2>
                        </div>
                        <div className="about-text">
                            <p  data-aos="fade-down-left">{t("about-us")}</p>
                            <p  data-aos="fade-down-right">{t("about-us2")}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    

<div className="servicesbox bg1">
  <div className="container">
    <div className="section-title">
      <h3 data-aos="fade-down">{t("ourteam")}</h3>
    </div>
    <div data-aos="zoom-out-left" className="ctoggle">
        <p>{t("approach")}</p>
      
     </div>
     <div data-aos="fade-up" className="btn-group">
     {team.map(team=>(
     <button  type="button" class="btn btn-outline-primary"
      onClick={()=>setmyteam (team)}>{team}</button>))}
     
    </div> 
  </div>
</div>


{ myteam=== t("dubai") &&
    <div >      
    <div className="wel-head">
        <h2 className="wel-title">{t("dubai")}</h2>
        <span className="linee"></span>
    </div>

        <div className="Team pd-y">
            <div className="container">
          <div className="row">
          
          <div data-aos="fade-up" data-aos-duration="3000" className="col-md-3 col-sm-6">
            <div class="our-team">
                <div className="pic">
                    <img src={image8}></img>
                </div>
                <h3 className="title">{t("member1-name")}</h3>
                <span className="post">{t("member1-job")}</span>
                <ul className="social">
                    <li><a href="#"><FacebookOutlinedIcon/></a></li>
                    <li><a href="#"><LinkedInIcon/></a></li> 
                </ul>
            </div>
        </div>
 
    

        <div data-aos="fade-up" data-aos-duration="2600" className="col-md-3 col-sm-6">
            <div className="our-team">
                <div className="pic">
                    <img src={image4}></img>
                </div>
                <h3 className="title">{t("member2-name")}</h3>
                <span className="post">{t("member2-job")}</span>
                <ul className="social">
                    <li><a href="#"><FacebookOutlinedIcon/></a></li>
                    <li><a href="#"><LinkedInIcon/></a></li> 
                </ul>
            </div>
        </div>

        <div data-aos="fade-up" data-aos-duration="2000" className="col-md-3 col-sm-6">
            <div className="our-team">
                <div className="pic">
                    <img src={image6}></img>
                </div>
                <h3 className="title">{t("member3-name")}</h3>
                <span className="post">{t("member3-job")}</span>
                <ul className="social">
                    <li><a href="#"><FacebookOutlinedIcon/></a></li>
                    <li><a href="#"><LinkedInIcon/></a></li> 
                </ul>
            </div>
        </div>

        <div data-aos="fade-up" data-aos-duration="2000" className="col-md-3 col-sm-6">
            <div className="our-team">
                <div className="pic">
                    <img src={image10}></img>
                </div>
                <h3 className="title">{t("member4-name")}</h3>
                <span className="post">{t("member4-job")}</span>
                <ul className="social">
                    <li><a href="#"><FacebookOutlinedIcon/></a></li>
                    <li><a href="#"><LinkedInIcon/></a></li> 
                </ul>
            </div>
        </div>
    </div>
</div>
    </div>
    </div>
    }

    
{ myteam===t("abu dhabi")&&

    <div>
        <div className="wel-head">
        <h2 className="wel-title">{t("abu dhabi")}</h2>
        <span className="linee"></span>
    </div>

          <div className="Team pd-y">
          <div className="container">
          <div className="row">

          <div data-aos="fade-up" data-aos-duration="3000" className="col-md-3 col-sm-6">
            <div className="our-team">
                <div className="pic">
                    <img src={image7}></img>
                </div>
                <h3 className="title">{t("member5-name")}</h3>
                <span className="post">{t("member5-job")}</span>
                <ul className="social">
                    <li><a href="#"><FacebookOutlinedIcon/></a></li>
                    <li><a href="#"><LinkedInIcon/></a></li> 
                </ul>
            </div>
        </div>
     
            <div data-aos="fade-up" data-aos-duration="2600" className="col-md-3 col-sm-6">
            <div className="our-team">
                <div className="pic">
                    <img src={image9}></img>
                </div>
                <h3 className="title">{t("member6-name")}</h3>
                <span className="post">{t("member6-job")}</span>
                <ul className="social">
                    <li><a href="#"><FacebookOutlinedIcon/></a></li>
                    <li><a href="#"><LinkedInIcon/></a></li> 
                </ul>
            </div>
        </div>
    
            <div data-aos="fade-up" data-aos-duration="2000" className="col-md-3 col-sm-6">
            <div className="our-team">
                <div className="pic">
                    <img src={image5}></img>
                </div>
                <h3 className="title">{t("member7-name")}</h3>
                <span className="post">{t("member7-job")}</span>
                <ul className="social">
                    <li><a href="#"><FacebookOutlinedIcon/></a></li>
                    <li><a href="#"><LinkedInIcon/></a></li> 
                </ul>
            </div>
        </div>

            <div data-aos="fade-up" data-aos-duration="2000" className="col-md-3 col-sm-6">
            <div className="our-team">
                <div className="pic">
                    <img src={image12}></img>
                </div>
                <h3 className="title">{t("member8-name")}</h3>
                <span className="post">{t("member8-job")}</span>
                <ul className="social">
                    <li><a href="#"><FacebookOutlinedIcon/></a></li>
                    <li><a href="#"><LinkedInIcon/></a></li> 
                </ul>
            </div>
        </div>

            <div data-aos="fade-up" data-aos-duration="2000" className="col-md-3 col-sm-6">
            <div className="our-team">
                <div className="pic">
                    <img src={image11}></img>
                </div>
                <h3 className="title">{t("member9-name")}</h3>
                <span className="post">{t("member9-job")}</span>
                <ul className="social">
                    <li><a href="#"><FacebookOutlinedIcon/></a></li>
                    <li><a href="#"><LinkedInIcon/></a></li> 
                </ul>
            </div>
        </div>

        </div>
    </div>
 </div>
    </div>
    }
</div>

  )
}
  
export default About;