import logo from '../images/maxlogo.png';
function Header() {
    return (
        <div>
            {/* <img className="logo" src={logo} alt="Max logo" /> */}
            <nav className='nav'>
                <li><a href="">About US</a></li>
                <li><a href="">Contact US</a></li>
                <li><a href="">Log In</a></li>
            </nav>
        </div>
    );
}
export default Header;