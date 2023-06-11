import React from "react";
import adminMod from "../../../Assets/styles/admin.module.css";

import {BsCalendarMonth} from "react-icons/bs";


export const AdminDashboard = () => {
    return (
        <div className={adminMod.mt}>

            <div className={adminMod.heading}>

                <h1 className={adminMod.heading1}>Welcome to the Dashboard</h1>
                <div className={adminMod.try}>
                    <h5>
                        Here is your job listings statistic report from July 19 - July 25.

                    </h5>
                </div>
                <div className={adminMod.box}>
                    <p className={adminMod.cal}>
                        July 1- July 30 <BsCalendarMonth size="1.3em"/>
                    </p>
                </div>
            </div>
            <div className={adminMod.bbox}>
                <div className={adminMod.bigbox}>
                    <h4>
                        Job Posts
                    </h4>
                    <h2>
                        2,455
                    </h2>
                    <h3 style={{color: "green"}}>
                        +4.2%
                    </h3>
                    <img src="https://t3.ftcdn.net/jpg/05/20/85/32/360_F_520853289_HfHVFOCV22OtvBtSEPYhNeGZtXsk3Wgo.jpg"
                         alt="graph" style={{background: "none", width: "10rem"}}/>
                </div>
                <div className={adminMod.bigbox2}>
                    <h4>
                        Job Posts
                    </h4>
                    <h2>
                        2,455
                    </h2>
                    <h3 style={{color: "red"}}>
                        -2.2%
                    </h3>
                    <img
                        src="https://static.vecteezy.com/system/resources/previews/001/188/035/original/heartbeat-long-line-png.png"
                        alt="graph" style={{
                        width: "10rem"
                    }}/>
                </div>
                <div className={adminMod.bigbox3}>
                    <h4>
                        Job Posts
                    </h4>
                    <h2>
                        2,455
                    </h2>
                    <h3 style={{color: "orange"}}>
                        1.2%
                    </h3>
                    <img src="https://www.shutterstock.com/shutterstock/videos/1056055511/thumb/3.jpg?ip=x480"
                         alt="graph" style={{
                        width: "10rem"
                    }}/>
                </div>
                <div className={adminMod.bigbox4}>
                    <h4>
                        Job Posts
                    </h4>

                    <h2>
                        2,455
                    </h2>
                    <h3 style={{color: "red"}}>
                        -4.2%
                    </h3>
                    <img src="https://static.vecteezy.com/system/resources/previews/001/188/035/original/heartbeat-long-line-png.png" alt="graph"
                         style={{
                             width: "10rem"
                         }}/>
                </div>

            </div>


            <div className={adminMod.bp}>
                <p className={adminMod.sep}>Top Categories</p>
                <img src="https://www.infscripts.com/wp-content/uploads/2015/06/chart.png" alt="chart"/>
                <div className={adminMod.inside}>
                    <p> . Programming</p>
                    <p style={{left: '130px'}}> . Web Development</p>
                    <p style={{left: '290px'}}> . Mobile Dev</p>
                </div>
            </div>
            <div className={adminMod.sd}>
                <h1>Recent Job Posts</h1>

                <div className={adminMod.recent}>
                    <p>Job</p>
                    <p>Category</p>
                    <p>Openings</p>
                    <p>Application</p>
                    <p>Status</p>
                </div>

                <div className={adminMod.cll}>
                    <p>UI/UX Designer</p>
                    <p className={adminMod.setting}>Full Time</p>
                    <p className={adminMod.setting}>12</p>
                    <p className={adminMod.setting} style={{left: "-28px"}}>125</p>
                    <button> Active</button>

                    <hr/>
                </div>
                <br/>
                <div className={adminMod.cll}>
                    <p>UI/UX Designer</p>
                    <p className={adminMod.setting}>Full Time</p>
                    <p className={adminMod.setting}>12</p>
                    <p className={adminMod.setting} style={{left: "-28px"}}>125</p>
                    <button> Active</button>

                    <hr/>
                </div>
                <br/>
                <div className={adminMod.cll}>
                    <p>UI/UX Designer</p>
                    <p className={adminMod.setting}>Full Time</p>
                    <p className={adminMod.setting}>12</p>
                    <p className={adminMod.setting} style={{left: "-28px"}}>125</p>
                    <button> Active</button>

                    <hr/>
                </div>
                <br/>
                <div className={adminMod.cll}>
                    <p>UI/UX Designer</p>
                    <p className={adminMod.setting}>Full Time</p>
                    <p className={adminMod.setting}>12</p>
                    <p className={adminMod.setting} style={{left: "-28px"}}>125</p>
                    <button> Active</button>

                    <hr/>
                </div>
                <br/>
                <div className={adminMod.cll}>
                    <p>UI/UX Designer</p>
                    <p className={adminMod.setting}>Full Time</p>
                    <p className={adminMod.setting}>12</p>
                    <p className={adminMod.setting} style={{left: "-28px"}}>125</p>
                    <button> Active</button>

                    <hr/>
                </div>
                <br/>

            </div>
            {/*<div className={adminMod.last}>*/}
            {/*    <h2> New Companies</h2>*/}
            {/*    <h3> Total Applicants : 19</h3>*/}
            {/*    <h4>View all - </h4>*/}
            {/*    <div className={adminMod.comp}>*/}
            {/*        <div className={adminMod.circle}></div>*/}
            {/*        <p className={adminMod.lest}>Company Name</p>*/}
            {/*        <p className={adminMod.diff} style={{color: "#FFB836"}}>Category</p>*/}
            {/*        <p className={adminMod.pga}> 13 July,2022</p>*/}
            {/*        <p className={adminMod.pge}>Email.com</p>*/}
            {/*        <button>Pending</button>*/}
            {/*    </div>*/}
            {/*</div>*/}

        </div>
    );
};