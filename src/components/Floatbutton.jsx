import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import { useTranslation } from 'react-i18next';

const Float =()=>{

    const {t} = useTranslation()
    

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
    <a href="https://api.whatsapp.com/send?phone=+971 50 256 7619" className='floatt '>
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