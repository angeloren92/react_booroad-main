import AppAdminHeader from "../Components/Admin/AppAdminHeader"
import { Outlet } from "react-router-dom"

// Layout: AdminLayout
// Purpose: minimal layout for admin area (admin header + Outlet)
export default function AdminLayout() {

    return (
        <>
            <AppAdminHeader />
            <main>
                <Outlet />
            </main>
        </>
    )
}