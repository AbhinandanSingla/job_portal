import compareStyle from "../Assets/styles/compare.module.css";
import {Navbar} from "./Components/compare/navbar";
import {Home} from "./Components/compare/home";
import {CompareContainer} from "./Components/compare/compareContainer";
import {useCallback, useContext, useEffect, useState} from "react";
import {FindWorkContainer} from "./Components/compare/findWorkContainer";
import {BookContainer} from "./Components/compare/bookContainer";
import AOS from "aos";
import "aos/dist/aos.css";
import {Guideline} from "./Components/compare/guideline";
import {UserContext} from "../hooks/userContext";
import {JobDescription} from "./Components/compare/jobDescription";

AOS.init();

export function Compare() {
    const [navRoute, setRoute] = useState(0);
    const [userContext, setUserContext] = useContext(UserContext)
    const [selectedJob, setJob] = useState('62f6a5509de4e961ab4a6189');
    const fetchUserDetails = useCallback(() => {
        fetch("http://127.0.0.1:8080/me", {
            method: "GET",
            credentials: "include",
            // Pass authentication token as bearer token in header
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${userContext.token}`,
            },
        }).then(async response => {
            if (response.ok) {
                const data = await response.json()
                setUserContext(oldValues => {
                    return {...oldValues, details: data}
                })
            } else {
                if (response.status === 401) {
                    // Edge case: when the token has expired.
                    // This could happen if the refreshToken calls have failed due to network error or
                    // User has had the tab open from previous day and tries to click on the Fetch button
                    window.location.reload()
                } else {
                    setUserContext(oldValues => {
                        return {...oldValues, details: null}
                    })
                }
            }
        })
    }, [setUserContext, userContext.token])

    useEffect(() => {
        if (!userContext.details) {
            fetchUserDetails()
            console.log(userContext.details)
        }
    }, [userContext.details, fetchUserDetails])

    function switchComponent() {
        switch (navRoute) {
            case 0:
                return <CompareContainer/>;
            case 1:
                return <FindWorkContainer setJob={setJob}/>;
            case 2:
                return <BookContainer/>;
            case 3:
                return <Guideline/>;
        }
    }

    return (
        <section className={compareStyle.root}>
            <Navbar changeRoute={setRoute} navRoute={navRoute}/>
            <Home route={navRoute}/>
            {switchComponent()}
            <div className={compareStyle.jobDescription}>
                <div className={navRoute !== 1 ? compareStyle.exRight : compareStyle
                    .openContainer}>
                    <div className={compareStyle.exRightContainer}>
                        <svg width="25" height="25" viewBox="0 0 25 25" fill="none"
                             xmlns="http://www.w3.org/2000/svg"
                             className={compareStyle.h_bell}>
                            <path
                                d="M11.4423 25C13.3289 25 14.907 23.6551 15.2694 21.875H7.61523C7.97782 23.6551 9.55596 25 11.4423 25V25Z"
                                fill="#C9C9CC"/>
                            <path
                                d="M18.7468 12.4991C18.7426 12.4991 18.7384 12.5 18.7342 12.5C14.7145 12.5 11.4426 9.2291 11.4426 5.2084C11.4426 4.1031 11.6969 3.05825 12.1396 2.11869C11.9103 2.09695 11.678 2.0834 11.4426 2.0834C7.41565 2.0834 4.15104 5.34783 4.15104 9.37501V12.2791C4.15104 14.3406 3.24791 16.2865 1.66347 17.626C1.13533 18.0771 0.900917 18.7958 1.09051 19.4969C1.31138 20.3125 2.11761 20.8334 2.96352 20.8334H19.9166C20.8041 20.8334 21.6407 20.2583 21.8207 19.3886C21.9603 18.7157 21.7208 18.0437 21.1989 17.6052C19.6843 16.3355 18.8082 14.4697 18.7468 12.4991V12.4991Z"
                                fill="#C9C9CC"/>
                            <path
                                d="M23.9425 5.2084C23.9425 8.08487 21.6107 10.4166 18.7341 10.4166C15.8576 10.4166 13.5259 8.08487 13.5259 5.2084C13.5259 2.33192 15.8576 0 18.7341 0C21.6107 0 23.9425 2.33192 23.9425 5.2084Z"
                                fill="#FF0000"/>
                        </svg>
                        <div className={compareStyle.h_profile}>
                            <div className={compareStyle.profile_icon}>
                                <svg width="42" height="42" viewBox="0 0 42 42" fill="none"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <mask id="mask0_52_119" style={{"maskType": "alpha"}}
                                          maskUnits="userSpaceOnUse"
                                          x="0"
                                          y="0" width="42" height="42">
                                        <circle cx="21" cy="21" r="21" fill="#C4C4C4"/>
                                    </mask>
                                    <g mask="url(#mask0_52_119)">
                                        <rect x="-55" y="-43" width="146" height="128" fill="#C4C4C4"/>
                                    </g>
                                </svg>
                            </div>
                            <div className={compareStyle.profileContainer}>
                                <div className={compareStyle.profile_heading}>
                                    Profile
                                </div>
                                <div className={compareStyle.profile_designation}>Designation</div>
                            </div>
                            <svg width="10" height="6" viewBox="0 0 10 6" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path d="M1 1L5 5L9 1" stroke="#121212" strokeWidth="1.2" strokeLinecap="round"
                                      strokeLinejoin="round"/>
                            </svg>

                        </div>
                    </div>
                    <div className={compareStyle.profile_line}>
                    </div>
                    {navRoute === 1 ? <JobDescription jobID={selectedJob}/> : ''}
                </div>
            </div>
        </section>
    );
}
