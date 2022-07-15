import React from "react";
import logo from "../../../Assets/Images/common/logo.svg";
import loginstyle from "../../../Assets/styles/register.module.css";
import accountimg from "../../../Assets/Images/register/account.png";
export function Nav() {
  return (
    <div className={loginstyle.navbar}>
      <div className={loginstyle.logo}>
        <img src={logo} alt="Logo" />
        <h2>Rozgar.com</h2>
      </div>
      <div className={loginstyle.signin}>
        <a href="http://localhost:3000/login">Already a member ? </a>

        <img src={accountimg} alt="img" />
      </div>
    </div>
  );
}
