import { Link } from "react-router-dom";
import Logo from "../assets/logo_mini.png";

// Component: AppHeader
// Purpose: top navigation used across public pages.
// No props. Keep presentational and minimal.
export default function AppHeader() {
    return (
        <div>
            <nav className="navbar bg-dark navbar-expand-sm" data-bs-theme="dark">
                <div className="container">
                    <Link to="/"><img src={Logo} alt="Logo" className="img-fluid"/></Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li className="nav-item"><Link className="nav-link active fs-5" aria-current="page" to="/">Home</Link></li>
                            <li><Link className="nav-link active fs-5" aria-current="page" to="/admin">Admin</Link></li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}