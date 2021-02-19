import './Header.css'
import logo from '../../images/departmentOfCommerceLogo.png';

export function Header() {
    return (
        <header>
            <img className='logo' src={logo} alt='Washington State Department of Commerce Logo' width='550' height='250'/>
            <h1 id='app-title'>Portable Air Cleaner Calculator</h1>
        </header>
    )
}