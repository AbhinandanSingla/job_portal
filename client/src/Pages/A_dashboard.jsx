import React from "react";
import aadityaModule from "../Assets/styles/aaditya.module.css";
import {Navbar} from "./Components/admin_aaditya/navbar_aaditya";
import {BsCalendarMonth} from "react-icons/bs";

export const A_Dashboard = () => {
    return (
        <div className={aadityaModule.mt}>
            <Navbar/>
            <div className={aadityaModule.heading}>

                <h1 className={aadityaModule.heading1}>Welcome to the Dashboard</h1>
                <div className={aadityaModule.try}>
                    <h5>
                        Here is your job listings statistic report from July 19 - July 25.

                    </h5>
                </div>
                <div className={aadityaModule.box}>
                    <p className={aadityaModule.cal}>
                        July 1- July 30 <BsCalendarMonth size="1.3em"/>
                    </p>
                </div>
            </div>
            <div className={aadityaModule.bbox}>
                <div className={aadityaModule.bigbox}>
                    <h4>
                        Job Posts
                    </h4>
                    <h2>
                        2,455
                    </h2>
                    <h3 style={{color: "green"}}>
                        +4.2%
                    </h3>
                    <img src="../Assets/Images/admin/Graph.png" alt="graph" style={{background: "none"}}/>
                </div>
                <div className={aadityaModule.bigbox2}>
                    <h4>
                        Job Posts
                    </h4>
                    <h2>
                        2,455
                    </h2>
                    <h3 style={{color: "red"}}>
                        -2.2%
                    </h3>
                    <img src="../Assets/Images/admin/Graph.png" alt="graph"/>
                </div>
                <div className={aadityaModule.bigbox3}>
                    <h4>
                        Job Posts
                    </h4>
                    <h2>
                        2,455
                    </h2>
                    <h3 style={{color: "orange"}}>
                        1.2%
                    </h3>
                    <img src="../Assets/Images/admin/Graph.png" alt="graph"/>
                </div>
                <div className={aadityaModule.bigbox4}>
                    <h4>
                        Job Posts
                    </h4>

                    <h2>
                        2,455
                    </h2>
                    <h3 style={{color: "red"}}>
                        -4.2%
                    </h3>
                    <img src="../Assets/Images/admin/Graph.png" alt="graph"/>
                </div>

            </div>


            <div className={aadityaModule.bp}>
                <p className={aadityaModule.sep}>Top Categories</p>
                <img src="../Assets/Images/admin/Chart.png" alt="chart"/>
                <div className={aadityaModule.inside}>
                    <p> . Programming</p>
                    <p style={{left: '130px'}}> . Web Development</p>
                    <p style={{left: '290px'}}> . Mobile Dev</p>
                </div>
            </div>
            <div className={aadityaModule.sd}>
                <h1>Recent Job Posts</h1>

                <div className={aadityaModule.recent}>
                    <p>Job</p>
                    <p>Category</p>
                    <p>Openings</p>
                    <p>Application</p>
                    <p>Status</p>
                </div>

                <div className={aadityaModule.cll}>
                    <p>UI/UX Designer</p>
                    <p>Full Time</p>
                    <p>12</p>
                    <p>125</p>
                    <button> Active</button>

                    <hr/>
                </div>
                <br/>
                <div className={aadityaModule.cll}>
                    <p>UI/UX Designer</p>
                    <p>Full Time</p>
                    <p>12</p>
                    <p>125</p>
                    <button> Active</button>

                    <hr/>
                </div>
                <br/>
                <div className={aadityaModule.cll}>
                    <p>UI/UX Designer</p>
                    <p>Full Time</p>
                    <p>12</p>
                    <p>125</p>
                    <button> Active</button>

                    <hr/>
                </div>
                <br/>
                <div className={aadityaModule.cll}>
                    <p>UI/UX Designer</p>
                    <p>Full Time</p>
                    <p>12</p>
                    <p>125</p>
                    <button> Active</button>

                    <hr/>
                </div>
                <br/>
                <div className={aadityaModule.cll}>
                    <p>UI/UX Designer</p>
                    <p>Full Time</p>
                    <p>12</p>
                    <p>125</p>
                    <button> Active</button>

                    <hr/>
                </div>
                <br/>

            </div>
            <div className={aadityaModule.last}>

                <h2> New Companies</h2>
                <h3> Total Applicants : 19</h3>
                <h4>View all - </h4>
                <div className={aadityaModule.comp}>
                    <div className={aadityaModule.circle}></div>
                    <p className={aadityaModule.lest}>Company Name</p>
                    <p className={aadityaModule.diff} style={{color: "#FFB836"}}>Category</p>
                    <p className={aadityaModule.pga}> 13 July,2022</p>
                    <p className={aadityaModule.pge}>Email.com</p>
                    <button>Pending</button>

                </div>
            </div>

        </div>
    );
};