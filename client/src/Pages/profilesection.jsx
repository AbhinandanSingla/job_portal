import React from "react";
import profilestyle from "../Assets/styles/profile.module.css";
import { Navbar } from "./Components/profilesec/nav.jsx";
import Name from "./Components/profilesec/name.jsx";
import Details from "./Components/profilesec/details";
import logo from "../Assets/Images/common/logo.svg";

export function Profilesection() {
  return (
    <div className={profilestyle.profile}>
      <div className={profilestyle.sidebar}>
        <div className={profilestyle.logo}>
          <img src={logo} alt="Logo" />
          <h2>Rozgar.com</h2>
        </div>
        <div></div>
      </div>

      <div className={profilestyle.main}>
        <Navbar />
        <Name />
        <Details />
      </div>
    </div>
  );
}
