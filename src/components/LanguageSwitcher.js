import React from "react";
import { useTranslation } from "react-i18next";
import "../App.css";


function LanguageSwitcher() {
  const { i18n } = useTranslation();

  return (
    
    <div >
      <select
        lng={i18n.language}
        onChange={(e) =>
          i18n.changeLanguage(e.target.value)
        }
      >
        <option value="en">English</option>
        <option value="ar">عربي</option>
      </select>
    </div>
  );
}

export default LanguageSwitcher;