import React from "react";
import {Nav} from "./Components/register/nav";
import {Nav2} from "./Components/register/Nav2";
import {Form} from "./Components/register/form";
import Info from "./Components/register/information";
import registerstyle from "../Assets/styles/register.module.css";

export function Register() {
    return (
        <>
            <div className={registerstyle.style}>
                <div className={registerstyle.infostyle}>
                    <Nav/>
                    <Info/>
                </div>
                <div className={registerstyle.formstyle}>
                    <Nav2/>
                    <Form/>
                </div>
            </div>
        </>
    );
}
