import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import en from '@locales/en.json';

i18n.use(initReactI18next).init({
  compatibilityJSON: 'v3',
  fallbackLng: 'en',
  ns: ['common'],
  defaultNS: 'common',
  lng: 'en',
  interpolation: {
    escapeValue: false
  },
  react: {
    useSuspense: false,
    bindI18n: ''
  },
  resources: { en }
});

export default i18n;
