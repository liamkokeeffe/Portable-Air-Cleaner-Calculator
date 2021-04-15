import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';

import translationEN from './translations/translationEN.json';
import translationES from './translations/translationES.json';

const resources = {
  en: {
    translation: translationEN
  },
  es: {
    translation: translationES
  }
}

const detectOptions = {
  // order and from where user language should be detected
  order: ['querystring', 'navigator']
};

i18n
  // detect user language
  // learn more: https://github.com/i18next/i18next-browser-languageDetector
  .use(LanguageDetector)
  // pass the i18n instance to react-i18next.
  .use(initReactI18next)
  // init i18next
  // for all options read: https://www.i18next.com/overview/configuration-options
  .init({
    resources,
    fallbackLng: 'en',
    debug: true,
    supportedLngs: ['en', 'es'],
    detection: detectOptions,
    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    }
  });


export default i18n;