import React from "react";
import { useTranslation } from "react-i18next";
import "../index.css";
import { Link } from 'react-router-dom';

function LanguageSwitcher() {

  const { i18n } = useTranslation();

  const changeLanguage = (lng) => {
    
    i18n.changeLanguage(lng);
    
    
  }
const direction =(lng)=>{
  if (lng==="AR"){
      document.body.dir = "rtl"
  } 
  else if (lng==="EN")
  {
    document.body.dir = "ltr"
  }
}
  
  
  return (
    

    <div >
    <button className="dropbtn" onClick={() =>
    {
    changeLanguage('AR');
    direction("AR");
    
    }}>AR
    </button>

    <button className="dropbtn" onClick={() =>
    {
    changeLanguage('EN');
    direction("EN");
    }}>EN
    </button>
    </div>
  

  );
}

export default LanguageSwitcher;



