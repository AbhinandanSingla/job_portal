// import aadityaModule from "../../../Assets/styles/company.module.css";
import aadityaModule from "../../../Assets/styles/aaditya.module.css";
import logo from "../../../Assets/Images/common/logo.svg";
import {Link} from "react-router-dom";

export function Navbar({navRoute, changeRoute}) {
    function highlightRoute(index) {
        return navRoute === index ? aadityaModule.selected : "";
    }

    return (
        <div className={aadityaModule.navbar}>
            <div className={aadityaModule.max_width}>
                <div className={aadityaModule.navTop}>
                    <Link to={"/"} className={aadityaModule.nav_logo}>
                        <img src={logo} alt=""/>{" "}
                        <span className="navText">Rozgar.com</span>
                    </Link>
                    <ul>
                        <li
                            className={`${aadityaModule.navs}  ${highlightRoute(0)}`}
                            onClick={() => changeRoute(0)}
                            id="dashboard"
                        >
                            <i className="fas fa-home"/>
                            <span>Dashboard</span>
                        </li>
                        <li
                            className={`${aadityaModule.navs} ${highlightRoute(1)}`}
                            onClick={() => changeRoute(1)}
                            id="addJob"
                        >
                            <svg
                                width="20"
                                height="20"
                                viewBox="0 0 20 20"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M2.5 2.5H9.16667V9.16667H2.5V2.5ZM10.8333 2.5H17.5V9.16667H10.8333V2.5ZM2.5 10.8333H9.16667V17.5H2.5V10.8333ZM15 10.8333H13.3333V13.3333H10.8333V15H13.3333V17.5H15V15H17.5V13.3333H15V10.8333Z"
                                    fill="#A3A3A3"
                                />
                            </svg>

                            <span>Registrations</span>
                        </li>
                        <li
                            className={`${aadityaModule.navs}  ${highlightRoute(2)}`}
                            onClick={() => changeRoute(2)}
                            id="dashboard"
                        >
                            <i className="fas fa-home"/>
                            <span>Jobs</span>
                        </li>
                    </ul>
                </div>

                <div className={aadityaModule.nav_logout}>
                    <i className="fas fa-sign-out-alt"/>
                    <span>Log out </span>
                </div>
            </div>
        </div>
    );
}
