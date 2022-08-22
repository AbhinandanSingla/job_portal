import compareStyle from '../../../Assets/styles/compare.module.css';
import logo from '../../../Assets/Images/common/logo.svg';
import {Link} from "react-router-dom";
import {useContext, useEffect} from "react";
import {UserContext} from "../../../hooks/userContext";

export function Navbar({navRoute, changeRoute}) {

    const [userContext, setUserContext] = useContext(UserContext)
    useEffect(() => {
        if (userContext.userLogin) {

        }
    })


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

                            <span>Categories</span></li>
                        <li className={`${compareStyle.navs} ${highlightRoute(1)}`} onClick={() => changeRoute(1)}
                            id="findWork">
                            <i className="fas fa-search"/>
                            <span>Find Work</span>
                        </li>
                        <li className={`${compareStyle.navs} ${highlightRoute(2)}`} id="bookmark"
                            onClick={() => changeRoute(2)}>
                            <svg width="18" height="18" viewBox="0 0 18 18" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M8.25842 2.37419C8.4781 2.34988 8.67914 2.23929 8.81729 2.06676C8.95544 1.89422 9.01939 1.67388 8.99508 1.45419C8.97077 1.2345 8.86018 1.03347 8.68765 0.895318C8.51512 0.757166 8.29477 0.693211 8.07508 0.717523C3.90675 1.17836 0.666748 4.71002 0.666748 9.00002C0.666748 13.6025 4.39758 17.3334 9.00008 17.3334C13.2884 17.3334 16.8193 14.0942 17.2826 9.92836C17.3069 9.70867 17.2429 9.48832 17.1048 9.31579C16.9666 9.14325 16.7656 9.03267 16.5459 9.00836C16.3262 8.98404 16.1059 9.048 15.9333 9.18615C15.7608 9.3243 15.6502 9.52534 15.6259 9.74502C15.434 11.4368 14.6021 12.991 13.3009 14.0891C11.9997 15.1871 10.3277 15.7458 8.62781 15.6505C6.92787 15.5552 5.32879 14.8132 4.15842 13.5766C2.98806 12.3401 2.3351 10.7026 2.33341 9.00002C2.33346 7.36029 2.93774 5.77808 4.03076 4.55577C5.12378 3.33346 6.62888 2.55679 8.25842 2.37419Z"
                                    fill="#A3A3A3"/>
                                <path
                                    d="M11.306 0.9917C11.2006 0.962153 11.0904 0.953652 10.9818 0.966683C10.8731 0.979714 10.7681 1.01402 10.6727 1.06765C10.48 1.17595 10.3382 1.35636 10.2785 1.5692C10.2188 1.78204 10.2462 2.00986 10.3545 2.20255C10.4628 2.39525 10.6432 2.53703 10.856 2.5967C11.0952 2.6642 11.3302 2.74503 11.5577 2.83837C11.7623 2.92202 11.9918 2.92095 12.1957 2.83538C12.3996 2.74982 12.5611 2.58678 12.6448 2.38212C12.7284 2.17746 12.7273 1.94795 12.6418 1.74408C12.5562 1.54021 12.3932 1.37869 12.1885 1.29503C11.9003 1.1775 11.6057 1.0765 11.306 0.992533V0.9917Z"
                                    fill="#A3A3A3"/>
                                <path
                                    d="M13.4585 2.91005C13.6078 2.7474 13.8157 2.65069 14.0363 2.64116C14.2569 2.63163 14.4723 2.71006 14.6351 2.85922C14.8118 3.02089 14.981 3.19005 15.1426 3.36589C15.292 3.52877 15.3706 3.74434 15.3611 3.96516C15.3516 4.18599 15.2547 4.39398 15.0918 4.54339C14.9289 4.69279 14.7134 4.77137 14.4925 4.76184C14.2717 4.7523 14.0637 4.65544 13.9143 4.49255C13.7852 4.35177 13.6501 4.21664 13.5093 4.08755C13.4286 4.01364 13.3632 3.92454 13.3169 3.82536C13.2707 3.72618 13.2444 3.61885 13.2396 3.5095C13.2348 3.40016 13.2516 3.29094 13.289 3.18809C13.3264 3.08523 13.3837 2.99076 13.4576 2.91005H13.4585Z"
                                    fill="#A3A3A3"/>
                                <path
                                    d="M8.16683 4C8.38784 4 8.5998 4.0878 8.75609 4.24408C8.91237 4.40036 9.00016 4.61232 9.00016 4.83333V9H11.5002C11.7212 9 11.9331 9.0878 12.0894 9.24408C12.2457 9.40036 12.3335 9.61232 12.3335 9.83333C12.3335 10.0543 12.2457 10.2663 12.0894 10.4226C11.9331 10.5789 11.7212 10.6667 11.5002 10.6667H8.16683C7.94582 10.6667 7.73385 10.5789 7.57757 10.4226C7.42129 10.2663 7.3335 10.0543 7.3335 9.83333V4.83333C7.3335 4.61232 7.42129 4.40036 7.57757 4.24408C7.73385 4.0878 7.94582 4 8.16683 4Z"
                                    fill="#A3A3A3"/>
                                <path
                                    d="M15.6168 5.35251C15.8214 5.26888 16.0508 5.26992 16.2545 5.3554C16.4583 5.44088 16.6198 5.60381 16.7035 5.80834C16.8216 6.09759 16.9232 6.39335 17.0076 6.69417C17.0405 6.80049 17.0518 6.91232 17.0407 7.02305C17.0297 7.13378 16.9965 7.24118 16.9433 7.33891C16.8901 7.43663 16.8178 7.52271 16.7308 7.59205C16.6438 7.6614 16.5437 7.71261 16.4366 7.74267C16.3294 7.77273 16.2173 7.78102 16.1069 7.76706C15.9965 7.75309 15.89 7.71716 15.7938 7.66138C15.6975 7.60559 15.6133 7.53109 15.5463 7.44226C15.4793 7.35343 15.4307 7.25208 15.4035 7.14417C15.336 6.90478 15.2551 6.6694 15.161 6.43918C15.0773 6.23473 15.0782 6.00542 15.1635 5.80166C15.2489 5.59789 15.4116 5.43634 15.616 5.35251H15.6168Z"
                                    fill="#A3A3A3"/>
                            </svg>

                            <span>Bookmark</span>
                        </li>
                        <li className={`${compareStyle.navs} ${highlightRoute(3)}`}
                            id="guidance"
                            onClick={() => changeRoute(3)}>
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none"
                                 xmlns="http://www.w3.org/2000/svg" className={compareStyle.guidanceSvg}>
                                <path
                                    d="M15.5417 4.94165H4.45003C3.29944 4.94165 2.3667 5.87439 2.3667 7.02498V13.9083C2.3667 15.0589 3.29944 15.9917 4.45003 15.9917H15.5417C16.6923 15.9917 17.625 15.0589 17.625 13.9083V7.02498C17.625 5.87439 16.6923 4.94165 15.5417 4.94165Z"
                                    stroke="#A3A3A3" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                <path
                                    d="M5.3916 7.5L9.35827 10C9.54988 10.1224 9.77254 10.1875 9.99993 10.1875C10.2273 10.1875 10.45 10.1224 10.6416 10L14.6083 7.5"
                                    stroke="#A3A3A3" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>

                            <span>Guidance</span>
                        </li>
                        {userContext.userLogin ? <li className={`${compareStyle.navs} ${highlightRoute(4)}`}
                                                     id="appliedJobs"
                                                     onClick={() => changeRoute(4)}>
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none"
                                 xmlns="http://www.w3.org/2000/svg" className={compareStyle.guidanceSvg}>
                                <path
                                    d="M15.5417 4.94165H4.45003C3.29944 4.94165 2.3667 5.87439 2.3667 7.02498V13.9083C2.3667 15.0589 3.29944 15.9917 4.45003 15.9917H15.5417C16.6923 15.9917 17.625 15.0589 17.625 13.9083V7.02498C17.625 5.87439 16.6923 4.94165 15.5417 4.94165Z"
                                    stroke="#A3A3A3" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                <path
                                    d="M5.3916 7.5L9.35827 10C9.54988 10.1224 9.77254 10.1875 9.99993 10.1875C10.2273 10.1875 10.45 10.1224 10.6416 10L14.6083 7.5"
                                    stroke="#A3A3A3" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>

                            <span>AppliedJob</span>
                        </li> : ''}
                    </ul>
                </div>

                <div className={compareStyle.nav_logout}>
                    <i className="far fa-sign-out"/>
                    <span>Log out</span></div>
            </div>
        </div>
    );
}