import React from 'react'
import profilestyle from "./../Assets/styles/profile.module.css";
import logo from "../Assets/Images/common/logo.svg";
import { Navbar } from "./Components/Companyprofilesec/nav";
import Name from "./Components/Companyprofilesec/name.jsx";
import Details from "./Components/Companyprofilesec/details.jsx";


export const Companyprofile = () => {
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
  )
}
