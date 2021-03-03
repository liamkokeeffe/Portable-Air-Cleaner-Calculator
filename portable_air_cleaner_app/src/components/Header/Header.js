import './Header.css'
import logo from '../../images/departmentOfCommerceLogo.png';
import { Link } from 'react-router-dom'

export function Header() {
    return (
        <div id="header-container">
            <header>
                <div id="logo-container">
                    <img className='logo' src={logo} alt='Washington State Department of Commerce Logo' width='550' height='250'/>
                </div>
            </header>
            <div id="tabs-container">
                <div className='tab'>
                    <a href="/" className="tab">Calculator</a>
                    <a href="/about" className="tab">About</a>
                    <a href="/additional-resources" className="tab">Resources</a>
                </div>
            </div>
        </div>
    )
}