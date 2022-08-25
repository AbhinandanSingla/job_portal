import React from "react";
import companyModule from "../../../Assets/styles/company.module.css";
import {useState} from "react";
import {useFormik} from "formik";
import {upload} from "../../../hooks/bucket.js";

export const AddJob = () => {
        const uploadImage = e => {
            e.preventDefault();
            document.getElementById('profileImg').click();
        }
        const [serviceList, setServiceList] = useState([{service: ""}, {service: ""}]);
        const [file, setFile] = useState({
            'preview': "",
            'raw': ""
        });
        const [value, setValue] = useState({
            skill1: '',
            skill2: '',
            skill3: ''
        });

        const formik = useFormik({
            initialValues: {
                companyID: '6303d00e01f05df8e6f6b2b6',
                jobTitle: '',
                jobCategory: '',
                jobLocation: '',
                jobType: '',
                jobDescription: '',
                ApplicationDeadline: '',
                Experience: '',
                SalaryRange: '',
                numberApplicants: 999,
                postDate: new Date(),
                additionalLinks: '',
                jobProfile: 'https://firebasestorage.googleapis.com/v0/b/personaltestingbase.appspot.com/o/images%2F152137-laptops-review-apple-macbook-pro-2020-review-image1-pbzm4ejvvs.jpg?alt=media&token=c74f7add-6c9b-47f6-98ce-db59d4cbf340',
                companyName: 'samsung',
            },
            onSubmit: (values) => {
                console.log(values)
                console.log(serviceList)
                console.log(upload(file))
                // fetch("http://127.0.0.1:8080/api/addJob", {
                //     method: "POST",
                //     credentials: "include",
                //     headers: {"Content-Type": "application/json", 'Origin': 'http://localhost:3000'},
                //     body: JSON.stringify({...values, skills: Object.values(value)}), Qualifications: serviceList
                // })
                //     .then(async response => {
                //         if (!response.ok) {
                //             if (response.status === 400) {
                //             } else if (response.status === 401) {
                //             } else {
                //             }
                //         } else {
                //             console.log(response)
                //             console.log("Job added")
                //         }
                //     })
                //     .catch(error => {
                //     })
            }


        });


        const handleAdd = () => {
            setServiceList([...serviceList, {service: ""}])
        }

        function handleChange(event) {
            setValue((value => ({
                ...value, [event.target.name]: event.target.value
            })));
        }

        const handleRemove = (index) => {
            const list = [...serviceList]
            list.splice(index, 1)
            setServiceList(list)
        }

        const handleServiceChange = (e, index) => {
            const {name, value} = e.target
            const list = [...serviceList]
            list[index][name] = value
            setServiceList(list)
        }

        return (
            <div className={companyModule.addJobContainer}>
                <form className={companyModule.addJobSubContainer} onSubmit={formik.handleSubmit}>
                    <div className={companyModule.profileSection}>
                        <div className={companyModule.photoDiv}><img src={file.preview} alt=""/></div>
                        <div className={companyModule.photoRightSide}>
                            <div>
                                <p>select your company profile pic</p>
                            </div>
                            <div className={companyModule.browseBtnDiv}>
                                <button className={companyModule.browseBtn} onClick={uploadImage}>
                                    Browse
                                </button>
                                <input onChange={(e) => setFile({
                                    'preview': URL.createObjectURL(e.target.files[0]),
                                    'raw': e.target.files[0]
                                })} id={"profileImg"} type="file" style={{'display': 'none'}}/>
                            </div>
                        </div>
                    </div>
                    <div className={companyModule.postJobInputs}>
                        <div className={companyModule.jobInputDiv1}>
                            <div>
                                <p className={companyModule.jobInputHeading}>Job Title</p>
                                <input
                                    type="text"
                                    placeholder="Title"
                                    id={"jobTitle"}
                                    value={formik.values.jobTitle}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur} className={companyModule.jobInputSmall}
                                />
                            </div>
                            <div>
                                <p className={companyModule.jobInputHeading}>Job location</p>
                                <input
                                    type="text"
                                    id={'jobLocation'}
                                    placeholder="hyderabad"
                                    value={formik.values.jobLocation}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    className={companyModule.jobInputSmall}
                                />
                            </div>
                        </div>

                        <div className={companyModule.jobInputDiv2}>
                            <div>
                                <p className={companyModule.jobInputHeading}>Job Category</p>
                                <input
                                    type="text"
                                    id={"jobCategory"}
                                    placeholder="eg: Technical"
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    value={formik.values.jobCategory}
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
                                        id={"numberApplicants"}
                                        value={formik.values.numberApplicants}
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
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
                                    id={"additionalLinks"}
                                    value={formik.values.additionalLinks}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
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
                                        id="jobType"
                                        className={companyModule.jobInputSmall}
                                        value={formik.values.jobType}
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
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
                                        placeholder="Writer"
                                        name={"skill1"}
                                        className={companyModule.jobInputVerySmall}
                                        value={value.skill1}
                                        onChange={handleChange}
                                    />
                                    <input
                                        type="text"
                                        name="skill2"
                                        placeholder="Web development"
                                        value={value.skill2}
                                        onChange={handleChange}
                                        className={companyModule.jobInputVerySmall}
                                    />
                                    <input
                                        name={"skill3"}
                                        type="text"
                                        value={value.skill3}
                                        onChange={handleChange}
                                        placeholder="Art"
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
                                        value={formik.values.SalaryRange}
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        id={"SalaryRange"}
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
                                    {serviceList.map((singleService, index) => (
                                        <div>
                                            <div key={index}>
                                                <input
                                                    name='service'
                                                    type="text"
                                                    placeholder="qualification"
                                                    className={companyModule.jobInputSmaller}
                                                    value={singleService.service}
                                                    onChange={(e) => {
                                                        handleServiceChange(e, index)
                                                    }}
                                                />
                                                {serviceList.length > 1 && (
                                                    <button className={companyModule.removeBtn} onClick={() => {
                                                        handleRemove(index)
                                                    }}>Remove</button>

                                                )}

                                            </div>
                                            <div>
                                                {serviceList.length - 1 === index && serviceList.length < 3 && (
                                                    <button className={companyModule.addBtn} onClick={handleAdd}>Add
                                                        qualification</button>
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
                                        id={'ApplicationDeadline'}
                                        placeholder="Dealine of Job"
                                        className={companyModule.jobInputSmall}
                                        value={formik.values.ApplicationDeadline}
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
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
                                    type={'text'}
                                    id={'jobDescription'}
                                    value={formik.values.jobDescription}
                                    onChange={formik.handleChange}
                                    placeholder="Description "
                                    className={companyModule.jobInputBigger}
                                />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className={companyModule.postJobBtnDiv}>
                        <button type={'submit'} className={companyModule.postJobBtn}>Post Job</button>
                    </div>
                </form>
            </div>
        );
    }
;
