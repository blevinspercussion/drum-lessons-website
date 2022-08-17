import './components.css';
import logo from './bplogo.png';

import { Link } from 'react-router-dom';

function Header () {
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
        </div>
    )
}


export default Header;