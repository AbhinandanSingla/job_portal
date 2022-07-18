import React from "react";
import { gsap } from "gsap";
import { useEffect, useRef, useState } from "react";
import adminModule from "../../../Assets/styles/company.module.css";

export function Dashboard() {
  const [show, setShow] = useState(false);
  const [hiddenClass, sethiddenClass] = useState(false);
  const on_Click = () => {
    show ? setShow(false) : setShow(true);
    hiddenClass ? sethiddenClass(false) : sethiddenClass(true);
  };

  const results = () => (
    <div className={adminModule.hiddenElement}>
      <div className={adminModule.hidden1}>
        <h3 className={adminModule.hidden1Heading}>Job Description</h3>
        <p className={adminModule.hidden1Para}>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laborum
          porro ducimus nostrum quia accusamus illum, mollitia consequatur eos.
          Eius quam
        </p>
      </div>
      <div className={adminModule.hiddenLine}></div>
      <div className={adminModule.hidden2}>
        <h3 className={adminModule.hidden2Heading}>Deadline</h3>
        <p className={adminModule.hidden2Para}>21 June 2022</p>
      </div>
    </div>
  );

  const boxRef = useRef();
  const q = gsap.utils.selector(boxRef);
  const tl = useRef();
  useEffect(() => {
    tl.current = gsap
      .timeline({
        stagger: 0.5,
      })
      .fromTo(
        q(".categoryCard"),
        {
          y: 100,
          stagger: 0.8,
        },
        {
          y: 0,
          stagger: 0.2,
        }
      );
  });
  return (
    <div className={adminModule.categoryContainer} ref={boxRef}>
      <div className={adminModule.h_sub_heading}>
        <div className={adminModule.h_sub_heading1}>Number of jobs posted</div>
        <div className={adminModule.h_sub_heading2}>70/100</div>
      </div>

      <div className={adminModule.posts}>
        <div className={adminModule.searchEditContainer}>
          <div className={adminModule.editBtnDiv}>
            <button className={adminModule.editBtn}>edit</button>
          </div>

          <div className={adminModule.searchBarContainer}>
            <div className={adminModule.searchBar}>
              <i className="fas fa-search" />
              <input
                type="text"
                placeholder="Search by company, job title keyword"
              />
              <i className={`fas fa-sliders-h ${adminModule.h_sort}`} />
            </div>
          </div>
        </div>
        <div className={adminModule.tableHeading}>
          <div className={adminModule.tableHeading1}>Jobs</div>
          <div className={adminModule.tableHeading2}>Date posted</div>
          <div className={adminModule.tableHeading3}>
            Number of people applied
          </div>
          <div className={adminModule.tableHeading4}>Report</div>
        </div>
        <div className={adminModule.line1}></div>

        <div
          className={
            hiddenClass
              ? `${adminModule.categoryCardHidden} categoryCard`
              : `${adminModule.categoryCard} categoryCard`
          }
        >
          <div className={adminModule.job}>
            <div className={adminModule.dropdownBtnDiv}>
              <i
                class="zmdi zmdi-chevron-down"
                className={adminModule.dropdownBtn}
                onClick={on_Click}
              ></i>{" "}
              {show ? results() : null}
            </div>

            <div className={adminModule.jobImgDiv}>
              <img
                src="client\src\Assets\Images\admin\pngtree.jpg"
                alt=""
                className={adminModule.jobImg1}
              />
            </div>

            <div>
              <div className={adminModule.jobNameDiv}>
                <p>Job Name</p>
              </div>
              <div className={adminModule.jobCategoryDiv}>
                <p>Category</p>
              </div>
            </div>
          </div>

          <div className={adminModule.datePostedDiv}>
            <p>19 June 2022</p>
          </div>

          <div className={adminModule.appliedNumberDiv}>
            <p>300 people</p>
          </div>

          <div className={adminModule.downloadBtnDiv}>
            <button className={adminModule.downloadBtn}>Download</button>
          </div>
        </div>

        <div className={adminModule.line2}></div>

        <div
          className={
            hiddenClass
              ? `${adminModule.categoryCardHidden} categoryCard`
              : `${adminModule.categoryCard} categoryCard`
          }
        >
          <div className={adminModule.job}>
            <div className={adminModule.dropdownBtnDiv}>
              <i class="zmdi zmdi-chevron-down" onClick={on_Click}></i>{" "}
              {show ? results() : null}
            </div>

            <div className={adminModule.jobImgDiv}>
              <img
                src="client\src\Assets\Images\admin\pngtree.jpg"
                alt=""
                className={adminModule.jobImg1}
              />
            </div>

            <div>
              <div className={adminModule.jobNameDiv}>
                <p>Job Name</p>
              </div>
              <div className={adminModule.jobCategoryDiv}>
                <p>Category</p>
              </div>
            </div>
          </div>

          <div className={adminModule.datePostedDiv}>
            <p>19 June 2022</p>
          </div>

          <div className={adminModule.appliedNumberDiv}>
            <p>300 people</p>
          </div>

          <div className={adminModule.downloadBtnDiv}>
            <button className={adminModule.downloadBtn}>Download</button>
          </div>
        </div>

        <div className={adminModule.line3}></div>

        <div
          className={
            hiddenClass
              ? `${adminModule.categoryCardHidden} categoryCard`
              : `${adminModule.categoryCard} categoryCard`
          }
        >
          <div className={adminModule.job}>
            <div className={adminModule.dropdownBtnDiv}>
              <i class="zmdi zmdi-chevron-down" onClick={on_Click}></i>{" "}
              {show ? results() : null}
            </div>

            <div className={adminModule.jobImgDiv}>
              <img
                src="client\src\Assets\Images\admin\pngtree.jpg"
                alt=""
                className={adminModule.jobImg1}
              />
            </div>

            <div>
              <div className={adminModule.jobNameDiv}>
                <p>Job Name</p>
              </div>
              <div className={adminModule.jobCategoryDiv}>
                <p>Category</p>
              </div>
            </div>
          </div>

          <div className={adminModule.datePostedDiv}>
            <p>19 June 2022</p>
          </div>

          <div className={adminModule.appliedNumberDiv}>
            <p>300 people</p>
          </div>

          <div className={adminModule.downloadBtnDiv}>
            <button className={adminModule.downloadBtn}>Download</button>
          </div>
        </div>
        <div className={adminModule.line3}></div>

        <div
          className={
            hiddenClass
              ? `${adminModule.categoryCardHidden} categoryCard`
              : `${adminModule.categoryCard} categoryCard`
          }
        >
          <div className={adminModule.job}>
            <div className={adminModule.dropdownBtnDiv}>
              <i
                class="zmdi zmdi-chevron-down"
                className={adminModule.dropdownBtn}
                onClick={on_Click}
              ></i>{" "}
              {show ? results() : null}
            </div>

            <div className={adminModule.jobImgDiv}>
              <img
                src="client\src\Assets\Images\admin\pngtree.jpg"
                alt=""
                className={adminModule.jobImg1}
              />
            </div>

            <div>
              <div className={adminModule.jobNameDiv}>
                <p>Job Name</p>
              </div>
              <div className={adminModule.jobCategoryDiv}>
                <p>Category</p>
              </div>
            </div>
          </div>

          <div className={adminModule.datePostedDiv}>
            <p>19 June 2022</p>
          </div>

          <div className={adminModule.appliedNumberDiv}>
            <p>300 people</p>
          </div>

          <div className={adminModule.downloadBtnDiv}>
            <button className={adminModule.downloadBtn}>Download</button>
          </div>
        </div>
        <div className={adminModule.line3}></div>

        <div
          className={
            hiddenClass
              ? `${adminModule.categoryCardHidden} categoryCard`
              : `${adminModule.categoryCard} categoryCard`
          }
        >
          <div className={adminModule.job}>
            <div className={adminModule.dropdownBtnDiv}>
              <i
                class="zmdi zmdi-chevron-down"
                className={adminModule.dropdownBtn}
                onClick={on_Click}
              ></i>{" "}
              {show ? results() : null}
            </div>

            <div className={adminModule.jobImgDiv}>
              <img
                src="client\src\Assets\Images\admin\pngtree.jpg"
                alt=""
                className={adminModule.jobImg1}
              />
            </div>

            <div>
              <div className={adminModule.jobNameDiv}>
                <p>Job Name</p>
              </div>
              <div className={adminModule.jobCategoryDiv}>
                <p>Category</p>
              </div>
            </div>
          </div>

          <div className={adminModule.datePostedDiv}>
            <p>19 June 2022</p>
          </div>

          <div className={adminModule.appliedNumberDiv}>
            <p>300 people</p>
          </div>

          <div className={adminModule.downloadBtnDiv}>
            <button className={adminModule.downloadBtn}>Download</button>
          </div>
        </div>
      </div>
    </div>
  );
}
