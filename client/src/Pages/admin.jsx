import React from "react";
import adminModule from "../Assets/styles/admin.module.css";
import { Navbar } from "./Components/Admin/anav.jsx";
import { BsCalendarMonth } from "react-icons/bs";


export const Admin = () => {
  return (
    <div>
      <Navbar />
      <div className={adminModule.heading}>
        <h1>Welcome to the Dashboard</h1>
        
        <h5>
        
          Here is your job listings statistic report from July 19 - July 25.      
        </h5>
        <div className={adminModule.box}>
          <p className={adminModule.cal}>
              July 1- July 30 <BsCalendarMonth size="1.3em" />
          </p>
          </div>
      </div>
<div className={adminModule.bbox}>
      <div className={adminModule.bigbox}>
        <h4>
          Job Posts
        </h4>
        <h2>
          2,455
          </h2>
          <h3 style={{color: "green"}}>
             +4.2%
          </h3>
          <img src="../Assets/Images/admin/Graph.png" alt="graph" style={{background:"none"}} />
      </div>
      <div className={adminModule.bigbox2}>
        <h4>
          Job Posts
        </h4>
        <h2>
          2,455
          </h2>
          <h3 style={{color: "red"}}>
             -2.2%
          </h3>
          <img src="../Assets/Images/admin/Graph.png" alt="graph" />
      </div>
      <div className={adminModule.bigbox3}>
        <h4>
          Job Posts
        </h4>
        <h2>
          2,455
          </h2>
          <h3 style={{color: "orange"}}>
             1.2%
          </h3>
          <img src="../Assets/Images/admin/Graph.png" alt="graph" />
      </div>
      <div className={adminModule.bigbox4}>
        <h4>
          Job Posts
        </h4>

        <h2>
          2,455
          </h2>
          <h3 style={{color: "red"}}>
             -4.2%
          </h3>
          <img src="../Assets/Images/admin/Graph.png" alt="graph" />
      </div>

      </div>
      <div className={adminModule.bp}>
        <p className={adminModule.sep}>Top Categories</p>
        <img src="../Assets/Images/admin/Chart.png" alt="chart" />
        <div className={adminModule.inside}>
          <p> . Programming</p>
          <p style={{left: '130px'}}> . Web Development</p>
          <p style={{left: '290px'}}> . Mobile Dev</p>
        </div>
      </div>
      <div className={adminModule.list}>
         <h3>
          Recent Job Posts
         </h3>
        </div>
        <div className={adminModule.listheading}>
          <p>job</p>
          <p>job</p>
          <p>job</p>
          <p>job</p>
          <p>job</p>
         </div>
    </div>
  );
};
