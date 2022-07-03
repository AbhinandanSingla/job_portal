import logo from "../../../Assets/Images/landingPage/logo.jpeg";
import homeStyle from "../../../Assets/styles/style.module.css";
import { Link } from "react-router-dom";

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
          <li className={homeStyle.btn}>
            {" "}
            <Link
              style={{ color: "white", textDecoration: "none" }}
              to={"/login"}
            >
              {" "}
              Login/Create Account
            </Link>
          </li>
        </ul>
      </div>
    </section>
  );
}
