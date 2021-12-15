import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import detector from "i18next-browser-languagedetector";
import translation from './locales/ar/translation.json';
import translatione from './locales/en/translation.json';
import Backend from 'i18next-http-backend';
import I18nextBrowserLanguageDetector from "i18next-browser-languagedetector";

const resources = {
  ar: {
    translation: translation
  },
  en: {
    translation: translatione
  }
};

i18n
.use(initReactI18next)
.use(detector)

.use(Backend)
.use(I18nextBrowserLanguageDetector)
.init({
  resources,
    fallbackLng: "en",
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