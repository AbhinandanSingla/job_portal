import React from "react";
import companyModule from "../../../Assets/styles/company.module.css";
import { useState } from "react";
export const AddJob = () => {
  const [serviceList, setServiceList] = useState([{service: ""},{service: ""}])
  console.log(serviceList)
  const handleAdd=()=>{
    setServiceList([...serviceList,{service:""}])
  }
  const handleRemove=(index)=>{
    const list=[...serviceList]
    list.splice(index,1)
    setServiceList(list)
  }
  const handleServiceChange=(e,index)=>{
    const {name,value}=e.target
    const list = [...serviceList]
    list[index][name]=value
    setServiceList(list)

  }
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
              <p className={companyModule.jobInputHeading}>Job Category</p>
              <input
                type="text"
                placeholder="eg: Technical"
                className={companyModule.jobInputSmall}
              />
            </div>
            <div>
              <p className={companyModule.jobInputHeading}>Job location</p>
              <input
                type="text"
                placeholder="hyderabad"
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
                className={companyModule.jobInputSmall}
              />
            </div>
            <div>
              <div>
                <p className={companyModule.jobInputHeading}>Number of applicants</p>
              </div>
              <div>
                <input
                  type="number"
                  placeholder="200"
                  className={companyModule.jobInputSmall}
                />
              </div>
            </div>
          </div>

          <div className={companyModule.jobInputDiv3}>
            <div>
              <p className={companyModule.jobInputHeading}>Additional links</p>
              <input
                type="text"
                placeholder="Links"
                className={companyModule.jobInputSmall}
              />
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
                <p className={companyModule.jobInputHeading}>Skills</p>
              </div>
              <div>
                <input
                  type="text"
                  placeholder="skill 1"
                  className={companyModule.jobInputVerySmall}
                />
                <input
                  type="text"
                  placeholder="skill 2"
                  className={companyModule.jobInputVerySmall}
                />
                <input
                  type="text"
                  placeholder="skill 3"
                  className={companyModule.jobInputVerySmall}
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
                <p className={companyModule.jobInputHeading}>Qualification</p>
                {serviceList.map((singleService, index)=>(
                <div>
                  <div key={index}>
                    <input
                    name='service'
                    type="text"
                    placeholder="qualification"
                    className={companyModule.jobInputSmaller}
                    value={singleService.service}
                    onChange={(e)=>{handleServiceChange(e,index)}}
                    />
                    {serviceList.length>1 &&(
                    <button className={companyModule.removeBtn} onClick={()=>{handleRemove(index)}}>Remove</button>

                    )}
                    
                    
                  </div>
                  <div>
                  {serviceList.length-1===index && serviceList.length<3&&(
                    <button className={companyModule.addBtn} onClick={handleAdd}>Add qualification</button>
                    )}
                  </div>
                </div>
                ))}
              </div>
              
            </div>
            <div className={companyModule.absoluteDiv}>
              <div>
                <p className={companyModule.jobInputHeading}>Applicaation deadline </p>
              </div>
              <div>
                <input
                  type="date"
                  placeholder="deadline date"
                  className={companyModule.jobInputSmall}
                />
              </div>
            </div>
          </div>

          <div className={companyModule.jobInputDiv6}>
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
