import Header from "./Header";
import Footer from "./Footer";
export default function Login() {
    return (<div>
        <Header/>
        <form className="loginForm">
            <h3>Please Enter Your Details To LogIn</h3>
            <div className="row">
                <label>Email</label>
                <input type="email" placeholder="email here ..." required />
            </div>
            <div className="row">
                <label>Password</label>
                <input type="password" placeholder="password here ..." required />
            </div>
            <div className="row">
                <input type="submit" value={'Submit'} />
            </div>
        </form>
        <Footer/>
    </div>);
}