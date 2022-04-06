import { Link } from "react-router-dom";
export default function DashboardNavOrders() {
    return (
        <div>
            <nav className="dashboardHome">
                <Link to={'/availableOrders'}><button>Available Orders</button></Link>
                <Link to={'/inProgressOrders'}><button>Order In Progres</button></Link>
                <Link to={'/fulfilledOrders'}><button>Fulfilled Orders</button></Link>
                <Link to={'/createWalkInCusOrder'}><button>Create Order For Walk In Customer</button></Link>
                <Link to={'/createClientOrder'}><button>Create Order For Existing Client</button></Link>
            </nav>
        </div>);
}