import logo from "../../../Assets/Images/common/logo.svg";
import homeStyle from "../../../Assets/styles/style.module.css";
import {Link, NavLink} from "react-router-dom";
import {useContext, useEffect} from "react";
import {UserContext} from "../../../hooks/userContext";

export function Navbar() {
    const [userContext, setUserContext] = useContext(UserContext)
    useEffect(() => {
        console.log(userContext)
    }, [userContext])
    return (
        <section className={homeStyle.navbar}>
            <div className={homeStyle.max_width}>
                <div className={homeStyle.nav_logo}>
                    <img src={logo} alt="Logo"/>
                    <span>Rozgar.com</span>
                </div>
                <ul className={homeStyle.navsContainer}>
                    <li className={homeStyle.navs}>
                        <NavLink
                            to={"/"}
                            className={({isActive}) => (isActive ? homeStyle.active : "")}
                        >
                            Home
                        </NavLink>
                    </li>
                    <li className={homeStyle.navs}>
                        <NavLink
                            to={"/compare"}
                            className={({isActive}) => (isActive ? homeStyle.active : "")}
                        >
                            Category
                        </NavLink>
                    </li>
                    <li className={homeStyle.navs}>
                        <NavLink
                            to={"/compare"}
                            className={({isActive}) => (isActive ? homeStyle.active : "")}
                        >
                            Post a job
                        </NavLink>
                    </li>
                    <li className={homeStyle.navs}>
                        <NavLink
                            to={"/contact"}
                            className={({isActive}) => (isActive ? homeStyle.active : "")}
                        >
                            Contact
                        </NavLink>
                    </li>
                    {userContext.token == null ?
                        <div>
                            <li className={homeStyle.btn}>
                                <Link
                                    style={{color: "white", textDecoration: "none"}}
                                    to={"/login"}
                                >
                                    Login
                                </Link>
                            </li>
                            <li className={homeStyle.btn}>
                                <Link
                                    style={{color: "white", textDecoration: "none"}}
                                    to={"/register"}
                                >
                                    Create Account
                                </Link>
                            </li>
                            <li className={homeStyle.btn}>
                                <Link
                                    style={{color: "white", textDecoration: "none"}}
                                    to={"/company"}
                                >
                                    Company(temp Btn)
                                </Link>
                            </li>

                        </div> : null}
                </ul>
                <div className={homeStyle.mobileBar}>
                    <i className="fa fa-bars"></i>
                </div>
            </div>
        </section>
    );
}
