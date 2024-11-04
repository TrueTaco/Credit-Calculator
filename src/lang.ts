import i18next from "i18next";
import { initReactI18next } from "react-i18next";

i18next.use(initReactI18next).init({
  debug: true,
  fallbackLng: "en",
  lng: "de",
  resources: {
    en: {
      translation: {
        loan: "Loan",
      },
    },
    de: {
      translation: {
        loan: "Darlehen",
      },
    },
  },
});
