import i18n from "i18next";
import Backend from 'i18next-http-backend';
import { initReactI18next } from "react-i18next";

//get language from localStorage save before
const language ='en';

i18n
  .use(Backend)
  .use(initReactI18next)
  .init({
    lng: language,
    backend: {
      /* translation file path */
      loadPath: "/i18n/{{ns}}/{{lng}}.json",
    },
    fallbackLng: language,
    debug: false,
    /* can have multiple namespace, in case you want to divide a huge translation into smaller pieces and load them on demand */
    ns: ["translations"],
    defaultNS: "translations",
    react: {
        useSuspense: false,
    },
  });

export default i18n;
