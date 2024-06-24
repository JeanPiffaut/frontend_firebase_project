/**
 * @jest-environment jsdom
 */

import  '../../src/components/i18n';
import en from '../../src/langs/en.json';
import es from '../../src/langs/es.json';
import i18n from "i18next";

describe('i18n configuration', () => {
    beforeAll(() => {
        // Inicializar i18n antes de cada prueba
        return i18n.init({
            resources: {
                en: { translation: en },
                es: { translation: es },
            },
            fallbackLng: 'en',
            interpolation: { escapeValue: false },
            detection: { order: ['localStorage', 'navigator'], caches: ['localStorage'] },
        });
    });

    it('should translate text based on selected language', () => {
        i18n.changeLanguage('en');
        expect(i18n.t('app_title')).toBe(en.app_title);

        i18n.changeLanguage('es');
        expect(i18n.t('app_title')).toBe(es.app_title);
    });
});
