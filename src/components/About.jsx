import React from "react";
import { useTranslation } from 'react-i18next';
import Images from "../Images"

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
                                <img src={Images.image1} alt="Image2"></img>
                            </div>
                            <div data-aos="fade-left" className="about-img-2">
                                <img src={Images.image2} alt="Image1"></img>
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
                        <img src={Images.khalifa} alt=""></img>
                    </div>
                    <h3 className="title">{t("member0-name")}</h3>
                    <span className="post">{t("job0")}</span>
                    <span className="post">{t("job1")}</span>
                    <ul className="social">
                    </ul>
                </div>
            </div>
        </div>

<div className="row justify-content-center">

        <div data-aos="fade-up" data-aos-duration="2600" className="col-md-3 col-sm-6">
            <div class="our-team">
                <div className="pic">
                    <img src={Images.ghazal} alt=""></img>
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
                    <img src={Images.sara} alt=""></img>
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
                    <img src={Images.rashed} alt=""></img>
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
                    <img src={Images.zayan} alt=""></img>
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
                    <img src={Images.bassam} alt=""></img>
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
                    <img src={Images.ashraf} alt=""></img>
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
                    <img src={Images.attia} alt=""></img>
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
                    <img src={Images.sameh} alt=""></img>
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
                    <img src={Images.essam} alt=""></img>
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
                    <img src={Images.othman} alt=""></img>
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
                    <img src={Images.adel} alt=""></img>
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
                    <img src={Images.sabbah} alt=""></img>
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
                    <img src={Images.nessren} alt=""></img>
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
                    <img src={Images.mohamed} alt=""></img>
                </div>
                <h3 className="title">{t("member14-name")}</h3>
                <span className="post">{t("job3")}</span>
                <ul className="social">
                </ul>
            </div>
        </div>
        <div data-aos="fade-up" data-aos-duration="2000" className="col-md-3 col-sm-6">
            <div className="our-team">
                <div className="pic">
                    <img src={Images.eslam} alt=""></img>
                </div>
                <h3 className="title">{t("member21-name")}</h3>
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
                    <img src={Images.fouda} alt=""></img>
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
                    <img src={Images.assem} alt=""></img>
                </div>
                <h3 className="title">{t("member16-name")}</h3>
                <span className="post">{t("job13")}</span>
                <ul className="social">
                </ul>
            </div>
        </div>

        <div data-aos="fade-up" data-aos-duration="2000" className="col-md-3 col-sm-6">
            <div className="our-team">
                <div className="pic">
                    <img src={Images.saad} alt=""></img>
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
                    <img src={Images.hussien} alt=""></img>
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
                    <img src={Images.samee} alt=""></img>
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

<div className="row ">
  
        <div data-aos="fade-up" data-aos-duration="2000" className="col-md-3 col-sm-6">
            <div className="our-team">
                <div className="pic">
                    <img src={Images.salma} alt=""></img>
                </div>
                <h3 className="title">{t("member22-name")}</h3>
                <span className="post">{t("job13")}</span>
                <ul className="social">
                </ul>
            </div>
        </div>

        <div data-aos="fade-up" data-aos-duration="2000" className="col-md-3 col-sm-6">
            <div className="our-team">
                <div className="pic">
                    <img src={Images.waref} alt=""></img>
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
                    <img src={Images.dalia} alt=""></img>
                </div>
                <h3 className="title">{t("member24-name")}</h3>
                <span className="post">{t("job12")}</span>
                <ul className="social">
                </ul>
            </div>
        </div>

  <div data-aos="fade-up" data-aos-duration="2000" className="col-md-3 col-sm-6">
            <div className="our-team">
                <div className="pic">
                    <img src={Images.ebeda} alt=""></img>
                </div>
                <h3 className="title">{t("member25-name")}</h3>
                <span className="post">{t("job13")}</span>
                <ul className="social">
                </ul>
            </div>
        </div>
    </div>


<div className="row justify-content-center">
        <div data-aos="fade-up" data-aos-duration="2000" className="col-md-3 col-sm-6">
            <div className="our-team">
                <div className="pic">
                    <img src={Images.abdelbaset} alt=""></img>
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
                    <img src={Images.khalil} alt=""></img>
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
                    <img src={Images.oraby} alt=""></img>
                </div>
                <h3 className="title">{t("member29-name")}</h3>
                <span className="post">{t("job7")}</span>
                <ul className="social">
                </ul>
            </div>
        </div>
        
        <div data-aos="fade-up" data-aos-duration="2000" className="col-md-3 col-sm-6">
            <div className="our-team">
                <div className="pic">
                    <img src={Images.rasesh} alt=""></img>
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