import companyModule from "../../../Assets/styles/company.module.css";
import profile from "../../../Assets/Images/company/profile.png";
import { useNavigate } from "react-router-dom";
export function Home({ route }) {
  let heading = "";
  switch (route) {
    case 0:
      heading = "Welcome, Company";
      break;
    case 1:
      heading = "Add Job";
      break;
    default:
      heading = "";
  }
  const navigate =useNavigate();

  return (
    <div className={companyModule.home}>
      <div className={companyModule.exContainer}>
        <div className={companyModule.exLeft}>
          <div className={companyModule.exLeftContainer}>
            <div className={companyModule.h_heading}>{heading}</div>
            <img
              src={profile}
              alt="profile"
              className={companyModule.profilePic}
              onClick={()=>{
                navigate('/company_profile')
              }}            
              />
            <div className={companyModule.hc_heading}>
              Here, we <span>found</span> your posted jobs!
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
