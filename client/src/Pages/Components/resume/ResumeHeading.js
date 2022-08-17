import './resumeHeading.css'
import profile from './resumeHeadingUser.png'
import {useContext, useState} from "react";
import {Link, useNavigate} from "react-router-dom";
import {DataContext} from "../../../hooks/ResumeData";
import {useFormik} from "formik";

function ResumeHeading() {
    const navigate = useNavigate();
    const [image, setImage] = useState({
        preview: "", raw: ""
    });
    const {userDataProvider, setUserData} = useContext(DataContext);
    const formik = useFormik({
        initialValues: {
            firstname: '',
            lastname: '',
            profession: '',
            city: '',
            country: '',
            pincode: '',
            email: '',
            profileSummary: '',
            phoneno: '',
            img: {
                preview: image.preview, raw: image.raw
            }
        },
        onSubmit: (values) => {
            setUserData({...userDataProvider, ...values});
            // navigate('/resume')
            console.log(userDataProvider)
        },
    });
    const uploadImage = e => {
        e.preventDefault();
        document.getElementById('profileHeading').click();
    }
    return (<section className="resumeContainer">
            <form className="max_width" onSubmit={formik.handleSubmit}>
                <div className="headContainer">
                    <div className="heading">
                        Resume Heading
                    </div>
                    <div className="subheading">We suggest including an email and phone number.</div>
                </div>
                <div className="container">
                    <div className="col">

                        <label htmlFor="profileHeading" className={'headingProfileContainer'}>

                            {formik.values.img.preview ?
                                <img src={formik.values.img.preview} alt="" className={'headingProfile'}/> :
                                <img src={profile} alt=""/>
                            }</label>
                        <input type="file" name="" id="profileHeading" style={{'display': 'none'}}
                               onChange={(e) => {
                                   formik.setFieldValue("img", {
                                       'preview': URL.createObjectURL(e.target.files[0]),
                                       'raw': e.target.files[0]
                                   })
                               }}/>
                        <button className="uploadphoto" onClick={uploadImage}>
                            UPLOAD PHOTO
                        </button>
                    </div>
                    <div className="col">
                        <div className="formRow">
                            <div className="formCol">
                                <span>FirstName</span>
                                <input type="text" name='firstname' value={formik.values.firstname}
                                       className="firtname input" onChange={formik.handleChange}/>
                            </div>
                            <div className="formCol">
                                <span>LastName</span>
                                <input type="text" name='lastname' value={formik.values.lastname}
                                       className="lastname input" onChange={formik.handleChange}/>
                            </div>
                        </div>
                        <div className="formCol">
                            <span>Profession</span>
                            <input type="text" name='profession' value={formik.values.profession}
                                   className="profession input" onChange={formik.handleChange}/>
                        </div>
                        <div className="formRow">
                            <div className="formCol">
                                <span>City</span>
                                <input type="text" name='city' value={formik.values.city} onChange={formik.handleChange}
                                       className="city input"/>
                            </div>
                            <div className="formCol">
                                <span>Country</span>
                                <input type="text" name='country' value={formik.values.country}
                                       onChange={formik.handleChange}
                                       className="country input"/>
                            </div>
                            <div className="formCol">
                                <span>PinCode</span>
                                <input type="text" name='pincode' value={formik.values.pincode}
                                       onChange={formik.handleChange}
                                       className="pincode input"/>
                            </div>
                        </div>
                        <div className="formRow">
                            <div className="formCol">
                                <span>Profile Summary</span>
                                <textarea value={formik.values.profileSummary} onChange={formik.handleChange}
                                          className={"input resumeSummary"} name="profileSummary" cols="30" rows="10"/>
                            </div>
                        </div>
                        <div className="formRow">
                            <div className="formCol">
                                <span>Phone</span>
                                <input type="text" name='phoneno' onChange={formik.handleChange}
                                       value={formik.values.phoneno}
                                       className="phoneNo input"/>
                            </div>
                            <div className="formCol">
                                <span>Email</span>
                                <input type="text" name='email' onChange={formik.handleChange}
                                       value={formik.values.email}
                                       className="email input"/>
                            </div>
                        </div>

                    </div>

                </div>
                <div className="buttonContainer">
                    <button className="back">
                        BACK
                    </button>
                    <button className={'next'} type={'submit'}> Next & Save
                    </button>
                </div>
            </form>
        </section>
    );
}

export default ResumeHeading;