import { Link } from "react-router-dom";
import Footer from "./Footer";
import NavDashboard from "./NavDashboard";
import DashboardNavOrders from "./DashboardNavOrders";
export default function FulfilledOrders() {
    return (
        <div>
            <NavDashboard/>
            <DashboardNavOrders/>
            <div className="availableOrders" style={{ 'textAlign': 'center' }}>
                <Link to={'/'}><li className="al">fullfilled order from client A</li></Link>
                <Link to={''}><li className="al">fullfilled order from client B</li></Link>
                <Link to={''}><li className="al">fullfilled order from client C</li></Link>
                <Link to=''><li className="al">fullfilled order from client D</li></Link>
                <Link to=''><li className="al">fullfilled order from client E</li></Link>
            </div>
            <Footer />
        </div>
    );
}