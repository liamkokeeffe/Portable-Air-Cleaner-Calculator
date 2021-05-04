import './Header.css';
import logo from '../../images/departmentOfCommerceLogo.png';
import { useTranslation } from 'react-i18next';
import { Link } from "react-router-dom";
import {Home} from '../Home.js'

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
                        <Link to="/resources" className="tab">{t('Tabs.Resources')}</Link>
                        <span className="tab-divider">|</span>
                        <Link to="/help" className="tab">{t('Help')}</Link>
                    </div>
                    <div id='hamburger-menu' onClick={() => expandHamburgerMenu()}>
                        <div className="hamburger-menu-line"></div>
                        <div className="hamburger-menu-line"></div>
                        <div className="hamburger-menu-line"></div>
                    </div>
                </nav>
            </header>
        </div>
    )
}