import React from "react";
import companyModule from "../../../Assets/styles/company.module.css";
export const AddJob = () => {
  return (
    <div className={companyModule.addJobContainer}>
      <div className={companyModule.addJobSubContainer}>
        <div className={companyModule.profileSection}>
          <div className={companyModule.photoDiv}>photo</div>

          <div className={companyModule.photoRightSide}>
            <div>
              <p>select your company profile pic</p>
            </div>
            <div className={companyModule.browseBtnDiv}>
              <button className={companyModule.browseBtn}>browse</button>
            </div>
          </div>
        </div>

        <div className={companyModule.postJobInputs}>
          <div className={companyModule.jobInputDiv1}>
            <div>
              <p className={companyModule.jobInputHeading}>Company Name</p>
              <input
                type="text"
                placeholder="Name"
                className={companyModule.jobInputSmall}
              />
            </div>
            <div>
              <p className={companyModule.jobInputHeading}>Company Website</p>
              <input
                type="text"
                placeholder="Website Link"
                className={companyModule.jobInputSmall}
              />
            </div>
          </div>

          <div className={companyModule.jobInputDiv2}>
            <div>
              <p className={companyModule.jobInputHeading}>Job Title</p>
              <input
                type="text"
                placeholder="Title"
                className={companyModule.jobInputBig}
              />
            </div>
          </div>

          <div className={companyModule.jobInputDiv3}>
            <div>
              <div>
                <p className={companyModule.jobInputHeading}>Job Category</p>
              </div>
              <div>
                <input
                  type="text"
                  placeholder="Technology"
                  className={companyModule.jobInputSmall}
                />
              </div>
            </div>

            <div>
              <div>
                <p className={companyModule.jobInputHeading}>Job Type</p>
              </div>
              <div>
                <select
                  name="jobType"
                  id=""
                  className={companyModule.jobInputSmall}
                >
                  <option value="partTime">Part Time</option>
                  <option value="fullTime">Full Time</option>
                </select>
              </div>
            </div>
          </div>

          <div className={companyModule.jobInputDiv4}>
            <div>
              <div>
                <p className={companyModule.jobInputHeading}>Job Location</p>
              </div>
              <div>
                <input
                  type="text"
                  placeholder="Location"
                  className={companyModule.jobInputSmall}
                />
              </div>
            </div>

            <div>
              <div>
                <p className={companyModule.jobInputHeading}>Salary Range</p>
              </div>
              <div>
                <input
                  type="text"
                  placeholder="salary"
                  className={companyModule.jobInputSmall}
                />
              </div>
            </div>
          </div>

          <div className={companyModule.jobInputDiv5}>
            <div>
              <div>
                <p className={companyModule.jobInputHeading}>Experience </p>
              </div>
              <div>
                <input
                  type="text"
                  placeholder="experience"
                  className={companyModule.jobInputSmall}
                />
              </div>
            </div>

            <div>
              <div>
                <p className={companyModule.jobInputHeading}>Qualification</p>
              </div>
              <div>
                <input
                  type="text"
                  placeholder="qualification"
                  className={companyModule.jobInputSmall}
                />
              </div>
            </div>
          </div>

          <div className={companyModule.jobInputDiv6}>
            <div>
              <div>
                <p className={companyModule.jobInputHeading}>
                  Application Deadline{" "}
                </p>
              </div>
              <div>
                <input
                  type="text"
                  placeholder="Job aaplication deadline "
                  className={companyModule.jobInputBig}
                />
              </div>
            </div>
          </div>

          <div className={companyModule.jobInputDiv7}>
            <div>
              <div>
                <p className={companyModule.jobInputHeading}>Description </p>
              </div>
              <div>
                <textarea
                  type="text"
                  placeholder="Description "
                  className={companyModule.jobInputBigger}
                />
              </div>
            </div>
          </div>
        </div>

        <div className={companyModule.postJobBtnDiv}>
          <button className={companyModule.postJobBtn}>Post Job</button>
        </div>
      </div>
    </div>
  );
};
