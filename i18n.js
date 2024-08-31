import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import enLanding from "./src/locales/en/Landing/landing.json";
import arLanding from "./src/locales/ar/Landing/landing.json";

i18n.use(initReactI18next).init({
  resources: {
    en: {
      landing: enLanding,
    },
    ar: {
      landing: arLanding,
    },
  },
  lng: "en", // Default language
  fallbackLng: "en",
  ns: ["landing"], // Single namespace
  defaultNS: "landing", // Default namespace
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
