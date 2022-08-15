import './components.css';

import { Link } from 'react-router-dom';

function Nav () {
    return (
        <nav>
            <ul id='nav-links'>
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

    )
}

export default Nav;