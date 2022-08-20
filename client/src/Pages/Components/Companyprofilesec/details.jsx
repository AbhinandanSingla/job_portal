import React from "react";
import detailsstyle from "../../../Assets/styles/profile.module.css";

function Details() {
  return (
    <div className={detailsstyle.formmain}>
      <form>
        <div className={detailsstyle.form}>
          <div className={detailsstyle.leftside}>
            <label htmlFor="Email Address">Email Address</label>
            <input
              className={detailsstyle.inputbox}
              id="FirstName"
              name="FirstName"
              type="FirstName"
            />
            <label htmlFor="Email Address">GSTIN Number</label>
            <input
              className={detailsstyle.inputbox}
              id="FirstName"
              name="FirstName"
              type="FirstName"
            />
            <label htmlFor="Address">Company Website</label>
            <input
              className={detailsstyle.inputbox}
              id="FirstName"
              name="FirstName"
              type="FirstName"
            />
           
          </div>
          <div className={detailsstyle.rightside}>
            <label htmlFor="LastName">Phone Number</label>
            <input
              className={detailsstyle.inputbox}
              id="FirstName"
              name="FirstName"
              type="FirstName"
            />
            <label htmlFor="Fhone">Company Type</label>
            <input
              className={detailsstyle.inputbox}
              id="FirstName"
              name="FirstName"
              type="FirstName"
            />
            <label htmlFor="State">Change Password</label>
            <input
              className={detailsstyle.inputbox}
              id="FirstName"
              name="FirstName"
              type="FirstName"
            />
            
          </div>
        </div>
        <div className={detailsstyle.footer}>
          <div className={detailsstyle.button}>
            <button type="submit">Save your changes</button>
          </div>
          
        </div>
      </form>
    </div>
  );
}

export default Details;
