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
        fullLoan: "Full Loan",
        rate: "Rate",
        interestCharges: "Interest Charges",
        duration: "Duration",
        interestRate: "Interest Rate",
        repayment: "Repayment",
        interestRateFixation: "Interest rate fixation",
        years: "years",
      },
    },
    de: {
      translation: {
        loan: "Darlehen",
        fullLoan: "Gesamt Darlehen",
        rate: "Rate",
        interestCharges: "Bezahlte Zinsen",
        duration: "Laufzeit",
        interestRate: "Zinssaztz",
        repayment: "Tilgung",
        interestRateFixation: "Zinsbindung",
        years: "Jahre",
      },
    },
  },
});
