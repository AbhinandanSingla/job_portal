import React from "react";
import navstyle from "../../../Assets/styles/profile.module.css";
import bell from "../../../Assets/Images/profilesec/bell.jfif";
import menu from "../../../Assets/Images/profilesec/menu.svg";
import moment from "moment";
export function Navbar() {
  return (
    <div className={navstyle.Navbar}>
      <div>
        <h1> Welcome,Admin!</h1>
        <br />
        <br />
        <h2>{moment().format("dddd, Do MMMM YYYY")}</h2>
      </div>

      <div className={navstyle.icon}>
        <div className={navstyle.bellicon}>
          <img src={bell} alt="bell" />
        </div>
        <div className={navstyle.bellicon}>
          <img src={menu} alt="menu" />
        </div>
      </div>
    </div>
  );
}
