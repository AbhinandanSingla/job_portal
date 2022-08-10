import React from "react";
import companyModule from "../../../Assets/styles/company.module.css";
import imageRight from "../../../Assets/Images/company/loginLeft.png";
import { NavLink } from "react-router-dom";
import logo from "../../../Assets/Images/common/logo.svg";

export const Login_company = () => {
  return (
    <div className={companyModule.loginContainer}>
      <div className={companyModule.loginLeft}>
        <img src={imageRight} alt="image-right" id={companyModule.imageleft} />
        <div>
          <NavLink to="/" className={companyModule.RozgarLink}>
            <img src={logo} alt="" />
            <h3>Rozgar.com</h3>
          </NavLink>
        </div>
        {/* <div> */}
        <h2>Welcome to</h2>
        <h1>Rozgar.com</h1>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quo hic et
          qui tempore? Commodi accusamus molestiae consectetur autem. Vero alias
          earum aliquam optio quos nemo molestias cumque ullam provident natus!
        </p>
        {/* </div> */}
      </div>
      <div className={companyModule.loginRight}>
        <h1>Log in</h1>

        <div className={companyModule.loginInputs}>
          <p>Account</p>
          <label htmlFor="name">
            <i class="zmdi zmdi-account zmdi-hc-2x"></i>
            <input
              type="text"
              name="name"
              id="name"
              placeholder="username"
              autoComplete="off"
            />
          </label>
          <label htmlFor="password">
            <i class="zmdi zmdi-lock zmdi-hc-2x"></i>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="password"
              autoComplete="off"
            />
          </label>
          <a href="#">Forgot your password?</a>
        </div>

        <div className={companyModule.loginbtnDiv}>
          <div>
            <input type="checkbox" />
            Remember me
          </div>
          <button>
            <NavLink to={"/company"} />
            Login
          </button>
        </div>

        <div className={companyModule.registerLinkDiv}>
          Don't have an account?
          <a href="#">Register Here</a>
        </div>
      </div>
    </div>
  );
};
