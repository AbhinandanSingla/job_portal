import React from "react";
import registerstyle from "../../../Assets/styles/register.module.css";
import greentick from "../../../Assets/Images/register/greentick.png";
import illustration from "../../../Assets/Images/register/illustration.png";
function information() {
  return (
    <div className={registerstyle.infomain}>
    
      <h2>Benefits of Registration</h2>
      <div>
        <div className={registerstyle.point}>
          <div className={registerstyle.tickbutton}>
            <img src={greentick} alt="check" />
          </div>
          <div className={registerstyle.para}>
            <p>
            India's Leading Portal for Emerging Careers
            </p>
          </div>
        </div>
      </div>
      <div>
        <div className={registerstyle.point}>
          <div className={registerstyle.tickbutton}>
            <img src={greentick} alt="check" />
          </div>
          <div className={registerstyle.para}>
            <p>
            Resume Builders for students and many additional benefits
            </p>
          </div>
        </div>
      </div>
      <div>
        <div className={registerstyle.point}>
          <div className={registerstyle.tickbutton}>
            <img src={greentick} alt="check" />
          </div>
          <div className={registerstyle.para}>
            <p>
            Explore your City for Better Job Opportunities Near your Home Area
            </p>
          </div>
        </div>
      </div>
      <div>
        <div className={registerstyle.point}>
          <div className={registerstyle.tickbutton}>
            <img src={greentick} alt="check" />
          </div>
          <div className={registerstyle.para}>
            <p>
            5,00,000+ Jobs & Career Opportunities            </p>
          </div>
        </div>
      </div>

      <div className={registerstyle.illus}>
        <img src={illustration} alt="im" />
      </div>
    </div>
  );
}

export default information;
