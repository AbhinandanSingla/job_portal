import React from "react";
import logo from "../../../Assets/Images/common/logo.svg";
import loginstyle from "../../../Assets/styles/register.module.css";
export function Nav() {
  return (
    <div className={loginstyle.navbar}>
      <div className={loginstyle.logo}>
        <img src={logo} alt="Logo" />
        <h2>Rozgar.com</h2>
      </div>
    </div>
  );
}
