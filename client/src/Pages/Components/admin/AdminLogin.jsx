import React, {useContext, useState} from 'react'
import logo from "../../../Assets/Images/common/logo.svg";
import aadityaModule from "../../../Assets/styles/admin.module.css";
import {UserContext} from "../../../hooks/userContext";
import {useNavigate} from "react-router-dom";
import {baseURl} from "../../../config";
import loginstyle from "../../../Assets/styles/register.module.css";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faXmark} from "@fortawesome/free-solid-svg-icons";

export const Dashboardlogin = () => {

    const [admin, setAdmin] = useState({
        'username': '',
        'password': ''
    })
    const [error, setErrorMessages] = useState('');
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [userContext, setUserContext] = useContext(UserContext)
    const navigate = useNavigate();
    const [errorB, setErrorb] = useState(false)

    function hangleChange(e) {
        setAdmin((val) => ({
            ...val, [e.target.name]: e.target.value
        }))
        console.log(admin)
    }

    function handleSubmit(e) {
        setErrorb(false)
        e.preventDefault()
        const genericErrorMessage = "Something went wrong! Please try again later."
        if (!admin.username) {
            setErrorb(true)
            setErrorMessages("Username was empty")
        } else if (!admin.password) {
            setErrorb(true)
            setErrorMessages("Password was empty")
        } else {

            fetch(baseURl + "/admin/login", {
                method: "POST",
                headers: {"Content-Type": "application/json", 'Origin': 'http://localhost:3000'},
                body: JSON.stringify({username: admin.username, password: admin.password}),
            })
                .then(async response => {
                    if (!response.ok) {
                        if (response.status === 400) {
                            setErrorMessages("Please fill all the fields correctly!")
                        } else if (response.status === 401) {
                            setErrorMessages("Invalid email and password combination.")
                        } else {
                            setErrorMessages(genericErrorMessage)
                        }
                        setErrorb(true)
                    } else {
                        const data = await response.json()
                        setUserContext(oldValues => {
                            return {...oldValues, token: data.token}
                        });
                        setIsSubmitted(true);
                        navigate('/admin/dashboard');
                    }
                })
                .catch(error => {
                    console.log(error)
                    setErrorb(true)
                    setIsSubmitted(false)
                    setErrorMessages(genericErrorMessage)
                })
        }


    }

    return (
        <div>
            <div className={aadityaModule.phto}>
                <div className={aadityaModule.rr1}>

                </div>
                <div className={aadityaModule.rr2}>

                </div>
                <img src={logo} alt=""/>
                <h2>Rozgaar.com</h2>
                <h1>Sign in to your dashboard</h1>
                <p>Enter your email address and password to continue</p>
            </div>
            <form>
                <div className={aadityaModule.ob}>
                    <input type={'text'} onChange={hangleChange} value={admin.username} name={'username'}/>
                </div>

                <div className={aadityaModule.ob1}>
                    <input type="password" onChange={hangleChange} value={admin.password} name={'password'}/>
                </div>

            </form>
            <button className={aadityaModule.bte} onClick={handleSubmit}>Sign In
            </button>
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
        </div>
    )
}
