import './Header.css';
import logo from '../../images/departmentOfCommerceLogo.png';
import {LanguageSelection} from './LanguageSelection.js';
import { useTranslation } from 'react-i18next';

export function Header() {
    const {t} = useTranslation();

    function expandHamburgerMenu() {
        if (document.querySelector('#tabs-container').style.display === '') {
            document.querySelector('#tabs-container').style.display = 'flex';
        } else {
            document.querySelector('#tabs-container').style.display = '';
        }
    }

    return (
        <div id="header-container">
            <header>
                <img id='wa-dept-of-commerce-logo' src={logo} alt='Washington State Department of Commerce Logo' />
                <nav>
                    <div id="tabs-container">
                        <a href="/" className="tab">{t('Tabs.Home')}</a>
                        <span className="tab-divider">|</span>
                        <a href="/about" className="tab">{t('Tabs.About')}</a>
                        <span className="tab-divider">|</span>
                        <a id="resources-tab" href="/additional-resources" className="tab">{t('Tabs.Resources')} </a>
                    </div>
                    <div id='hamburger-menu' onClick={() => expandHamburgerMenu()}>
                        <div className="hamburger-menu-line"></div>
                        <div className="hamburger-menu-line"></div>
                        <div className="hamburger-menu-line"></div>
                    </div>
                </nav>
                <LanguageSelection />
            </header>
        </div>
    )
}