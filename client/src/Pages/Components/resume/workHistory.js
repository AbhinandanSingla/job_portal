import {useContext, useEffect, useState} from "react";
import {DataContext} from "../../../hooks/ResumeData";
import {useLocation, useNavigate} from "react-router-dom";
import {useFormik} from "formik";

function WorkHistory(props) {
    const location = useLocation();
    const [formikdata, setDate] = useState({
        jobtitle: "",
        employer: "",
        city: "",
        country: "",
        workDesc: '',
        startDate: "",
        endDate: "",
        attending: false
    });
    const {userDataProvider, setUserData} = useContext(DataContext);
    const navigate = useNavigate();
    useEffect(() => {
        if (location.state) {
            setDate(location.state.data);
        }
    }, [])
    const formik = useFormik({
        initialValues: formikdata,
        onSubmit: (values) => {
            if (location.state) {
                console.log(location.state.id)
                let arrayData = userDataProvider.workHistory;
                arrayData[location.state.id] = values;
                setUserData({...userDataProvider, workHistory: [...arrayData]})
                console.log(arrayData)
            } else {
                setUserData({...userDataProvider, workHistory: [...userDataProvider.workHistory, values]})
                console.log(userDataProvider)
            }
            navigate('/resume/workHistoryList')
        }, enableReinitialize: true
    });


    return (<section className="resumeContainer">
        <form className="max_width" onSubmit={formik.handleSubmit}>
            <div className="headContainer">
                <div className="heading">
                    Tell us about another job
                </div>
                <div className="subheading">We’ll put your work history in the right order.</div>
            </div>
            <div className="container">
                <div className="col">
                    <div className="formRow">
                        <div className="formCol">
                            <span>Job Title</span>
                            <input type="text" className="jobtitle input" name={'jobtitle'}
                                   value={formik.values.jobtitle} onBlur={formik.handleBlur}
                                   onChange={formik.handleChange}/>
                        </div>
                        <div className="formCol">
                            <span>Employer</span>
                            <input type="text" className="lastname input" name={'employer'}
                                   value={formik.values.employer} onBlur={formik.handleBlur}
                                   onChange={formik.handleChange}/>
                        </div>
                    </div>
                    <div className="formRow">
                        <div className="formCol">
                            <span>City</span>
                            <input type="text" className="city input" name={'city'}
                                   value={formik.values.city} onBlur={formik.handleBlur}
                                   onChange={formik.handleChange}/>
                        </div>
                        <div className="formCol">
                            <span>Country</span>
                            <input type="text" className="country input" name={'country'}
                                   value={formik.values.country} onBlur={formik.handleBlur}
                                   onChange={formik.handleChange}/>
                        </div>
                    </div>
                    <div className="formRow">
                        <div className="formCol">
                            <span>Work Description</span>
                            <textarea className=" input workDesc" name={'workDesc'}
                                      value={formik.values.workDesc} onBlur={formik.handleBlur}
                                      onChange={formik.handleChange}/>
                        </div>
                    </div>

                    <div className="formRow">
                        <div className="formCol">
                            <span>Start Date</span>
                            <input type="text" className="startDate input" name={'startDate'}
                                   value={formik.values.startDate} onBlur={formik.handleBlur}
                                   onChange={formik.handleChange}/>
                        </div>
                        <div className="formCol">
                            <span>End Date</span>
                            <input type="text" className="country input" name={'endDate'}
                                   value={formik.values.endDate} onBlur={formik.handleBlur}
                                   onChange={formik.handleChange}/>
                            <label className="currentLabel">
                                <input type="checkbox" className="current"/>
                                I currently work here
                            </label>
                        </div>
                    </div>

                </div>
            </div>
            <div className="buttonContainer">
                <button className="back">
                    BACK
                </button>
                <button className="next" type={"submit"}>
                    Next
                </button>
            </div>

        </form>
    </section>);
}

export default WorkHistory;