import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import en from '../langs/en.json';
import es from '../langs/es.json';

const resources = {
    en: {
        translation: en,
    },
    es: {
        translation: es,
    },
};

i18n.use(LanguageDetector)
    .use(initReactI18next)
    .init({
        resources,
        fallbackLng: 'en',
        interpolation: {
            escapeValue: false,
        },
        detection: {
            order: ['localStorage', 'navigator'],
            caches: ['localStorage'],
        },
    })
    .then(() => {
        const languageCode = i18n.language;
        const html = document.documentElement;
        html.setAttribute('lang', languageCode);
    });

export default i18n;