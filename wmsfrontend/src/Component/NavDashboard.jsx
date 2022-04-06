import { Link } from "react-router-dom";
export default function NavDashboard(params) {
    return (<div>
        <nav className='nav'>
            <Link className='mylink' to='/'>Home</Link>| {" "}
            <Link className='mylink' to={'/'}>LogOut</Link>
            <p className="username">Welcome <b>{params.firstName}</b></p>
        </nav>
    </div>);
}