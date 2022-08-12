import compareStyle from "../Assets/styles/compare.module.css";
import {Navbar} from "./Components/compare/navbar";
import {Home} from "./Components/compare/home";
import {CompareContainer} from "./Components/compare/compareContainer";
import {useContext, useEffect, useRef, useState} from "react";
import {FindWorkContainer} from "./Components/compare/findWorkContainer";
import {BookContainer} from "./Components/compare/bookContainer";
import AOS from "aos";
import "aos/dist/aos.css";
import {Guideline} from "./Components/compare/guideline";
import {UserContext} from "../hooks/userContext";
import {gsap} from "gsap"; // You can also use <link> for styles
AOS.init();

export function Compare() {
    const [navRoute, setRoute] = useState(0);
    const [userContext, setUserContext] = useContext(UserContext)

    function switchComponent() {
        switch (navRoute) {
            case 0:
                return <CompareContainer/>;
            case 1:
                return <FindWorkContainer/>;
            case 2:
                return <BookContainer/>;
            case 3:
                return <Guideline/>;
        }
    }

    const profileRef = useRef();
    const [offset, setOffset] = useState(0);

    // useEffect(() => {
    //     if (navRoute === 1) {
    //         gsap.to(profileRef.current, {
    //                 minHeight: "100vh"
    //             },
    //         )
    //     } else {
    //         gsap.to(profileRef.current, {
    //             minHeight: "75%",
    //         })
    //     }
    //     const onScroll = () => setOffset(window.pageYOffset);
    //     // clean up code
    //     window.removeEventListener('scroll', onScroll);
    //     window.addEventListener('scroll', onScroll, {passive: true});
    //     console.log(offset)
    //     return () => window.removeEventListener('scroll', onScroll);
    // })
    return (
        <section className={compareStyle.root}>
            <Navbar changeRoute={setRoute} navRoute={navRoute}/>
            <Home route={navRoute}/>
            {switchComponent()}
            <div className={compareStyle.jobDescription}>
                <div ref={profileRef} className={navRoute !== 1 ? compareStyle.exRight : compareStyle
                    .openContainer}>
                    <div className={compareStyle.exRightContainer}>
                        <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg"
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
                                    <mask id="mask0_52_119" style={{"mask-type": "alpha"}} maskUnits="userSpaceOnUse"
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
                    <div className={compareStyle.fwc}
                         style={(navRoute === 1 ? {display: "block", height: "75vh"} : {display: "none"})}>
                        <div className={compareStyle.j_heading}>Detail job</div>
                        <svg width="273" height="216" viewBox="0 0 273 216" fill="none"
                             xmlns="http://www.w3.org/2000/svg">
                            <rect width="273" height="216" rx="16" fill="#E0E4F0"/>
                        </svg>
                        <div className={compareStyle.j_company}>
                            MieKcoft Inc
                        </div>
                        <div className={compareStyle.j_type}>
                            UX Desginer
                        </div>
                        <div className={compareStyle.profile_line}>
                        </div>

                        <div className={compareStyle.miniQual}>Minimum qualification</div>
                        <div className={compareStyle.miniQualContainer}>
                            <ul>
                                <li>
                                    Bachelor in Design, related field and can use app develop.
                                </li>
                                <li>5 years of experience as a UX or interaction Designer.</li>
                            </ul>
                        </div>
                        <div className={compareStyle.j_desc_heading}>
                            Description
                        </div>
                        <div className={compareStyle.j_desc}>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus amet architecto consequatur eius itaque natus perferendis provident sapiente velit voluptate. Aperiam assumenda aut, dolore doloremque error eum ipsa nisi perspiciatis, quibusdam quos saepe, veniam?
                            At MieKocoft Inc, we follow a simple but promise focus on the user and all else we follow.
                        </div>
                        <div className={compareStyle.fieldContainer}>
                            <div className={compareStyle.j_field}>
                                <div className={compareStyle.j_label}>
                                    Sallary
                                </div>
                                <div className={compareStyle.j_value}>
                                    ₹10,000/a month
                                </div>
                            </div>
                            <div className={compareStyle.j_field}>
                                <div className={compareStyle.j_label}>
                                    Sallary
                                </div>
                                <div className={compareStyle.j_value}>
                                    ₹10,000/a month
                                </div>
                            </div>
                            <div className={compareStyle.j_field}>
                                <div className={compareStyle.j_label}>
                                    Sallary
                                </div>
                                <div className={compareStyle.j_value}>
                                    ₹10,000/a month
                                </div>
                            </div>
                            <div className={compareStyle.j_field}>
                                <div className={compareStyle.j_label}>
                                    Sallary
                                </div>
                                <div className={compareStyle.j_value}>
                                    ₹10,000/a month
                                </div>
                            </div>
                        </div>

                        <div className={compareStyle.j_btn}>
                            <div className={compareStyle.j_apply_btn}>
                                Apply Now
                            </div>
                            <div className={compareStyle.j_message}>
                                <svg width="40" height="40" viewBox="0 0 40 40" fill="none"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <rect width="40" height="40" rx="12" fill="#F2F8F1"/>
                                    <path
                                        d="M30.2215 15.8188C29.7197 14.6833 28.9896 13.6512 28.0719 12.78C27.157 11.9074 26.0702 11.2135 24.8732 10.738C23.647 10.2484 22.3295 9.99745 20.999 10H20.9542C19.6009 10.0064 18.2924 10.2608 17.0598 10.7613C15.8731 11.2418 14.7965 11.9368 13.8902 12.8076C12.9815 13.6768 12.2597 14.7053 11.7652 15.8357C11.2519 17.0113 10.9918 18.2723 11.0002 19.5445C11.0069 21.0162 11.3782 22.4772 12.0717 23.7835V27.0067C12.0717 27.5453 12.5324 27.9821 13.0984 27.9821H16.4939C17.8783 28.6444 19.4059 28.9928 20.9565 29H21.0034C22.3411 29 23.6362 28.754 24.8575 28.2727C26.0485 27.8027 27.1312 27.117 28.0451 26.2539C28.9666 25.3866 29.6914 24.373 30.1991 23.2428C30.7248 22.0722 30.9932 20.8275 30.9999 19.5424C31.0044 18.251 30.7405 16.9978 30.2215 15.8188ZM16.5342 20.5179C15.9437 20.5179 15.4627 20.062 15.4627 19.5C15.4627 18.9381 15.9437 18.4822 16.5342 18.4822C17.1247 18.4822 17.6056 18.9381 17.6056 19.5C17.6056 20.062 17.127 20.5179 16.5342 20.5179ZM20.999 20.5179C20.4084 20.5179 19.9275 20.062 19.9275 19.5C19.9275 18.9381 20.4084 18.4822 20.999 18.4822C21.5895 18.4822 22.0704 18.9381 22.0704 19.5C22.0704 20.062 21.5895 20.5179 20.999 20.5179ZM25.4637 20.5179C24.8732 20.5179 24.3923 20.062 24.3923 19.5C24.3923 18.9381 24.8732 18.4822 25.4637 18.4822C26.0543 18.4822 26.5352 18.9381 26.5352 19.5C26.5352 20.062 26.0543 20.5179 25.4637 20.5179Z"
                                        fill="#4377FD"/>
                                </svg>

                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </section>
    );
}
