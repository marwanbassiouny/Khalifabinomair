import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import detector from "i18next-browser-languagedetector";
import translation from './locales/ar/translation.json';
import translatione from './locales/en/translation.json';

const resources = {
  AR: {
    translation: translation
  },
  EN: {
    translation: translatione
  }
};

i18n
.use(initReactI18next)
.use(detector)

  
.init({
  resources,
    fallbackLng: "EN",
    keySeparator: false, 
    interpolation: {
      escapeValue: false,
    },
    react: {
      useSuspense: false
    },
    debug: process.env.NODE_ENV === "development",
  });

export default i18n;