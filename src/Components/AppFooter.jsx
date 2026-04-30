import Logo from "../assets/logo_footer.png";

// Component: AppFooter
// Purpose: site footer with branding and copyright.
// No props; purely presentational.
export default function AppFooter() {
    return (
        <footer className="bg-dark text-light py-3">
            <div className="container">
                <div className="row gy-4">
                    <div className="col-12 text-center d-flex align-items-center">
                        <img src={Logo} alt="Logo" className="img-fluid float-start"/>
                        <p className="text-secondary d-inline">
                            La tua bussola per esplorare il mondo. L'App ideata per semplificare la pianificazione dei Tour Leaders.
                        </p>
                    </div>
                </div>

                <div className="text-center pt-4 border-top border-secondary text-secondary small">
                    &copy; {new Date().getFullYear()} BooRoad. Tutti i diritti riservati.
                </div>
            </div>
        </footer>
    );
};