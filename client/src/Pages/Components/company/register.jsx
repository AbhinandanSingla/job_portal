import React from "react";
import { Nav } from "../register/nav";
import { Nav2 } from "../register/Nav2c";
import { Form } from "../register/formc";
import Info from "../register/information";
import registerstyle from "../../../Assets/styles/register.module.css";
export function Registerc() {

return (
    <>
      <div className={registerstyle.style}>
        <div className={registerstyle.infostyle}>
          <Nav />
          <Info />
        </div>
        <div className={registerstyle.formstyle}>
          <Form />
          <Nav2 />
        </div>
      </div>
    </>
  );
}