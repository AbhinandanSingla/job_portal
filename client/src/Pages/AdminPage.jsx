import React from "react";
import {useState} from "react";
import {Navbar} from "./Components/admin/AdminNavbar";
import {Registrations} from "./AdminCompanyRegistration";
import {Jobs} from "./Components/admin/jobs";
import {AdminDashboard} from "./Components/admin/A_dashboard";

export function AdminPage() {
    const [navRoute, setRoute] = useState(0);

    function changeRoute() {
        switch (navRoute) {
            case 0:
                return <AdminDashboard/>;
            case 1:
                return <Registrations/>;
            case 2:
                return <Jobs/>;
            default:
                return <AdminDashboard/>;
        }
    }

    return (
        <section style={{
            height: "120vh"
        }}>
            <Navbar changeRoute={setRoute} navRoute={navRoute}/>
            {changeRoute()}
        </section>
    );
}
