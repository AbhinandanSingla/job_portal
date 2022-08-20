
import React, {useContext, useState} from 'react'
import logo from "../../../Assets/Images/common/logo.svg";
import aadityaModule from "../../../Assets/styles/aaditya.module.css";
import {UserContext} from "../../../hooks/userContext";
import {useNavigate} from "react-router-dom";

export const Dashboardlogin = () => {

    const [admin, setAdmin] = useState({
        'username': '',
        'password': ''
    })
    const [errorMessages, setErrorMessages] = useState('');
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [userContext, setUserContext] = useContext(UserContext)
    const navigate = useNavigate();

    function hangleChange(e) {
        setAdmin((val) => ({
            ...val, [e.target.name]: e.target.value
        }))
        console.log(admin)
    }

    function handleSubmit(e) {
        e.preventDefault()
        const genericErrorMessage = "Something went wrong! Please try again later."
        fetch("http://127.0.0.1:8080/admin/login", {
            method: "POST",
            credentials: "include",
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
                } else {
                    const data = await response.json()
                    setUserContext(oldValues => {
                        return {...oldValues, token: data.token}
                    });
                    setIsSubmitted(true);
                    navigate('/');
                }
            })
            .catch(error => {
                setIsSubmitted(false)
                setErrorMessages(genericErrorMessage)
            })
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

    </div>
  )
}
