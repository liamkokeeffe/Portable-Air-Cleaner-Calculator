import './Header.css'
import logo from '../../images/departmentOfCommerceLogo.png';
import coralLogo from '../../images/coral_logo.png';
import { useTranslation } from 'react-i18next';

export function Header() {
    const {t} = useTranslation();

    return (
        <div id="header-container">
            <header>
                <div>
                    <img className='logo' src={logo} alt='Washington State Department of Commerce Logo' width='550' height='250'/>
                </div>
            </header>
            <div id="tabs-container">
                <div className='tab'>
                    <a href="/" className="tab">{t('Tabs.Calculator')}</a>
                    <span className="tab-divider">|</span>
                    <a href="/about" className="tab">{t('Tabs.About')}</a>
                    <span className="tab-divider">|</span>
                    <a href="/additional-resources" className="tab">{t('Tabs.Resources')}</a>
                </div>
            </div>
            <div id="team-logo-container">
                <img src={coralLogo} alt="Team Logo" id="team-logo"/>
            </div>
        </div>
    )
}