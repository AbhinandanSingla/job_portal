import React from "react";
import templateStyles from './templates.module.css';
export const Resume2 = () => {
  return (
    <div className={templateStyles.resume2container}>
    <div className={templateStyles.resume2SubContainer}>
      <div className={templateStyles.head}>
        <h1>Emma Stark</h1>
        <h5>Product Designer</h5>
      </div>

      <div className={templateStyles.detailsDiv}>
      <div className={templateStyles.resume2Left}>
        <div>
          <h3>EXPERIENCE</h3>
          <div>
            <p className={templateStyles.year}><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256C512 397.4 397.4 512 256 512C114.6 512 0 397.4 0 256zM256 352C309 352 352 309 352 256C352 202.1 309 160 256 160C202.1 160 160 202.1 160 256C160 309 202.1 352 256 352z"/></svg>2018-2020</p>
            <h5>PRODUCT DESIGNER</h5>
            <p className={templateStyles.description}>Digital Agency One, NY</p>
          </div>
          <div>
            <p className={templateStyles.year}><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256C512 397.4 397.4 512 256 512C114.6 512 0 397.4 0 256zM256 352C309 352 352 309 352 256C352 202.1 309 160 256 160C202.1 160 160 202.1 160 256C160 309 202.1 352 256 352z"/></svg>2018-2020</p>
            <h5>PRODUCT DESIGNER</h5>
            <p className={templateStyles.description}>Digital Agency One, NY</p>
          </div>
          <div>
            <p className={templateStyles.year}> <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256C512 397.4 397.4 512 256 512C114.6 512 0 397.4 0 256zM256 352C309 352 352 309 352 256C352 202.1 309 160 256 160C202.1 160 160 202.1 160 256C160 309 202.1 352 256 352z"/></svg>2018-2020</p>
            <h5 >PRODUCT DESIGNER</h5>
            <p className={templateStyles.description}>Digital Agency One, NY</p>
          </div>
        </div>
        <div>
          <h3>EDUCATION</h3>
          <div>
            <p className={templateStyles.year}>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                <path d="M0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256C512 397.4 397.4 512 256 512C114.6 512 0 397.4 0 256zM256 352C309 352 352 309 352 256C352 202.1 309 160 256 160C202.1 160 160 202.1 160 256C160 309 202.1 352 256 352z" />
              </svg>
              2018-2020
            </p>
            <h5>PRODUCT DESIGNER</h5>
            <p className={templateStyles.description}>Digital Agency One, NY</p>
          </div>
          <div>
            <p className={templateStyles.year}> <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256C512 397.4 397.4 512 256 512C114.6 512 0 397.4 0 256zM256 352C309 352 352 309 352 256C352 202.1 309 160 256 160C202.1 160 160 202.1 160 256C160 309 202.1 352 256 352z"/></svg>2018-2020</p>
            <h5>PRODUCT DESIGNER</h5>
            <p className={templateStyles.description}>Digital Agency One, NY</p>
          </div>
          <div>
            <p className={templateStyles.year}> <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256C512 397.4 397.4 512 256 512C114.6 512 0 397.4 0 256zM256 352C309 352 352 309 352 256C352 202.1 309 160 256 160C202.1 160 160 202.1 160 256C160 309 202.1 352 256 352z"/></svg>2018-2020</p>
            <h5>PRODUCT DESIGNER</h5>
            <p className={templateStyles.description}>Digital Agency One, NY</p>
          </div>
        </div>
      </div>

      <div className={templateStyles.resume2Right}>
        <div>
          <h5>PROFILE</h5>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Non cumque
            voluptatem soluta ipsum doloribus ex quam error dolores, hic fugiat
            mollitia corrupti, asperiores nemo deserunt minima sit enim
            perspiciatis labore.
          </p>
        </div>

        <div>
          <h5>CONTACT</h5>
          <p>emma@gmail.com</p>
          <p>+91 2321423421</p>
          <p>www.emma.com</p>
          <p>New York,NY</p>
        </div>

        <div>
          <h5>LANGUAGES</h5>
          <p>
            English <br />
            Native proficiency{" "}
          </p>
          <p>
            German <br />
            Working proficiency{" "}
          </p>
        </div>

        <div>
          <h5>TOOLS</h5>
          <p>Azure</p>
          <p>Azure</p>
          <p>Azure</p>
          <p>Adobe tools</p>
        </div>
      </div>
      </div>
    </div>
    </div>
  );
};
