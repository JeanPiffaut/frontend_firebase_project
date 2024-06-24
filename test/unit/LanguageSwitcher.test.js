/**
 * @jest-environment jsdom
 */

import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import  '../../src/components/i18n';
import LanguageSwitcher from '../../src/components/LanguageSwitcher';
import i18n from "i18next";

describe('LanguageSwitcher component', () => {

    it('renders LanguageSwitcher component in English and switches to Spanish', async () => {
        i18n.changeLanguage('en');
        const { getByText } = render(<LanguageSwitcher />);
        const spanishButton = getByText(/ES/i);
        expect(document.documentElement.getAttribute('lang')).toBe('en');
        expect(document.title).toBe(`Jean Piffaut - ${i18n.t('app_title')}`);

        // Simular el cambio de idioma a español
        fireEvent.click(spanishButton);
        await Promise.resolve(); // Esperar a que la promesa del cambio de idioma se resuelva

        expect(document.documentElement.getAttribute('lang')).toBe('es');
        expect(document.title).toBe(`Jean Piffaut - ${i18n.t('app_title')}`);
    });

    it('renders LanguageSwitcher component in Spanish and switches to English', async () => {
        i18n.changeLanguage('es');
        const { getByText } = render(<LanguageSwitcher />);
        const englishButton = getByText(/EN/i);

        expect(document.documentElement.getAttribute('lang')).toBe('es');
        expect(document.title).toBe(`Jean Piffaut - ${i18n.t('app_title')}`);

        // Simular el cambio de idioma a inglés
        fireEvent.click(englishButton);
        await Promise.resolve(); // Esperar a que la promesa del cambio de idioma se resuelva

        expect(document.documentElement.getAttribute('lang')).toBe('en');
        expect(document.title).toBe(`Jean Piffaut - ${i18n.t('app_title')}`);
    });
});
