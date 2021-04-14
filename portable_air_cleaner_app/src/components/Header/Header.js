import './Header.css'
import logo from '../../images/departmentOfCommerceLogo.png';
import {LanguageSelection} from './LanguageSelection.js';
import { useTranslation } from 'react-i18next';
import { Link } from "react-router-dom";

export function Header() {
    const {t} = useTranslation();

    return (
        <div id="header-container">
            <header>
                <img id='wa-dept-of-commerce-logo' src={logo} alt='Washington State Department of Commerce Logo' width='550' height="250" />
                <div id="tabs-container">
                    <div className='tab'>
                        <Link to="/" className="tab">{t('Tabs.Calculator')}</Link>
                        <span className="tab-divider">|</span>
                        <Link to="/about" className="tab">{t('Tabs.About')}</Link>
                        <span className="tab-divider">|</span>
                        <Link to="/additional-resources" className="tab">{t('Tabs.Resources')}</Link>
                    </div>
                </div>
                <LanguageSelection />
            </header>
        </div>
    )
}