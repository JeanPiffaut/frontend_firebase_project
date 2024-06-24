import { changeLanguage, translate } from '../../src/components/i18n';
import en from '../../src/langs/en.json';
import es from '../../src/langs/es.json';

test('translates text based on selected language', () => {
    changeLanguage('en');
    expect(translate('welcome')).toBe(en.welcome);

    changeLanguage('es');
    expect(translate('welcome')).toBe(es.welcome);
});
