import React from "react";
import namestyle from "../.././../Assets/styles/profile.module.css";

function Name() {
  return (
    <div className={namestyle.mainhead}>
      <div className={namestyle.profilepicdetail}>
        <div className={namestyle.profilepic}>
          <img
            src="https://pbs.twimg.com/profile_images/1523987597751726081/XuQeo7gC_400x400.jpg"
            alt="pic"
          />
        </div>

        <div className={namestyle.profiledetail}>
          <p>Samsung</p>
          <p></p>
          <h5>Member since 2018</h5>
        </div>
      </div>
      <div className={namestyle.profiles}>
        <button type="submit">Edit your profile</button>
      </div>
    </div>
  );
}

export default Name;
