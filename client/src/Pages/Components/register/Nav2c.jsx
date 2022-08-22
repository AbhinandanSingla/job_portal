import React from "react";
import loginstyle from "../../../Assets/styles/register.module.css";
import accounting from "../../../Assets/Images/register/account.png";
export function Nav2() {
  return (
    <div className={loginstyle.navbar}>
      <div className={loginstyle.signinc}>
        <p > Have an account? </p> 
        <a href="http://localhost:3001/registerc"> Sign in now</a>      
      </div>
    </div>
  );
}