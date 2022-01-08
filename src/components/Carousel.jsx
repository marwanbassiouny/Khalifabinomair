import React from 'react';
import { useTranslation } from 'react-i18next';


 const Carousel =()=>{

 const {t} = useTranslation()
    
  return (
    <div className="servicesbox2 bg2">
  <div className="container pd-x">
  <div className="animated-title">
      <div className="text-top">
        <div>
          <span>{t("to")}</span>
          <span>{t("carousel-1")}</span>
        </div>
      </div>
    </div>
     </div>
  </div>


        )
    
}
export default Carousel;