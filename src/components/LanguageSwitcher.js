import React from "react";
import { useTranslation } from "react-i18next";
import "../index.css";
import { Link } from 'react-router-dom';

function LanguageSwitcher() {

  const { i18n } = useTranslation();

  
  
  const changeLanguage = () => {
    i18n.changeLanguage(i18n.language === "ar" ? "en" : "ar");
    //change html layout dependent on user selected language
    document.body.setAttribute("lang", i18n.language);
    document.body.setAttribute("dir", i18n.language === "en" ? "ltr" : "rtl");
    document.body.setAttribute("class", i18n.language === "en" ? "text-left" : "text-right");
}
  
  return (
    <div >
    <button className="dropbtn" onClick={() =>changeLanguage()}>Language</button>
  </div>
  
  );
}

export default LanguageSwitcher;



