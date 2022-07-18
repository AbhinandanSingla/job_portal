import React from "react";
import loginstyle from "../../../Assets/styles/register.module.css";
import accounting from "../../../Assets/Images/register/account.png";
export function Nav2() {
  return (
    <div className={loginstyle.navbar}>
      <div className={loginstyle.signin}>
        <a href="http://localhost:3000/login">Already a member ? </a>

        <img src={accounting} alt="img" />
      </div>
    </div>
  );
}
