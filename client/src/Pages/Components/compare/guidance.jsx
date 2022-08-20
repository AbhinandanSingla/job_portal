import React from 'react'
import compareStyle from '../../../Assets/styles/compare.module.css';

 export const Guidance =() =>{
  return (
    <div className={compareStyle.guidance}>
        <h1> Trending Courses in India</h1>
        <div className={compareStyle.sb}>
          <p> search top courses </p> 
        </div>
        <h3>Here are the <p style={{color:"blue" , display:"inline"}}>top</p> courses in India !</h3>

          <div className={compareStyle.rowe}>
            <div className={compareStyle.b1}>
                 <div className={compareStyle.cb1}></div>
                 <h2> 	 Data Scientist</h2>
                 <p> <ul> 	• Python programming</ul> 
                 <ul> 	• Using Python and SQL for<br /> predictive  analytics
                                   </ul> 
<ul> 	• Data visualization using Python, <br /> exploratory analytics</ul> </p>

<button> Read More </button>
            </div>
            <div className={compareStyle.b2}>
            <div className={compareStyle.cb2}></div>
                 <h2> 	 Data Scientist</h2>
                 <p> <ul> 	• Python programming</ul> 
                 <ul> 	• Using Python and SQL for<br /> predictive  analytics
                                   </ul> 
<ul> 	• Data visualization using Python, <br /> exploratory analytics</ul> </p>
                </div>
                <div className={compareStyle.b3}>
                <div className={compareStyle.cb3}></div>
                 <h2> 	 Data Scientist</h2>
                 <p> <ul> 	• Python programming</ul> 
                 <ul> 	• Using Python and SQL for<br /> predictive  analytics
                                   </ul> 
<ul> 	• Data visualization using Python, <br /> exploratory analytics</ul> </p>
                </div>
                <div className={compareStyle.b4}>
                <div className={compareStyle.cb4}></div>
                 <h2> 	 Data Scientist</h2>
                 <p> <ul> 	• Python programming</ul> 
                 <ul> 	• Using Python and SQL for<br /> predictive  analytics
                                   </ul> 
<ul> 	• Data visualization using Python, <br /> exploratory analytics</ul> </p>
                </div>

          </div>

        </div>
  )
}

