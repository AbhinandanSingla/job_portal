import React from 'react'
import search from "../../../Assets/Images/notification/search.svg"
import notifstyle from "../../../Assets/styles/notif.module.css"
export function Searchbar() {
  return (
    <div className={notifstyle.searchbar}>
        <img src={search} alt="" />
        <input type="text" />
    </div>
  )
}

