import './components.css';

import { Link } from 'react-router-dom';
import closeIcon from './icon-close.svg';

function HamburgerMenu ({ toggleMobileMenu }) {
    return (
        <div className='hamburger-menu'>
            <img className='close-icon' onClick={toggleMobileMenu} src={closeIcon} alt='close menu'></img>
            <nav>
            <ul id='mobile-nav-links'>
                <li>
                    <Link to={'./about'}><p className='link'>About</p></Link>
                </li>
                <li>
                    <Link to={'./lessons'}><p className='link'>Lessons</p></Link>
                </li>
                <li>
                    <Link to={'./faq'}><p className='link'>FAQ</p></Link>
                </li>
                <li>
                    <Link to={'./contact'}><p className='link'>Contact</p></Link>
                </li>
            </ul>
        </nav>
        </div>

    )
}

export default HamburgerMenu;