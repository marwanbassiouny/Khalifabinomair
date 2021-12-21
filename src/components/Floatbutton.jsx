import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import { useTranslation } from 'react-i18next';
import { useContext } from 'react';
import LocaleContext from './LocaleContext';


const Float =()=>{

    const {t} = useTranslation()
    const { locale } = useContext(LocaleContext); 
 
 return(
   
   <div className="float-button">
       
<div className="float bounce">    
    <a href="https://api.whatsapp.com/send?phone=201272406053" className='floatt ' >
        <i className="my-float"><WhatsAppIcon /></i>
    </a>
    <div className="label-container">
    <div className="label-text">{t("dubai")}</div>
        <i className="label-arrow"></i>
    </div>
 </div> 

<div className="float bounce"> 
    <a href="https://api.whatsapp.com/send?phone=201272406053" className='floatt '>
        <i class="my-float"><WhatsAppIcon /></i>
    </a>
    <div className="label-container">
    <div className="label-text">{t("abu dhabi")}</div>
        <i className="label-arrow"></i>
    </div>
</div>

</div>
    )
}
export default Float;