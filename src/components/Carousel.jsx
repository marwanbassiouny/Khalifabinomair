import React from 'react';
import image from "../images/home-bg.jpg"
import image2 from "../images/dubai.jpg"
import image3 from "../images/dubai2.jpg"
import { useTranslation } from 'react-i18next';


 const Carousel =()=>{

 const {t} = useTranslation()
    
  return (
    <div id="carouselExampleFade" className="carousel slide carousel-fade" data-bs-ride="carousel">
      <div div className="carousel-inner">
            <div className="carousel-item active">
                <img src={image3} className="d-block h-50 w-100 " alt="..."></img>
                <div class="animated-title">
                <div class="text-top">
                  <div>
                    <span>{t("to")}</span>
                    <span>{t("carousel-1")}</span>
                  </div>
                </div>
                <div class="text-bottom">
                  <div>{t("carousel-2")}</div>
                </div>
              </div>
            </div>
            
      </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
        </button>
        <button button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
        </button>
    </div>
        )
    
}
export default Carousel;