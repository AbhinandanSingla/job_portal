import "./App.css";
import {Home} from "./Pages/home";
import {BrowserRouter, Navigate, Route, Routes} from "react-router-dom";
import React, {useCallback, useContext, useEffect} from "react";
import {Compare} from "./Pages/compare";
import {Login} from "./Pages/login";

import {Register} from "./Pages/register";

import {Company} from "./Pages/company";

import {Profilesection} from "./Pages/profilesection";
import {AdminPage} from "./Pages/AdminPage";
import {Dashboardlogin} from "./Pages/Components/admin/AdminLogin"
import {UserContext} from "./hooks/userContext";

import {Guidance} from "./Pages/Components/compare/guidance";

import StudentResume from "./Pages/Components/resume/studentResume";
import ResumeHeading from "./Pages/Components/resume/ResumeHeading";
import WorkHistory from "./Pages/Components/resume/workHistory";
import Education from "./Pages/Components/resume/Education";
import {EducationList} from "./Pages/Components/resume/educationList";
import {WorkHistoryList} from "./Pages/Components/resume/workHistoryList";

import {Login_company} from "./Pages/Components/company/login";
import {Companyprofile} from "./Pages/companyprofile";
import {Resume} from "./Pages/Components/resume/template/resume1";
import {Resume2} from "./Pages/Components/resume/template/resume2";
import {A_Dashboard} from "./Pages/Components/admin/A_dashboard";
import {Registrations} from "./Pages/AdminCompanyRegistration";
import {Notifications} from "./Pages/Notifications";
import {Registerc} from "./Pages/Components/company/register"
import {Logincompany} from "./Pages/Components/company/login"
import axios from "axios";
import {baseURl} from "./config";


// import {Admin} from "./Pages/admin";
const ProtectedRoute = ({user, children}) => {
    if (!user.token) {
        return <Navigate to="/login" replace/>;
    }
    return children;
}

const CompanyProtectedRoute = ({user, children}) => {
    if (!user.companyToken) {
        return <Navigate to="/company/login" replace/>;
    }
    return children;
}

function App() {
    const [userContext, setUserContext] = useContext(UserContext)
    const verifyUser = useCallback(() => {
        axios.post(baseURl + "/refreshToken").then(async response => {
            if (response.statusText === "OK") {
                const data = await response.data;
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
                <Route path="/login" element={<Login/>}/>
                <Route path="/register" element={<Register/>}/>
                <Route path="/profile" element={<Profilesection/>}/>
                <Route path="/admin/dashboard" element={<AdminPage/>}/>
                {/*<Route path="/registrations_aaditya" element={<Registrations/>}/>*/}
                <Route path="/company/register" element={<Registerc/>}/>
                <Route path="/company/login" element={<Logincompany/>}/>
                {/*<Route path="/compare" element={<Compare/>}/>*/}
                <Route path="/compare" element={<ProtectedRoute user={userContext}>
                    <Compare/>
                </ProtectedRoute>
                }
                />
                <Route path="/company" element={<CompanyProtectedRoute user={userContext}>
                    <Company/>
                </CompanyProtectedRoute>}/>
                <Route path="/admin/login" element={<Dashboardlogin/>}/>




                <Route path={'/resume'} element={<StudentResume/>}/>
                <Route path={'resume/heading'} element={<ResumeHeading/>}/>
                <Route path={'resume/workHistory'} element={<WorkHistory/>}/>
                <Route path={'resume/education'} element={<Education/>}/>
                <Route path={'resume/educationList'} element={<EducationList/>}/>
                <Route path={'resume/workHistoryList'} element={<WorkHistoryList/>}/>
                <Route path={'guidance'} element={<Guidance/>}/>
                {/*<Route path="/admin/dashboard" element={<A_Dashboard/>}/>*/}
            </Routes>
        </BrowserRouter>
    );
}

export default App;
