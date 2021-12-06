import React,{useState} from "react";
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import "aos/dist/aos.css";
import { useTranslation } from 'react-i18next';
import image from "../mohamed khalil.jpg";
import image1 from "../title-bg.jpg";
import Navbar from './Navbar';
import Footer from './Footer';



const About = ()=> {

    const {t} = useTranslation()
    const team = [t("dubai"),t("abudhabi")]
    const [myteam,setmyteam] = useState(false)
  
  return (


<div>

<div className="pageTitle">
  <div className="container">
    <div className="row">
      <div className="col-md-6 col-sm-6">
        <h1>About Us</h1>
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
                            <div className="about-img-1">
                                <img src={image} alt="Image"></img>
                            </div>
                            <div className="about-img-2">
                                <img src={image} alt="Image"></img>
                            </div>
                        </div>
                    </div>
                    <div data-aos="fade-up" className="text-about col-md-7">
                        <div className="section-header">
                            <h2>{t("about-us-title")}</h2>
                        </div>
                        <div className="about-text">
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
      <p>{t("about-team")}</p>
     </div>
     <div data-aos="fade-up" className="btn-group">
     {team.map(team=>(
     <button
      onClick={()=>setmyteam (team)}>{team}</button>))}
     
    </div> 
  </div>
</div>


{ myteam==="dubai" &&
    <div id="team">      
    <div className="wel-head">
        <h2 className="wel-title">{t("dubai")}</h2>
        <span className="linee"></span>
    </div>

          <div className="Team">
            <div className="col-md-3 col-sm-6">
                <div data-aos="fade-up" data-aos-duration="3000" className="our-team">
                    <div className="pic">
                    <img src={image}></img>
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
                        <img src={image}></img>
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
                    <img src={image}></img>
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
                    <img src={image}></img>
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

    
{ myteam==="abu dhabi"&&

    <div  id="team">
        <div className="wel-head">
        <h2 className="wel-title">{t("abudhabi")}</h2>
        <span className="linee"></span>
    </div>

          <div className="Team">
            <div className="col-md-3 col-sm-6">
                <div data-aos="fade-up" data-aos-duration="3000" className="our-team">
                    <div className="pic">
                    <img src={image}></img>
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
                        <img src={image}></img>
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
                    <img src={image}></img>
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
                    <img src={image}></img>
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