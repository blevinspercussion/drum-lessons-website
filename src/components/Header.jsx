import './components.css';
import logo from './bplogo.png';
import hamburger from './icon-menu.svg';

import HamburgerMenu from './HamburgerMenu';

import { Link } from 'react-router-dom';
import { useState } from 'react';

function Header () {

    const [showMobileMenu, setShowMobileMenu] = useState(false);

    const toggleMobileMenu = () => {
        showMobileMenu ? setShowMobileMenu(false) : setShowMobileMenu(true);
    }

    return (
        <div className='head'>
            <div>
            <Link to={'/'}>
                <img className='logo' src={logo} alt='blevins percussion logo'></img>
            </Link>
            <h3>North Georgia's Premier Spot for <span className='hilight-text'>Expert</span> Drum Lessons</h3>
            </div>
            <div className='vl'></div>
            <div>
            
            <h3>706 623 DRUM</h3>
            <h3>blevinspercussion@gmail.com</h3>
            </div>
            <img className='hamburger-icon' src={hamburger} onClick={toggleMobileMenu} alt='mobile menu'></img>
            
            {(() => {
                if (showMobileMenu) {
                    return <HamburgerMenu toggleMobileMenu={toggleMobileMenu} />
                }
            })()}

        </div>
    )
}


export default Header;