import React from "react";
import icon from ".././Assets/Images/notification/icon.svg";

import notifstyle from "../Assets/styles/notif.module.css";
import {Searchbar} from "./Components/notification/Searchbar";
import {Message} from "./Components/notification/message";
export  function Notifications() {
  return (
    <div className={notifstyle.notif}>
        <div className={notifstyle.navbar}>
            <h1>Notifications</h1>        
            <img src={icon} alt="icon" />
        </div>
        <Searchbar/>
        <Message/>
        
     </div>
  )
}




