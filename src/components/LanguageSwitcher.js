import React from "react";
import { useTranslation } from "react-i18next";
import "../App.css";

function LanguageSwitcher() {

  const { i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    document.body.dir = "rtl"
  }
 
  return (
    
    <div >
      <button onClick={() => changeLanguage('AR')} >AR</button>
      <button onClick={() => changeLanguage('EN')}>EN</button>
    </div>
  );
}

export default LanguageSwitcher;



