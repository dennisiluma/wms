import Header from "./Header";
import Footer from "./Footer";
import { useNavigate } from "react-router-dom";

export default function Login() {

    const navigate = useNavigate();

    return (<div>
        <Header/>
        <form className="loginForm">
            <h3>Please Enter Your Details To LogIn</h3>
            <div className="row">
                <label>Email</label>
                <input type="email" placeholder="email here ..." />
            </div>
            <div className="row">
                <label>Password</label>
                <input type="password" placeholder="password here ..." />
            </div>
            <div className="row">
                <input onClick={() => navigate('/dashboard')} type="submit" value={'Submit'} />
            </div>
        </form>
        <Footer/>
    </div>);
}