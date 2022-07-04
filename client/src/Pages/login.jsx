import React from "react";
import { NavLink } from "react-router-dom";
import loginModule from "../Assets/styles/login.module.css";
import { useState } from "react";

export function Login() {
  const { errorMessages, setErrorMessages } = useState({});
  const { isSubmitted, setIsSubmitted } = useState(false);

  const database = [
    {
      username: "user1",
      password: "pass1",
    },
    {
      username: "user2",
      password: "pass2",
    },
  ];

  const error = [
    {
      name: "invalid username",
      password: "invalid password",
    },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    var { uname, pass } = document.forms[0];

    const userData = database.find((user) => user.username === uname.value);

    if (userData) {
      if (userData.password !== pass.value) {
        setErrorMessages({ name: "password", message: error.password });
      } else {
        setIsSubmitted(true);
      }
    } else {
      setErrorMessages({ name: "name", message: error.name });
    }
  };

  const renderErrorMessage = (name) =>
    name === errorMessages.name && (
      <div className="error">{errorMessages.message}</div>
    );

  const renderForm = (
    <section className={loginModule.LoginSection}>
      <div className={loginModule.contentBox}>
        <div className={loginModule.formBox}>
          <h2>Sign In</h2>
          <p>
            Please input your information in the fields below to enter your
            Journey platform.
          </p>
          <form
            className={loginModule.login_form}
            id={loginModule.login_form_id}
            onSubmit={handleSubmit}
          >
            <div className={loginModule.inputBox}>
              <label htmlFor="name">
                <i class="zmdi zmdi-account zmdi-hc-2x"></i>
                <input
                  type="text"
                  name="name"
                  id="name"
                  placeholder="username"
                  autoComplete="off"
                />
                {/* {renderErrorMessage("name")}; */}
              </label>
            </div>

            <div className={loginModule.inputBox}>
              <label htmlFor="password">
                <i class="zmdi zmdi-lock zmdi-hc-2x"></i>
                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="password"
                  autoComplete="off"
                />
                {/* {renderErrorMessage("password")}; */}
              </label>
            </div>

            <div className={loginModule.remember}>
              <label>
                <input type="checkbox" />
                Remember me
              </label>
            </div>

            <div className={loginModule.inputBox}>
              <input
                type="submit"
                name="login-btn"
                id="login-btn"
                className="login-btn"
                value="Login"
              />
            </div>

            <div className={loginModule.register}>
              <p>Don't have an account?</p>
              <NavLink to={"/register"} className={loginModule.register_link}>
                Register here
              </NavLink>
            </div>
          </form>
        </div>
      </div>

      <div
        className={loginModule.login_right_side}
        // className={loginModule.login_image}
      >
        {/* <img
          src={loginPic}
          alt="login pic"
          className={loginModule.login_image}
        /> */}

        <div className={loginModule.login_right_heading}>
          <img src="" alt="" />
          <h1>
            Welcome to <br /> rozgar.com
          </h1>
        </div>
        <div className={loginModule.login_right_text}>
          <p>
            Let’s get you all set up so you can verify your personal account and
            begin setting up your profile
          </p>
        </div>
      </div>
    </section>
  );
  return (
    <div>{isSubmitted ? <div>Logged In</div> : renderForm}</div>
    // <section>
    //   <div className={loginModule.contentBox}>
    //     <div className={loginModule.formBox}>
    //       <form
    //         className={loginModule.login_form}
    //         id={loginModule.login_form_id}
    //       >
    //         <h2>Sign In</h2>

    //         <label htmlFor="name">
    //           <i class="zmdi zmdi-account zmdi-hc-2x"></i>
    //           <input
    //             type="text"
    //             name="name"
    //             id="name"
    //             placeholder="username"
    //             autoComplete="off"
    //           />
    //         </label>

    //         <label htmlFor="password">
    //           <i class="zmdi zmdi-lock zmdi-hc-2x"></i>
    //           <input
    //             type="password"
    //             name="password"
    //             id="password"
    //             placeholder="password"
    //             autoComplete="off"
    //           />
    //         </label>

    //         <div className={loginModule.login_btn}>
    //           <input
    //             type="submit"
    //             name="login-btn"
    //             id="login-btn"
    //             className="login-btn"
    //             value="register"
    //           />
    //         </div>
    //       </form>
    //     </div>
    //   </div>

    //   <div className={loginModule.login_image}>
    //     <figure>
    //       <img src={loginPic} alt="login pic" />
    //     </figure>
    //     <NavLink to="/register" className={loginModule.register_link}>
    //       Register here
    //     </NavLink>
    //   </div>
    // </section>
  );
}
