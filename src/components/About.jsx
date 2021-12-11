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
      <h2 className="wel-title">About Us</h2>
        <span className="linee"></span>
        </div>
        
    
        <div className="about mt-125 pd-y">
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
                        <div data-aos="fade-down-left" className="about-text">
                            <p>{t("about-us")}</p>
                            <p>{t("about-us2")}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    

<div className="servicesbox bg1">
  <div className="container">
    <div className="section-title">
      <h3 data-aos="fade-down">Our teams</h3>
    </div>
    <div data-aos="zoom-out-left" className="ctoggle">
        <p>{t("approach")}</p>
      
     </div>
     <div data-aos="fade-up" className="btn-group">
     {team.map(team=>(
     <button
      onClick={()=>setmyteam (team)}>{team}</button>))}
     
    </div> 
  </div>
</div>


{ myteam=== t("dubai") &&
    <div id="team">      
    <div className="wel-head">
        <h2 className="wel-title">{t("dubai")}</h2>
        <span className="linee"></span>
    </div>

          <div className="Team">
            <div className="col-md-3 col-sm-6">
                <div data-aos="fade-up" data-aos-duration="3000" className="our-team">
                    <div className="pic">
                    <img src={image8}></img>
                    </div>
                    <h3 className="title">Name</h3>
                    <span className="post">Lawyer</span>
                    <ul className="social">
                    <li><a href="#"><FacebookOutlinedIcon/></a></li>
                    <li><a href="#"><LinkedInIcon/></a></li> 
                    </ul>
                </div>
            </div>

            <div className="col-md-3 col-sm-6">
                <div data-aos="fade-up" data-aos-duration="2600" className="our-team">
                    <div className="pic">
                        <img src={image4}></img>
                    </div>
                    <h3 className="title">Name</h3>
                    <span className="post">Lawyer</span>
                    <ul className="social">
                    <li><a  href="#"><FacebookOutlinedIcon/></a></li>
                    <li><a href="#"><LinkedInIcon/></a></li>
                    </ul>
                </div>
            </div>
    
            <div className="col-md-3 col-sm-6">
                <div data-aos="fade-up" data-aos-duration="2000" className="our-team">
                    <div className="pic">
                    <img src={image6}></img>
                    </div>
                    <h3 className="title">Name</h3>
                    <span className="post">Lawyer</span>
                    <ul className="social">
                    <li><a  href="#"><FacebookOutlinedIcon/></a></li>
                    <li><a href="#"><LinkedInIcon/></a></li> 
                    </ul>
                </div>
            </div>
            <div className="col-md-3 col-sm-6">
                <div data-aos="fade-up" data-aos-duration="1700" className="our-team">
                <div className="pic">
                    <img src={image10}></img>
                </div>
                    <h3 className="title">Name</h3>
                    <span className="post">Lawyer</span>
                    <ul className="social">
                    <li><a  href="#"><FacebookOutlinedIcon/></a></li>
                    <li><a href="#"><LinkedInIcon/></a></li>
                    </ul>
                </div>
            </div>
            <div className="col-md-3 col-sm-6">
                <div data-aos="fade-up" data-aos-duration="1700" className="our-team">
                <div className="pic">
                    <img src=""></img>
                </div>
                    <h3 className="title">Name</h3>
                    <span className="post">Lawyer</span>
                    <ul className="social">
                    <li><a  href="#"><FacebookOutlinedIcon/></a></li>
                    <li><a href="#"><LinkedInIcon/></a></li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
    }

    
{ myteam===t("abu dhabi")&&

    <div  id="team">
        <div className="wel-head">
        <h2 className="wel-title">{t("abu dhabi")}</h2>
        <span className="linee"></span>
    </div>

          <div className="Team">
            <div className="col-md-3 col-sm-6">
                <div data-aos="fade-up" data-aos-duration="3000" className="our-team">
                    <div className="pic">
                    <img src={image7}></img>
                    </div>
                    <h3 className="title">Name</h3>
                    <span className="post">Lawyer</span>
                    <ul className="social">
                    <li><a href="#"><FacebookOutlinedIcon/></a></li>
                    <li><a href="#"><LinkedInIcon/></a></li> 
                    </ul>
                </div>
            </div>
     
            <div className="col-md-3 col-sm-6">
                <div data-aos="fade-up" data-aos-duration="2600" className="our-team">
                    <div className="pic">
                        <img src={image9} ></img>
                    </div>
                    <h3 className="title">Name</h3>
                    <span className="post">Lawyer</span>
                    <ul className="social">
                    <li><a  href="#"><FacebookOutlinedIcon/></a></li>
                    <li><a href="#"><LinkedInIcon/></a></li>
                    </ul>
                </div>
            </div>
    
            <div className="col-md-3 col-sm-6">
                <div data-aos="fade-up" data-aos-duration="2000" className="our-team">
                    <div className="pic">
                    <img src={image5}></img>
                    </div>
                    <h3 className="title">Name</h3>
                    <span className="post">Lawyer</span>
                    <ul className="social">
                    <li><a  href="#"><FacebookOutlinedIcon/></a></li>
                    <li><a href="#"><LinkedInIcon/></a></li> 
                    </ul>
                </div>
            </div>
            <div className="col-md-3 col-sm-6">
                <div data-aos="fade-up" data-aos-duration="1700" className="our-team">
                <div className="pic">
                    <img ></img>
                </div>
                    <h3 className="title">Name</h3>
                    <span className="post">Lawyer</span>
                    <ul className="social">
                    <li><a  href="#"><FacebookOutlinedIcon/></a></li>
                    <li><a href="#"><LinkedInIcon/></a></li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
    }
</div>

  )
}
  
export default About;