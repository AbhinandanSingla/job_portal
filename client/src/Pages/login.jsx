import React, {useContext, useEffect, useState} from "react";
import {NavLink, useNavigate} from "react-router-dom";
import loginModule from "../Assets/styles/login.module.css";
import {UserContext} from "../hooks/userContext";
import {baseURl} from "../config";
import axios from "axios";
import loader from "../Assets/styles/utils/loaders.module.css";
import loginstyle from "../Assets/styles/register.module.css";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faXmark} from "@fortawesome/free-solid-svg-icons";

export function Login() {
    const navigate = useNavigate();
    const [error, setErrorMessages] = useState('');
    const [userContext, setUserContext] = useContext(UserContext)
    const [isSubmitting, setIsSubmitted] = useState(false)
    const [errorB, setErrorb] = useState(false)

    function formSubmitHandler(e) {
        const [uname, pass] = [document.forms[0].name.value, document.forms[0].password.value];
        e.preventDefault()
        setErrorb(false)
        const genericErrorMessage = "Something went wrong! Please try again later."
        axios.post(baseURl + `/login?username=${uname}&password=${pass}`).then(async response => {
            setIsSubmitted(true)
            console.log(response)
            setErrorb(false)
            if (response.status === 400) {
                setErrorMessages("Please fill all the fields correctly!")
                setErrorb(true)

            } else if (response.status === 401) {
                setErrorMessages("Invalid email and password combination.")
                setErrorb(true)

            } else if (response.status === 200) {
                const data = await response.data;
                console.log(data)
                setUserContext(oldValues => {
                    return {...oldValues, token: data.token, userLogin: true, id: data.id}
                });
                setIsSubmitted(false);
                navigate('/')
            } else {
                setErrorMessages(genericErrorMessage)
                setErrorb(true)

            }

        }).catch(error => {
            console.log(error)
            setIsSubmitted(false)
            setErrorb(true)
            setErrorMessages(genericErrorMessage)
        })
    }

    return (
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
                        onSubmit={formSubmitHandler}
                    >
                        <div className={loginModule.inputBox}>
                            <label htmlFor="name">
                                <i className="zmdi zmdi-account zmdi-hc-2x"/>
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
                                <i className="zmdi zmdi-lock zmdi-hc-2x"/>
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
                                <input type="checkbox"/>
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
                    <img src="" alt=""/>
                    <h1>
                        Welcome to <br/> rozgar.com
                    </h1>
                </div>
                <div className={loginModule.login_right_text}>
                    <p>
                        Let’s get you all set up so you can verify your personal account and
                        begin setting up your profile
                    </p>
                </div>
            </div>
            {isSubmitting ? <div className={loader.loaderBg}>
                <div className={loader.loader}>
                    <div className={loader.ldsHourglass}/>
                    <div className="loaderText">
                        Loading Please wait . . . .
                    </div>
                </div>
            </div> : null
            }
            {errorB ? <div className={`${loginstyle.errorBoard} ${loginstyle.error} `} data-aos="fade-left"
                           data-aos-duration="400">
                <div style={{
                    padding: "10px",
                    fontSize: "larger"
                }}>{error}</div>
                <div className="errClose">
                    <FontAwesomeIcon icon={faXmark} className={loginstyle.errorClose} onClick={() => setErrorb(false)}/>
                </div>
            </div> : null}
        </section>

    );
}
