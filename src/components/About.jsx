import React from "react";
import { useTranslation } from 'react-i18next';
import image from "../images/khalifa.jpg"
import image2 from "../images/videobg.jpg"
import image3 from "../images/6.jpg"
import image4 from "../images/bassam.png"
import image5 from "../images/Abdelrahman Al-Sabbah.jpg"
import image6 from "../images/hussien seif .jpg"
import image7 from "../images/mohamed khalil.jpg"
import image8 from "../images/essam.jpg"
import image10 from "../images/ahmed fouda.png"
import image9 from "../images/abo.jpg"
import image12 from "../images/nessren.jpg"
import image11 from "../images/salma.jpg"
import image14 from "../images/a1.jpg"
import image13 from "../images/a2.jpg"
import image15 from "../images/a3.jpg"
import image16 from "../images/mahmoud aloraby.jpg"
import image17 from "../images/waref.jpg"
import image18 from "../images/dalia.jpg"
import image19 from "../images/rasesh.jpg"
import image20 from "../images/abdelbaset.jpg"


const About = ()=> {

    const {t} = useTranslation()
    
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
  </div>
</div>




    <div>      
    <div className="wel-head">
        <h2 className="wel-title">{t("ourteam")}</h2>
        <span className="linee"></span>
    </div>

<div className="Team pd-y">
    <div className="container">
        <div className="justify-content-center row">
                     <div data-aos="fade-up" data-aos-duration="3000" className="col-md-4 col-sm-6">
                     <div class="our-team">
                    <div className="pic ">
                        <img src={image}></img>
                    </div>
                    <h3 className="title">{t("member0-name")}</h3>
                    <span className="post">{t("job0")}</span>
                    <span className="post">{t("job1")}</span>
                    <ul className="social">
                        {/* <li><a href="#"><FacebookOutlinedIcon/></a></li> */}
                        {/* <li><a href="#"><LinkedInIcon/></a></li>  */}
                    </ul>
                </div>
            </div>
        </div>

<div className="row justify-content-center">

        <div data-aos="fade-up" data-aos-duration="2600" className="col-md-3 col-sm-6">
            <div class="our-team">
                <div className="pic">
                    <img src="{image}"></img>
                </div>
                <h3 className="title">{t("member1-name")}</h3>
                <span className="post">{t("job0")}</span>
                <ul className="social">
                </ul>
            </div>
        </div>

        <div data-aos="fade-up" data-aos-duration="2000" className="col-md-3 col-sm-6">
            <div class="our-team">
                <div className="pic">
                    <img src="{image}"></img>
                </div>
                <h3 className="title">{t("member2-name")}</h3>
                <span className="post">{t("job0")}</span>
                <ul className="social">
                </ul>
            </div>
        </div>

        <div data-aos="fade-up" data-aos-duration="2000" className="col-md-3 col-sm-6">
            <div class="our-team">
                <div className="pic">
                    <img src="{image}"></img>
                </div>
                <h3 className="title">{t("member3-name")}</h3>
                <span className="post">{t("job0")}</span>
                <ul className="social">
                </ul>
            </div>
        </div>
    </div>

<div className="row ">

    

          <div data-aos="fade-up" data-aos-duration="3000" className="col-md-3 col-sm-6">
            <div class="our-team">
                <div className="pic">
                    <img src={image7}></img>
                </div>
                <h3 className="title">{t("member4-name")}</h3>
                <span className="post">{t("job2")}</span>
                <span className="post">{t("job8")}</span>
                <ul className="social">
                </ul>
            </div>
        </div>

        <div data-aos="fade-up" data-aos-duration="2600" className="col-md-3 col-sm-6">
            <div className="our-team">
                <div className="pic">
                    <img src={image4}></img>
                </div>
                <h3 className="title">{t("member5-name")}</h3>
                <span className="post">{t("job2")}</span>
                <span className="post">{t("job9")}</span>
                <ul className="social">
                </ul>
            </div>
        </div>
      
        <div data-aos="fade-up" data-aos-duration="2000" className="col-md-3 col-sm-6">
            <div className="our-team">
                <div className="pic">
                    <img src="{image5}"></img>
                </div>
                <h3 className="title">{t("member6-name")}</h3>
                <span className="post">{t("job2")}</span>
                <span className="post">{t("job10")}</span>
                <ul className="social">
                </ul>
            </div>
        </div>

        <div data-aos="fade-up" data-aos-duration="2600" className="col-md-3 col-sm-6">
            <div className="our-team">
                <div className="pic">
                    <img src={image14}></img>
                </div>
                <h3 className="title">{t("member7-name")}</h3>
                <span className="post">{t("job2")}</span>
                <span className="post">{t("job11")}</span>
                <ul className="social">
                </ul>
            </div>
        </div>


        <div data-aos="fade-up" data-aos-duration="2600" className="col-md-3 col-sm-6">
            <div className="our-team">
                <div className="pic">
                    <img src={image9}></img>
                </div>
                <h3 className="title">{t("member8-name")}</h3>
                <span className="post">{t("job2")}</span>
                <ul className="social">
                </ul>
            </div>
        </div>

        <div data-aos="fade-up" data-aos-duration="3000" className="col-md-3 col-sm-6">
            <div className="our-team">
                <div className="pic">
                    <img src={image8}></img>
                </div>
                <h3 className="title">{t("member9-name")}</h3>
                <span className="post">{t("job2")}</span>
                <ul className="social">
                </ul>
            </div>
        </div>

        <div data-aos="fade-up" data-aos-duration="2000" className="col-md-3 col-sm-6">
            <div className="our-team">
                <div className="pic">
                    <img src="{image12}"></img>
                </div>
                <h3 className="title">{t("member10-name")}</h3>
                <span className="post">{t("job3")}</span>
                <ul className="social">
                </ul>
            </div>
        </div>

        <div data-aos="fade-up" data-aos-duration="2000" className="col-md-3 col-sm-6">
            <div className="our-team">
                <div className="pic">
                    <img src="{image12}"></img>
                </div>
                <h3 className="title">{t("member11-name")}</h3>
                <span className="post">{t("job3")}</span>
                <ul className="social">
                </ul>
            </div>
        </div>
</div>

<div className="row justify-content-center">

        <div data-aos="fade-up" data-aos-duration="2000" className="col-md-3 col-sm-6">
            <div className="our-team">
                <div className="pic">
                    <img src={image5}></img>
                </div>
                <h3 className="title">{t("member12-name")}</h3>
                <span className="post">{t("job3")}</span>
                <ul className="social">
                </ul>
            </div>
        </div>

        

        <div data-aos="fade-up" data-aos-duration="2000" className="col-md-3 col-sm-6">
            <div className="our-team">
                <div className="pic">
                    <img src={image12}></img>
                </div>
                <h3 className="title">{t("member13-name")}</h3>
                <span className="post">{t("job3")}</span>
                <ul className="social">
                </ul>
            </div>
        </div>
        
        <div data-aos="fade-up" data-aos-duration="2000" className="col-md-3 col-sm-6">
            <div className="our-team">
                <div className="pic">
                    <img src="{image14}"></img>
                </div>
                <h3 className="title">{t("member14-name")}</h3>
                <span className="post">{t("job3")}</span>
                <ul className="social">
                </ul>
            </div>
        </div>

</div>  


<div className="row justify-content-center">
    <div data-aos="fade-up" data-aos-duration="2000" className="col-md-3 col-sm-6">
            <div className="our-team">
                <div className="pic">
                    <img src={image10}></img>
                </div>
                <h3 className="title">{t("member15-name")}</h3>
                <span className="post">{t("job4")}</span>
                <ul className="social">
                </ul>
            </div>
        </div>

         <div data-aos="fade-up" data-aos-duration="2000" className="col-md-3 col-sm-6">
            <div className="our-team">
                <div className="pic">
                    <img src="{image10}"></img>
                </div>
                <h3 className="title">{t("member16-name")}</h3>
                <ul className="social">
                </ul>
            </div>
        </div>

        <div data-aos="fade-up" data-aos-duration="2000" className="col-md-3 col-sm-6">
            <div className="our-team">
                <div className="pic">
                    <img src="{image10}"></img>
                </div>
                <h3 className="title">{t("member17-name")}</h3>
                <span className="post">{t("job4")}</span>
                <ul className="social">
                </ul>
            </div>
        </div>

        <div data-aos="fade-up" data-aos-duration="2000" className="col-md-3 col-sm-6">
            <div className="our-team">
                <div className="pic">
                    <img src={image6}></img>
                </div>
                <h3 className="title">{t("member18-name")}</h3>
                <span className="post">{t("job4")}</span>
                <ul className="social">
                </ul>
            </div>
        </div>

        <div data-aos="fade-up" data-aos-duration="2000" className="col-md-3 col-sm-6">
            <div className="our-team">
                <div className="pic">
                    <img src={image13}></img>
                </div>
                <h3 className="title">{t("member19-name")}</h3>
                <span className="post">{t("job4")}</span>
                <ul className="social">
                </ul>
            </div>
        </div>

        <div data-aos="fade-up" data-aos-duration="2000" className="col-md-3 col-sm-6">
            <div className="our-team">
                <div className="pic">
                    <img src="{image10}"></img>
                </div>
                <h3 className="title">{t("member20-name")}</h3>
                <span className="post">{t("job4")}</span>
                <ul className="social">
                </ul>
            </div>
        </div>
     
</div>  

<div className="row">
        <div data-aos="fade-up" data-aos-duration="2000" className="col-md-3 col-sm-6">
            <div className="our-team">
                <div className="pic">
                    <img src=""></img>
                </div>
                <h3 className="title">{t("member21-name")}</h3>
                <ul className="social">
                </ul>
            </div>
        </div>


        <div data-aos="fade-up" data-aos-duration="2000" className="col-md-3 col-sm-6">
            <div className="our-team">
                <div className="pic">
                    <img src={image11}></img>
                </div>
                <h3 className="title">{t("member22-name")}</h3>
                <ul className="social">
                </ul>
            </div>
        </div>

        <div data-aos="fade-up" data-aos-duration="2000" className="col-md-3 col-sm-6">
            <div className="our-team">
                <div className="pic">
                    <img src={image17}></img>
                </div>
                <h3 className="title">{t("member23-name")}</h3>
                <span className="post">{t("job12")}</span>
                <ul className="social">
                </ul>
            </div>
        </div>

        <div data-aos="fade-up" data-aos-duration="2000" className="col-md-3 col-sm-6">
            <div className="our-team">
                <div className="pic">
                    <img src={image18}></img>
                </div>
                <h3 className="title">{t("member24-name")}</h3>
                <span className="post">{t("job12")}</span>
                <ul className="social">
                </ul>
            </div>
        </div>
 
</div>

<div className="row justify-content-center">
    <div data-aos="fade-up" data-aos-duration="2000" className="col-md-3 col-sm-6">
            <div className="our-team">
                <div className="pic">
                    <img src=""></img>
                </div>
                <h3 className="title">{t("member25-name")}</h3>
                <ul className="social">
                </ul>
            </div>
        </div>

        
    </div>

<div className="row justify-content-center">
        <div data-aos="fade-up" data-aos-duration="2000" className="col-md-3 col-sm-6">
            <div className="our-team">
                <div className="pic">
                    <img src={image20}></img>
                </div>
                <h3 className="title">{t("member26-name")}</h3>
                <span className="post">{t("job6")}</span>
                <ul className="social">
                </ul>
            </div>
        </div>

        <div data-aos="fade-up" data-aos-duration="2000" className="col-md-3 col-sm-6">
            <div className="our-team">
                <div className="pic">
                    <img src={image15}></img>
                </div>
                <h3 className="title">{t("member27-name")}</h3>
                <span className="post">{t("job6")}</span>
                <ul className="social">
                </ul>
            </div>
        </div>

        <div data-aos="fade-up" data-aos-duration="2000" className="col-md-3 col-sm-6">
            <div className="our-team">
                <div className="pic">
                    <img src={image16}></img>
                </div>
                <h3 className="title">{t("member29-name")}</h3>
                <ul className="social">
                </ul>
            </div>
        </div>
        
        <div data-aos="fade-up" data-aos-duration="2000" className="col-md-3 col-sm-6">
            <div className="our-team">
                <div className="pic">
                    <img src={image19}></img>
                </div>
                <h3 className="title">{t("member28-name")}</h3>
                <span className="post">{t("job7")}</span>
                <ul className="social">
                </ul>
            </div>
        </div>
    </div>
        

    
                </div>
            </div>
        </div>
    </div>

    


       
    

  )
}
  
export default About;