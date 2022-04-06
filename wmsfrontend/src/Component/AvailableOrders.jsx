import { Link } from "react-router-dom";
import Footer from "./Footer";
import NavDashboard from "./NavDashboard";
import DashboardNavOrders from "./DashboardNavOrders";
export default function AvailableOrders() {
    return (
        <div>
            <NavDashboard/>
            <DashboardNavOrders/>
            <div className="availableOrders" style={{ 'textAlign': 'center' }}>
                <Link to={'/'}><li className="al">Order from client A</li></Link>
                <Link to={''}><li className="al">Order from client B</li></Link>
                <Link to={''}><li className="al">Order from client C</li></Link>
                <Link to=''><li className="al">Order from client D</li></Link>
                <Link to=''><li className="al">Order from client E</li></Link>
            </div>
            <Footer />
        </div>
    );
}