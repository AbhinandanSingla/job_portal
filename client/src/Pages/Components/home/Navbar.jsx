<<<<<<< HEAD
import logo from "../../../Assets/Images/landingPage/logo.jpeg";
import homeStyle from "../../../Assets/styles/style.module.css";
// import {Link} from "react-router-dom";

export function Navbar() {
  return (
    <section className={homeStyle.navbar}>
      <div className={homeStyle.max_width}>
        <div className={homeStyle.nav_logo}>
          <img src={logo} alt="Logo" />
        </div>
        <ul className={homeStyle.navsContainer}>
          <li className={homeStyle.navs}>Home</li>
          <li className={homeStyle.navs}>
            <a href="/compare"> Category</a>
          </li>
          <li className={homeStyle.navs}>Post a job</li>
          <li className={homeStyle.navs}>Contact</li>
          <li className={homeStyle.btn}>Create Account</li>
        </ul>
      </div>
    </section>
  );
=======
import logo from "../../../Assets/Images/landingPage/logo.svg";
import homeStyle from "../../../Assets/styles/style.module.css";
import {Link, NavLink} from "react-router-dom";

export function Navbar() {
    return (
        <section className={homeStyle.navbar}>
            <div className={homeStyle.max_width}>
                <div className={homeStyle.nav_logo}>
                    <img src={logo} alt="Logo"/>
                    <span>Rozgar.com</span>
                </div>
                <ul className={homeStyle.navsContainer}>
                    <li className={homeStyle.navs}>
                        <NavLink to={'/'} className={({isActive}) => (isActive ? homeStyle.active : '')}>
                            Home
                        </NavLink>
                    </li>
                    <li className={homeStyle.navs}>
                        <NavLink to={'/compare'} className={({isActive}) => (isActive ? homeStyle.active : '')}>
                            Category
                        </NavLink>
                    </li>
                    <li className={homeStyle.navs}>
                        <NavLink to={'/compare'} className={({isActive}) => (isActive ? homeStyle.active : '')}>
                            Post a job
                        </NavLink>
                    </li>
                    <li className={homeStyle.navs}>
                        <NavLink to={'/contact'} className={({isActive}) => (isActive ? homeStyle.active : '')}>
                            Contact
                        </NavLink>
                    </li>
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
                            to={"/login"}
                        >
                            Create Account
                        </Link>
                    </li>
                </ul>
                <div className={homeStyle.mobileBar}>
                    <i className="fa fa-bars"></i>
                </div>
            </div>
        </section>
    );
>>>>>>> 58d0356d835f97b7b6b3c372c4da6ec64900e35f
}
