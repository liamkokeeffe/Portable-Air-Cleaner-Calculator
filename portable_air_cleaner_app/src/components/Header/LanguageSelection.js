import { useTranslation } from 'react-i18next';
import './LanguageSelection.css';

export function LanguageSelection() {
    const {t, i18n} = useTranslation();

    function getCurrentLanguage() {
        if (i18n.language === 'es') {
            return 'es';
        }
    }

    return (
        <div id='language-selection'>
            <label htmlFor='language-selection-dropdown'>{t('Language')}</label>
            <select id='language-selection-dropdown' onChange={(e) => i18n.changeLanguage(e.target.value)} value={getCurrentLanguage()}>
                <option value='en'>English</option>
                <option value='es'>Español</option>
            </select>
        </div>
    )
}