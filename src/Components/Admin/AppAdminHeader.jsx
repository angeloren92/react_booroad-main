import logo from "../../assets/logo_mini.png";
import { Link } from "react-router-dom";

// Component: AppAdminHeader
// Purpose: simple admin top bar used by admin routes.
// No props.
export default function AppAdminHeader() {

    // Presentational only: logo and title
    return (
        <div>
            <nav className="navbar bg-dark navbar-expand-sm" data-bs-theme="dark">
                <div className="container">
                    <Link to={'/'}>
                        <img src={logo} alt="" className="img-fluid" />
                    </Link>
                    <h1 className="text-info">
                        BooRoad <small className="text-muted">Pagina - Admin</small>
                    </h1>
                </div>
            </nav>
        </div>
    )
}
