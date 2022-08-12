import "./App.css";
import {Home} from "./Pages/home";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import React, {useCallback, useContext, useEffect} from "react";
import {Compare} from "./Pages/compare";
import {Login} from "./Pages/login";

import {Register} from "./Pages/register";

import {Company} from "./Pages/company";

import {Profilesection} from "./Pages/profilesection";
import {Admin_aaditya} from "./Pages/admin_aaditya";
import {Dashboard} from "./Pages/Components/admin_aaditya/dashboard_aaditya"
import {Dashboardlogin} from "./Pages/Components/admin_aaditya/A_dashboardlogin"
import {UserContext} from "./hooks/userContext";

// import {Admin} from "./Pages/admin";

function App() {
    const [userContext, setUserContext] = useContext(UserContext)
    const verifyUser = useCallback(() => {
        fetch("http://127.0.0.1:8080/refreshToken", {
            method: "POST",
            credentials: "include",
            headers: {"Content-Type": "application/json"},
        }).then(async response => {
            if (response.ok) {
                const data = await response.json()
                console.log(data)
                setUserContext(oldValues => {
                    return {...oldValues, ...data}
                })
            } else {
                setUserContext(oldValues => {
                    return {...oldValues, token: null}
                })
            }
            // call refreshToken every 5 minutes to renew the authentication token.
            setTimeout(verifyUser, 5 * 60 * 1000)
        })
    }, [setUserContext])
    useEffect(() => {
        verifyUser()
    }, [verifyUser])


    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/compare" element={<Compare/>}/>
                <Route path="/login" element={<Login/>}/>
                <Route path="/company" element={<Company/>}/>
                <Route path="/register" element={<Register/>}/>
                <Route path="/profile" element={<Profilesection/>}/>
                <Route path="/admin_aaditya" element={<Admin_aaditya/>}/>
                {/*<Route path="/admin" element={<Dashboard />} />*/}
                <Route path="/A_dashboarddlogin" element={<Dashboardlogin/>}/>
                {/* <Route path="/admin" element={<Admin />} /> */}
            </Routes>
        </BrowserRouter>
    );
}

export default App;
