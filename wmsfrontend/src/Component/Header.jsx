import logo from '../images/maxlogo.png';
import { Link } from 'react-router-dom';
function Header() {
    return (
        <div>
            {/* <img className="logo" src={logo} alt="Max logo" /> */}
            <nav className='nav'>
                <Link className='mylink' to='/'>Home</Link>| {" "}
                <Link className='mylink' to={'/about'}>About Us</Link>| {" "}
                <Link className='mylink' to={'/login'}>Log In</Link>
            </nav>
        </div>
    );
}
export default Header;