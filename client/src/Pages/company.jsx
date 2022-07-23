import React from "react";
import { useState } from "react";
import { Navbar } from "./Components/company/navbar";
import { Home } from "./Components/company/homeCompany";
import { AddJob } from "./Components/company/addJob";
import { Dashboard } from "./Components/company/dashboard";

export function Company() {
  const [navRoute, setRoute] = useState(0);

  function changeRoute() {
    switch (navRoute) {
      case 0:
        return <Dashboard />;
      case 1:
        return <AddJob />;
      default:
        return <Dashboard />;
    }
  }
  return (
    <section>
      <Navbar changeRoute={setRoute} navRoute={navRoute} />
      <Home route={navRoute} />
      {changeRoute()}
    </section>
  );
}
