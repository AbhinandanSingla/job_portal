import React from "react";
import templateStyles from "../templates/templates.module.css";
export const Resume = () => {
  return (
    <div className={templateStyles.resumeMain}>
      <div className={templateStyles.resumeContainer}>
        <div className={templateStyles.resume1Left}>
          <div>
            <h5 className={templateStyles.boxText}>UI/UX DESIGNER</h5>
            <h1>
              Hello I'm <span>Emma Stark</span>
            </h1>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quae
              animi eum aliquid eligendi a itaque voluptatibus iure distinctio?
              .
            </p>
            <div className={templateStyles.lineLeft}></div>
            <h3>Experience</h3>

            <div className={templateStyles.leftDivs}>
              
              <div>
              <p className={templateStyles.verticalText}><span>2019-</span> <span>CURRENT</span> </p>
             </div>

              <div className={templateStyles.leftDivsContent}>                
              <h5>UX Designer</h5>
              <h6>
                <i>Digital agency One, New York</i>
              </h6>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis
                voluptatibus, quas ducimus dolorem eaque distinctio voluptates
                sed sunt nihil, culpa sapiente, vero temporibus modi eum nostrum
                aut asperiores maxime quis.
              </p>
              </div>
            </div>

            <div className={templateStyles.leftDivs}>

              <div>
              <p className={templateStyles.verticalText}><span>2019-</span> <span>CURRENT</span> </p>
                {/* <p className={templateStyles.verticalText}></p>  */}
              </div>

              <div className={templateStyles.leftDivsContent}>
              <h5>UX Designer</h5>
              <h6>
                <i>Digital agency One, New York</i>
              </h6>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis
                voluptatibus, quas ducimus dolorem eaque distinctio voluptates
                sed sunt nihil, culpa sapiente, vero temporibus modi eum nostrum
                aut asperiores maxime quis.
              </p>
              </div>
            </div>

            <div className={templateStyles.leftDivs}>
              <div >
              <p className={templateStyles.verticalText}><span>2019-</span> <span>CURRENT</span> </p>            
              </div>

              <div className={templateStyles.leftDivsContent}>                
                <h5>UX Designer</h5>
                <h6>
                  <i>Digital agency One, New York</i>
                </h6>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis
                  voluptatibus, quas ducimus dolorem eaque distinctio voluptates
                  sed sunt nihil, culpa sapiente, vero temporibus modi eum nostrum
                  aut asperiores maxime quis.
                </p>
                </div>

            </div>
          </div>
        </div>

        <div className={templateStyles.lineMid}></div>

        <div className={templateStyles.resume1Right}>
          <div>
            <h5 className={templateStyles.boxText}>CONTACT</h5>
            <p>emma@gmail.com</p>
            <p>+91 2321423421</p>
            <p>www.emma.com</p>
            <p>New York,NY</p>
          </div>

          <div>
            <h5 className={templateStyles.boxText}>EDUCATION</h5>
            <h5>2016</h5>
            <p>MA in digital Design</p>
            <p>Cornell University</p>

            <h5>2014</h5>
            <p>BA in graphic Designing</p>
            <p>Royal College of Arts</p>
          </div>

          <div>
            <h5 className={templateStyles.boxText}>SKILLS</h5>
            <p>prototyping</p>
            <p>UI Design</p>
            <p>Illustrations</p>
            <p>User research</p>
          </div>

          <div>
            <h5 className={templateStyles.boxText}>AWARDS</h5>
            <p>Young Talent 2014</p>
            <p>Royal College of arts</p>
          </div>

          <div>
            <h5 className={templateStyles.boxText}>LANGUAGES</h5>
            <p>English <br />Native proficiency </p>
            <p>German <br />Working proficiency </p>
          </div>
        </div>
      </div>
    </div>
  );
};
