import {useContext, useEffect, useState} from "react";
import {DataContext} from "../../../hooks/ResumeData";
import {useFormik} from "formik";
import {useLocation, useNavigate} from "react-router-dom";

function Education() {
    const location = useLocation();
    const [formikdata, setDate] = useState({
        schoolName: "",
        schoolLocation: "",
        degree: "",
        fos: "",
        graduationStartDate: "",
        graduationEndDate: "",
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
                let arrayData = userDataProvider.education;
                arrayData[location.state.id] = values;
                setUserData({...userDataProvider, education: [...arrayData]})
                console.log(arrayData)
            } else {
                setUserData({...userDataProvider, education: [...userDataProvider.education, values]})
            }
            navigate('/resume/educationList')
        }, enableReinitialize: true
    });

    return (<section className="resumeContainer">
            <form className="max_width" onSubmit={formik.handleSubmit}>
                <div className="headContainer">
                    <div className="heading">
                        Tell us about your education
                    </div>
                    <div className="subheading">
                        Include every school, even if you're still there or didn't graduate.
                    </div>
                </div>
                <div className="container">
                    <div className="col">
                        <div className="formRow">
                            <div className="formCol">
                                <span>School Name</span>
                                <input type="text" name={'schoolName'} value={formik.values.schoolName}
                                       onBlur={formik.handleBlur}
                                       onChange={formik.handleChange} className="schoolname input"/>
                            </div>
                            <div className="formCol">
                                <span>School Location</span>
                                <input type="text" name={'schoolLocation'} onChange={formik.handleChange}
                                       onBlur={formik.handleBlur}
                                       value={formik.values.schoolLocation} className="location input"/>
                            </div>
                        </div>
                        <div className="formRow">
                            <div className="formCol">
                                <span>Degree</span>
                                <input type="text" name={'degree'} value={formik.values.degree}
                                       onBlur={formik.handleBlur}

                                       onChange={formik.handleChange} className="degree input"/>
                            </div>
                            <div className="formCol">
                            </div>
                        </div>
                        <div className="formRow">
                            <div className="formCol fos">
                                <span>Field of Study</span>
                                <input type="text" name={'fos'} value={formik.values.fos} onBlur={formik.handleBlur}

                                       onChange={formik.handleChange} className="fos input"/>
                            </div>
                            <div className="formCol width">
                                <span>Graduation Start Date</span>
                                <input type="date" name={'graduationStartDate'}
                                       value={formik.values.graduationStartDate}
                                       onBlur={formik.handleBlur}
                                       onChange={formik.handleChange} className="GstartDate input"/>
                            </div>
                            <div className="formCol width">
                                <span>Graduation End Date</span>
                                <input type="date" name={'graduationEndDate'}
                                       value={formik.values.graduationEndDate}
                                       onBlur={formik.handleBlur}
                                       onChange={formik.handleChange} className="country input"/>
                                <label className="currentLabel">
                                    <input type="checkbox" className="current" onBlur={formik.handleBlur}
                                           name={'attending'} value={formik.values.attending}/>
                                    <span>I currently attend here</span>
                                </label>
                            </div>
                        </div>
                    </div>

                </div>
                <div className="buttonContainer">
                    <button type={'button'} className="back">
                        BACK
                    </button>
                    <button type={'submit'} className="next">Next</button>
                </div>

            </form>

        </section>
    );
}

export default Education;