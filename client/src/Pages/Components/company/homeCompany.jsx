import adminModule from "../../../Assets/styles/admin.module.css";

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
  return (
    <div className={adminModule.home}>
      <div className={adminModule.exContainer}>
        <div className={adminModule.exLeft}>
          <div className={adminModule.exLeftContainer}>
            <div className={adminModule.h_heading}>{heading}</div>
            <div className={adminModule.hc_heading}>
              Here, we <span>found</span> your posted jobs!
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
