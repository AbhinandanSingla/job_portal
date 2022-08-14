import React from "react";
import {useState} from "react";
import {Navbar} from "./Components/admin_aaditya/navbar_aaditya";
import {Registrations} from "./registrations_aaditya";
import {Dashboard} from "./Components/admin_aaditya/dashboard_aaditya";
import {Jobs} from "./Components/admin_aaditya/jobs";

export function Admin_aaditya() {
    const [navRoute, setRoute] = useState(0);

    function changeRoute() {
        switch (navRoute) {
            case 0:
                return <Dashboard/>;
            case 1:
                return <Registrations/>;
            case 2:
                return <Jobs/>;
            default:
                return <Dashboard/>;
        }
    }

    return (
        <section>
            <Navbar changeRoute={setRoute} navRoute={navRoute}/>
            {changeRoute()}
        </section>
    );
}
