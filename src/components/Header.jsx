import './components.css';
import logo from './bplogo.png';

function Header () {
    return (
        <div className='head'>
            <img className='logo' src={logo} alt='blevins percussion logo'></img>
            <div className='vl'></div>
            <h3>North Georgia's Premier Spot for <span className='hilight-text'>Expert</span> Drum Lessons</h3>
        </div>
    )
}


export default Header;