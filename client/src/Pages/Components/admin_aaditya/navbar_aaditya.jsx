// import aadityaModule from "../../../Assets/styles/company.module.css";
import aadityaModule from "../../../Assets/styles/aaditya.module.css";
import logo from "../../../Assets/Images/common/logo.svg";
import { Link } from "react-router-dom";
import { Dashboard } from "./dashboard_aaditya";

export function Navbar({ navRoute, changeRoute }) {
  function highlightRoute(index) {
    return navRoute === index ? aadityaModule.selected : "";
  }

  return (
    <div className={aadityaModule.navbar}>
      <div className={aadityaModule.max_width}>
        <div className={aadityaModule.navTop}>
          <Link
            to={"/admin_aaditya"}
            className={aadityaModule.nav_logo}
            onClick={() => changeRoute(0)}
          >
            <img src={logo} alt="" />{" "}
            <span className="navText">Rozgar.com</span>
          </Link>
          <ul>
            <li
              className={`${aadityaModule.navs}  ${highlightRoute(0)}`}
              onClick={() => changeRoute(0)}
              id="dashboard"
            >
              <i class="fas fa-home"></i>
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
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                <path d="M512 288c0 35.35-21.49 64-48 64c-32.43 0-31.72-32-55.64-32C394.9 320 384 330.9 384 344.4V480c0 17.67-14.33 32-32 32h-71.64C266.9 512 256 501.1 256 487.6C256 463.1 288 464.4 288 432c0-26.51-28.65-48-64-48s-64 21.49-64 48c0 32.43 32 31.72 32 55.64C192 501.1 181.1 512 167.6 512H32c-17.67 0-32-14.33-32-32v-135.6C0 330.9 10.91 320 24.36 320C48.05 320 47.6 352 80 352C106.5 352 128 323.3 128 288S106.5 223.1 80 223.1c-32.43 0-31.72 32-55.64 32C10.91 255.1 0 245.1 0 231.6v-71.64c0-17.67 14.33-31.1 32-31.1h135.6C181.1 127.1 192 117.1 192 103.6c0-23.69-32-23.24-32-55.64c0-26.51 28.65-47.1 64-47.1s64 21.49 64 47.1c0 32.43-32 31.72-32 55.64c0 13.45 10.91 24.36 24.36 24.36H352c17.67 0 32 14.33 32 31.1v71.64c0 13.45 10.91 24.36 24.36 24.36c23.69 0 23.24-32 55.64-32C490.5 223.1 512 252.7 512 288z" />
              </svg>{" "}
              <span>Jobs</span>
            </li>
          </ul>
        </div>

        <div className={aadityaModule.nav_logout}>
          <i class="fas fa-sign-out-alt"></i>
          <span>Log out </span>
        </div>
      </div>
    </div>
  );
}
