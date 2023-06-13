import React from "react";
import { useTranslation } from 'react-i18next';
import Images from "../Images"
import TeamMember from "./team";
import { Link} from "react-router-dom";
import { Row,Col } from "react-bootstrap";
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
                <p className="about-team-text">{t("approach")}</p>
            </div>
        </div>
    </div>
    <div>      
        <div className="wel-head">
            <h2 className="wel-title">{t("ourteam")}</h2>
            <span className="linee"></span>
        </div>

    <div className="Team pd-y">
    

    <div className="team-mx">
        <Row className="justify-content-center row" >
            {TeamMember.slice(0,1).map((item) => (
                <Col lg={3} md={5} sm={5} xs={10} key={item.id} className="d-flex justify-content-center" data-aos="fade-up" data-aos-duration="3000">
                    <div class="our-team" >
                    
                        <div className="pic ">
                            <img src={item.image} alt=""></img>
                        </div>
                        <h3 className="title">{t(`member${item.id}`)}</h3>
                        <span className="post">{t(`job${item.id}`)}</span>
                        <span className="post">{t(`title${item.id}`)}</span>
                        {/* <span className="post">{t(`job${item.id-1}`)}</span> */}
                        <Link
                            to={{pathname: `/Lawyers/${item.id}`}}
                            state={{item:item}}
                            >
                            {item.phone===""?"":<button style={{textTransform:"capitalize",color:"#17bebb",borderColor:"#17bebb"}}  type="button" class="btn view-team-btn">{t("read")}</button>}
                        </Link>
                        <ul className="social">
                        </ul>
                    </div>
                </Col>
            ))}
        </Row>  

        <div className="row justify-content-center">
            {TeamMember.slice(1,5).map((item) => (
                <Col lg={3} md={5} sm={5} xs={10} key={item.id} className="d-flex justify-content-center" data-aos="fade-up" data-aos-duration="3000">
                    <div class="our-team" >
                    
                        <div className="pic ">
                            <img src={item.image} alt=""></img>
                        </div>
                        <h3 className="title">{t(`member${item.id}`)}</h3>
                        <span className="post">{t(`job${item.id}`)}</span>
                        {/* <span className="post">{t(`job${item.id-1}`)}</span> */}
                        <Link
                        to={{pathname: `/Lawyers/${item.id}`}}
                        state={{item:item}}
                        >
                       {item.phone===""?"":<button style={{textTransform:"capitalize",color:"#17bebb",borderColor:"#17bebb"}}  type="button" class="btn view-team-btn">{t("read")}</button>}
                    </Link>
                        <ul className="social">
                        </ul>
                    </div>
                </Col>
            ))}
        </div>

        <div className="row justify-content-center">
            {TeamMember.slice(5,9).map((item) => (
                <Col lg={3} md={5} sm={5} xs={10} key={item.id} className="d-flex justify-content-center" data-aos="fade-up" data-aos-duration="3000">
                    <div class="our-team" >
                    
                        <div className="pic ">
                            <img src={item.image} alt=""></img>
                        </div>
                        <h3 className="title">{t(`member${item.id}`)}</h3>
                        <span className="post mb-0">{t(`job${item.id}`)}</span>
                        <span className="post">{t(`title${item.id}`)}</span>
                        {/* <span className="post">{t(`job${item.id-1}`)}</span> */}
                        <Link
                            to={{pathname: `/Lawyers/${item.id}`}}
                            state={{item:item}}
                            >
                        {item.phone===""?"":<button style={{textTransform:"capitalize",color:"#17bebb",borderColor:"#17bebb"}}  type="button" class="btn view-team-btn">{t("read")}</button>}
                        </Link>
                        <ul className="social">
                        </ul>
                    </div>
                </Col>
            ))}
        </div>

        <div className="row justify-content-center">
            {TeamMember.slice(9,25).map((item) => (
                <Col lg={3} md={5} sm={5} xs={10} key={item.id} className="d-flex justify-content-center" data-aos="fade-up" data-aos-duration="3000">
                    <div class="our-team" >
                    
                        <div className="pic ">
                            <img src={item.image} alt=""></img>
                        </div>
                        <h3 className="title">{t(`member${item.id}`)}</h3>
                        <span className="post">{t(`job${item.id}`)}</span>
                        {/* <span className="post">{t(`job${item.id-1}`)}</span> */}
                        <Link
                        to={{pathname: `/Lawyers/${item.id}`}}
                        state={{item:item}}
                        >
                       {item.phone===""?"":<button style={{textTransform:"capitalize",color:"#17bebb",borderColor:"#17bebb"}}  type="button" class="btn view-team-btn">{t("read")}</button>}
                    </Link>
                        <ul className="social">
                        </ul>
                    </div>
                </Col>
            ))}
            
        </div>

        <div className="row justify-content-center">
        {TeamMember.slice(33,34).map((item) => (
                <Col lg={3} md={5} sm={5} xs={10} key={item.id} className="d-flex justify-content-center" data-aos="fade-up" data-aos-duration="3000">
                    <div class="our-team" >
                    
                        <div className="pic ">
                            <img src={item.image} alt=""></img>
                        </div>
                        <h3 className="title">{t(`member${item.id}`)}</h3>
                        <span className="post">{t(`job${item.id}`)}</span>
                        {/* <span className="post">{t(`job${item.id-1}`)}</span> */}
                        <Link
                        to={{pathname: `/Lawyers/${item.id}`}}
                        state={{item:item}}
                        >
                       {item.phone===""?"":<button style={{textTransform:"capitalize",color:"#17bebb",borderColor:"#17bebb"}}  type="button" class="btn view-team-btn">{t("read")}</button>}
                    </Link>
                        <ul className="social">
                        </ul>
                    </div>
                </Col>
            ))}

            {TeamMember.slice(25,33).map((item) => (
                <Col lg={3} md={5} sm={5} xs={10} key={item.id} className="d-flex justify-content-center" data-aos="fade-up" data-aos-duration="3000">
                        <div class="our-team" >
                        
                            <div className="pic ">
                                <img src={item.image} alt=""></img>
                            </div>
                            <h3 className="title">{t(`member${item.id}`)}</h3>
                            <span className="post">{t(`job${item.id}`)}</span>
                            {/* <span className="post">{t(`job${item.id-1}`)}</span> */}
                            <Link
                            to={{pathname: `/Lawyers/${item.id}`}}
                            state={{item:item}}
                            >
                           {item.phone===""?"":<button style={{textTransform:"capitalize",color:"#17bebb",borderColor:"#17bebb"}}  type="button" class="btn view-team-btn">{t("read")}</button>}
                        </Link>
                            <ul className="social">
                            </ul>
                        </div>
                    </Col>
                ))}
            </div>  

            </div>
        </div>
    </div>
</div>

    


       
    

  )
}
  
export default About;