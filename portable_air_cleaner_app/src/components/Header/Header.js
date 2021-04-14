import './Header.css';
import logo from '../../images/departmentOfCommerceLogo.png';
import {LanguageSelection} from './LanguageSelection.js';
import { useTranslation } from 'react-i18next';
import { Link } from "react-router-dom";

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
                        <Link to="/" className="tab">{t('Tabs.Home')}</Link>
                        <span className="tab-divider">|</span>
                        <Link to="/about" className="tab">{t('Tabs.About')}</Link>
                        <span className="tab-divider">|</span>
                        <Link to="/additional-resources" className="tab">{t('Tabs.Resources')}</Link>
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