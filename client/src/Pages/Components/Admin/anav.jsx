import compareStyle from '../../../Assets/styles/compare.module.css';
import logo from '../../../Assets/Images/common/logo.svg';
import {Link} from "react-router-dom";

export function Navbar({navRoute, changeRoute}) {
    function highlightRoute(index) {
        return navRoute === index ? compareStyle.selected : ''
    }

    return (<div className={compareStyle.navbar}>
            <div className={compareStyle.max_width}>
                <div className={compareStyle.navTop}>
                    <Link to={'/'} className={compareStyle.nav_logo}>

                        <img src={logo} alt=""/> <span
                        className="navText">Rozgar.com</span></Link>
                    <ul>
                        <li className={`${compareStyle.navs} ${highlightRoute(0)} `}
                            id="categories"
                            onClick={() => changeRoute(0)}>
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M2.5 2.5H9.16667V9.16667H2.5V2.5ZM10.8333 2.5H17.5V9.16667H10.8333V2.5ZM2.5 10.8333H9.16667V17.5H2.5V10.8333ZM15 10.8333H13.3333V13.3333H10.8333V15H13.3333V17.5H15V15H17.5V13.3333H15V10.8333Z"
                                    fill="#A3A3A3"/>
                            </svg>

                            <span>Dashoboard</span></li>
                        <li className={`${compareStyle.navs} ${highlightRoute(1)}`} onClick={() => changeRoute(1)}
                            id="findWork">
                            <i className="fas fa-search"></i>
                           

                            <span>Registration</span>
                        </li>
                        <li className={`${compareStyle.navs} ${highlightRoute(3)}`}
                            id="guidance"
                            onClick={() => changeRoute(3)}>
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none"
                                 xmlns="http://www.w3.org/2000/svg" className={compareStyle.guidanceSvg}>
                                <path
                                    d="M15.5417 4.94165H4.45003C3.29944 4.94165 2.3667 5.87439 2.3667 7.02498V13.9083C2.3667 15.0589 3.29944 15.9917 4.45003 15.9917H15.5417C16.6923 15.9917 17.625 15.0589 17.625 13.9083V7.02498C17.625 5.87439 16.6923 4.94165 15.5417 4.94165Z"
                                    stroke="#A3A3A3" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                <path
                                    d="M5.3916 7.5L9.35827 10C9.54988 10.1224 9.77254 10.1875 9.99993 10.1875C10.2273 10.1875 10.45 10.1224 10.6416 10L14.6083 7.5"
                                    stroke="#A3A3A3" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>

                            <span>Jobs</span>
                        </li>
                    </ul>
                </div>

                <div className={compareStyle.nav_logout}>
                    <i className="far fa-sign-out"></i>
                    <span>Log out</span></div>
            </div>
        </div>
    );
}