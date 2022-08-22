import React from 'react'
import notifstyle from "../../../Assets/styles/notif.module.css"

export function Message() {
  return (
    <div className={notifstyle.notification}>
        <div className={notifstyle.description}>
        </div>
        <div className={notifstyle.image}>
          
        </div>
    </div>
  )
}

