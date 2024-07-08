import React from 'react';
import { useTranslation } from 'react-i18next';
import { t } from 'i18next';

function LanguageSwitcher() {
    const { i18n } = useTranslation();

    const changeLanguage = (language) => {
        i18n.changeLanguage(language).then(() => {
            const html = document.documentElement;
            html.setAttribute('lang', language);
            document.title = 'Jean Piffaut - ' + t('app_title');
            document.description = t('description');
        });
    };

    const currentLang = i18n.language;

    return (
        <div>
            {currentLang === 'en' ? (
                <a
                    href={'./#'}
                    aria-label={t('change_language')}
                    className={'btn project-button'}
                    onClick={() => changeLanguage('es')}
                >
                    <p>ES</p>
                </a>
            ) : (
                <a
                    href={'./#'}
                    aria-label={t('change_language')}
                    className={'btn project-button'}
                    onClick={() => changeLanguage('en')}
                >
                    <p>EN</p>
                </a>
            )}
        </div>
    );
}

export default LanguageSwitcher;
