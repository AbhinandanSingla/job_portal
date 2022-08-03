import React from "react";
import aadityaModule from "./aaditya.module.css";
export const Jobs = () => {
  return (
    <div className={aadityaModule.jobs}>
      <div className={aadityaModule.h_sub_heading}>
        <div className={aadityaModule.h_sub_heading1}>
          Number of jobs posted
        </div>
        <div className={aadityaModule.h_sub_heading2}>70/100</div>
      </div>
      <div className={aadityaModule.jobCatDiv}>
        <h2>Job categories</h2>
        <div className={aadityaModule.jobCat}>
          <div>Design</div>
          <div>Developer </div>
          <div>Engineer</div>
          <div>Finance</div>
          <div>Marketting</div>
          <div>Writer</div>
        </div>
      </div>

      <div className={aadityaModule.searchDivContainer}>
        <h2>Job search</h2>
        <div className={aadityaModule.searchDiv}>
          <div className={aadityaModule.searchBar}>
            <i className="fas fa-search" />
            <input
              type="text"
              placeholder="Search: Design, Developer"
              // className={aadityaModule.searchBar}
            />
          </div>
          <span>sort by</span>
          <button>category</button>
          <button>Job Type</button>
          <button>Job Contract</button>
        </div>
      </div>

      <div className={aadityaModule.jobListDiv}>
        <h1>Recent job posts</h1>
        <div className={aadityaModule.jobListHead}>
          <span id={aadityaModule.spanJobTitle}>Job Title</span>
          <span id={aadityaModule.spanCategory}>Category</span>
          <span id={aadityaModule.spanOpenings}>Openings</span>
          <span id={aadityaModule.spanApplications}>Applications</span>
          <span id={aadityaModule.spanStatus}>Status</span>
        </div>
        <div className={aadityaModule.jobList}>
          <div className={aadityaModule.jobListSub}>
            <span>UI/UX Designer</span>
            <span>Full Time </span>
            <span>12</span>
            <span>135</span>
            <span id={aadityaModule.spanActive}>Active</span>
          </div>
          <div className={aadityaModule.line}></div>
          <div className={aadityaModule.jobListSub}>
            <span>UI/UX Designer</span>
            <span>Full Time </span>
            <span>12</span>
            <span>135</span>
            <span id={aadityaModule.spanInactive}>Active</span>
          </div>
          <div className={aadityaModule.line}></div>
          <div className={aadityaModule.jobListSub}>
            <span>UI/UX Designer</span>
            <span>Full Time </span>
            <span>12</span>
            <span>135</span>
            <span id={aadityaModule.spanActive}>Active</span>
          </div>
          <div className={aadityaModule.line}></div>
          <div className={aadityaModule.jobListSub}>
            <span>UI/UX Designer</span>
            <span>Full Time </span>
            <span>12</span>
            <span>135</span>
            <span id={aadityaModule.spanInactive}>Active</span>
          </div>
          <div className={aadityaModule.line}></div>
          <div className={aadityaModule.jobListSub}>
            <span>UI/UX Designer</span>
            <span>Full Time </span>
            <span>12</span>
            <span>135</span>
            <span id={aadityaModule.spanInactive}>Active</span>
          </div>
          <div className={aadityaModule.line}></div>
          <div className={aadityaModule.jobListSub}>
            <span>UI/UX Designer</span>
            <span>Full Time </span>
            <span>12</span>
            <span>135</span>
            <span id={aadityaModule.spanInactive}>Active</span>
          </div>
          <div className={aadityaModule.line}></div>
          <div className={aadityaModule.jobListSub}>
            <span>UI/UX Designer</span>
            <span>Full Time </span>
            <span>12</span>
            <span>135</span>
            <span id={aadityaModule.spanInactive}>Active</span>
          </div>
        </div>
      </div>
    </div>
  );
};
