import React from "react";
import { Nav } from "./Components/register/nav";
import { Form } from "./Components/register/form";
import Info from "./Components/register/information";
import registerstyle from "../Assets/styles/register.module.css";
export function Register() {
  return (
    <>
      <div className={registerstyle.style}>
        <div className={registerstyle.formstyle}>
          <Nav />
          <Form />
        </div>
        <div className={registerstyle.infostyle}>
          <Info />
        </div>
      </div>
    </>
  );
}
