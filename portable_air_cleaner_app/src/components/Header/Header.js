import './Header.css'
import logo from '../../images/departmentOfCommerceLogo.png';
import {LanguageSelection} from './LanguageSelection.js';
import { useTranslation } from 'react-i18next';

export function Header() {
    const {t} = useTranslation();

    return (
        <div id="header-container">
            <header>
                <img id='wa-dept-of-commerce-logo' src={logo} alt='Washington State Department of Commerce Logo' width='550' height="250" />
                <div id="tabs-container">
                    <div className='tab'>
                        <a href="Portable-Air-Cleaner-Calculator/#/" className="tab">{t('Tabs.Calculator')}</a>
                        <span className="tab-divider">|</span>
                        <a href="Portable-Air-Cleaner-Calculator/#/about" className="tab">{t('Tabs.About')}</a>
                        <span className="tab-divider">|</span>
                        <a href="Portable-Air-Cleaner-Calculator/#/additional-resources" className="tab">{t('Tabs.Resources')}</a>
                    </div>
                </div>
                <LanguageSelection />
            </header>
        </div>
    )
}