import React from "react";
import detailsstyle from "../../../Assets/styles/profile.module.css";

function Details() {
  return (
    <div className={detailsstyle.formmain}>
      <form>
        <div className={detailsstyle.form}>
          <div className={detailsstyle.leftside}>
            <label htmlFor="FirstName">First Name</label>
            <input
              className={detailsstyle.inputbox}
              id="FirstName"
              name="FirstName"
              type="FirstName"
            />
            <label htmlFor="Email Address">Email Address</label>
            <input
              className={detailsstyle.inputbox}
              id="FirstName"
              name="FirstName"
              type="FirstName"
            />
            <label htmlFor="Address">Address</label>
            <input
              className={detailsstyle.inputbox}
              id="FirstName"
              name="FirstName"
              type="FirstName"
            />
            <label htmlFor="dob">Date of Birth</label>
            <input
              className={detailsstyle.inputbox}
              id="FirstName"
              name="FirstName"
              type="FirstName"
            />
            <label htmlFor="password">Password</label>
            <input
              className={detailsstyle.inputbox}
              id="FirstName"
              name="FirstName"
              type="FirstName"
            />
          </div>
          <div className={detailsstyle.rightside}>
            <label htmlFor="LastName">Last Name</label>
            <input
              className={detailsstyle.inputbox}
              id="FirstName"
              name="FirstName"
              type="FirstName"
            />
            <label htmlFor="Fhone">Phone Number</label>
            <input
              className={detailsstyle.inputbox}
              id="FirstName"
              name="FirstName"
              type="FirstName"
            />
            <label htmlFor="State">State</label>
            <input
              className={detailsstyle.inputbox}
              id="FirstName"
              name="FirstName"
              type="FirstName"
            />
            <label htmlFor="PreviousEx">Previous experience</label>
            <input
              className={detailsstyle.inputbox}
              id="FirstName"
              name="FirstName"
              type="FirstName"
            />
            <label htmlFor="Work">Work Location</label>
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
          <div className={detailsstyle.download}>
            <button type="submit">Download your CV</button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Details;
