import AppHeader from "../Components/AppHeader";
import AppFooter from "../Components/AppFooter";
import { Outlet } from "react-router-dom";

// Layout: LayoutDefault
// Purpose: default site layout used for public pages (Header + Footer + Outlet)
export default function LayoutDefault() {
    return (
        <>
            <AppHeader />
                <main className="bg-secondary py-4">
                    <Outlet />
                </main>
            <AppFooter />
        </>
    );
}