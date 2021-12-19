import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import { useTranslation } from 'react-i18next';
import { useContext } from 'react';
import LocaleContext from './LocaleContext';

const Float =()=>{
    const {t} = useTranslation()
    const { locale } = useContext(LocaleContext);

      
    
        
   
 return(
   
   <div className="float-button">

    <a href="#" className="float" id="menu-share">
       <i className="my-float"><WhatsAppIcon /></i>
    </a>
   
    <ul >
        <a className="floatt" href="https://api.whatsapp.com/send?phone=971502567619" ><WhatsAppIcon /><li>{t("abu dhabi")}</li></a>

        <a className="floatt" href="https://api.whatsapp.com/send?phone=201272406053" ><WhatsAppIcon /><li>{t("dubai")}</li></a>
    </ul>

</div>
    )
}
export default Float;