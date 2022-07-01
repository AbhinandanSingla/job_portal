import React from "react";
import Popup from "./popup";
import { useState, useEffect } from "react";

function Nav() {
  const [buttonPopup, setButtonPopup] = useState(false);
  const [timedPopup, setTimedPopup] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setTimedPopup(true);
    }, 3000);
  }, []);
  return (
    <div className="nav">
      <main>
        <a onClick={() => setButtonPopup(true)}>login</a>
      </main>
      <Popup trigger={buttonPopup} setTrigger={setButtonPopup}></Popup>

      <Popup trigger={timedPopup} setTrigger={setTimedPopup}></Popup>
    </div>
  );
}

export default Nav;
