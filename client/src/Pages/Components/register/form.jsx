import React, {useContext, useState} from "react";
import {useFormik} from "formik";
import loginstyle from "../../../Assets/styles/register.module.css";
import {UserContext} from "../../../hooks/userContext";
import {useNavigate} from "react-router-dom";

export function Form() {
    const [userContext, setUserContext] = useContext(UserContext)
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [error, setError] = useState("")
    const [skills, setSkills] = useState({
        s1: '',
        s2: '',
        s3: '',
    })

    function hangleChange(e) {
        setSkills((value => ({
            ...value, [e.target.name]: e.target.value
        })));
    }

    const validate = (values) => {
        const errors = {};

        if (!values.FirstName) {
            errors.FirstName = "Required";
        }
        if (!values.LastName) {
            errors.LastName = "Required";
        }

        if (!values.email) {
            errors.email = "Required";
        } else if (values.email.length < 4) {
            errors.email = "Must be 5 characters or more";
        }

        if (!values.Phonenum) {
            errors.Phonenum = "Required";
        } else if (values.Phonenum.length < 10) {
            errors.Phonenum = "Phone number must contain 10 digits ";
        }

        if (!values.Address) {
            errors.Address = "Required";
        }

        if (!values.password) {
            errors.password = "Required";
        } else if (values.password.length < 8) {
            errors.password = "Must be 8 characters or more";
        }

        if (!values.repassword) {
            errors.repassword = "Required";
        } else if (values.repassword !== values.password) {
            errors.repassword = "Second password doesn't match";
        }

        if (!values.Work) {
            errors.Work = "Required";
        }
        if (!values.Skills) {
            errors.Skills = "Required";
        }

        if (!values.dob) {
            errors.dob = "Required";
        }

        if (!values.Country) {
            errors.Country = "Required";
        }
        if (!values.Education) {
            errors.Education = "Required";
        }

        return errors;
    };
    const navigate = useNavigate();

    const formik = useFormik({
        initialValues: {
            FirstName: "",
            LastName: "",
            email: "",
            Phonenum: "",
            Address: "",
            password: "",
            repassword: "",
            Work: "",
            Skills: [Object.values(skills)],
            dob: "",
            Country: "",
            Education: "",
        },
        validate,
        onSubmit: (values) => {
            const genericErrorMessage = "Something went wrong! Please try again later.";
            console.log(values)
            fetch("http://127.0.0.1:8080" + "/signup", {
                method: "POST",
                credentials: "include",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify(values),
            })
                .then(async response => {
                    setIsSubmitting(false)
                    if (!response.ok) {
                        if (response.status === 400) {
                            setError("Please fill all the fields correctly!")
                        } else if (response.status === 401) {
                            setError("Invalid email and password combination.")
                        } else if (response.status === 500) {
                            console.log(response)
                            const data = await response.json()
                            if (data.message) setError(data.message || genericErrorMessage)
                        } else {
                            setError(genericErrorMessage)
                        }
                    } else {
                        const data = await response.json()
                        setUserContext(oldValues => {
                            return {...oldValues, ...data}
                        })
                        navigate('/');
                    }
                })
                .catch(error => {
                    setIsSubmitting(false)
                    setError(genericErrorMessage)
                })
        },
    });

    return (
        <div className={loginstyle.formcolor}>
            <div className={loginstyle.line}>
                <h1>Input your Information</h1>
            </div>

            <form onSubmit={formik.handleSubmit}>
                <div className={loginstyle.structure}>
                    <div className={loginstyle.leftside}>
                        <label htmlFor="FirstName">First Name</label>
                        <input
                            className={loginstyle.inputbox}
                            id="FirstName"
                            name="FirstName"
                            type="FirstName"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.FirstName}
                        />
                        {formik.touched.FirstName && formik.errors.FirstName ? (
                            <div className={loginstyle.error}>{formik.errors.FirstName}</div>
                        ) : null}

                        <label htmlFor="Address">Address</label>
                        <input
                            className={loginstyle.inputbox}
                            id="Address"
                            name="Address"
                            type="Address"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.Address}
                        />
                        {formik.touched.Address && formik.errors.Address ? (
                            <div className={loginstyle.error}>{formik.errors.Address}</div>
                        ) : null}

                        <label htmlFor="dob">Date Of Birth </label>

                        <input
                            className={loginstyle.inputbox}
                            id="dob"
                            name="dob"
                            type="date"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.dob}
                        />

                        {formik.touched.dob && formik.errors.dob ? (
                            <div className={loginstyle.error}>{formik.errors.dob}</div>
                        ) : null}

                        <label htmlFor="email">Email Address</label>

                        <input
                            className={loginstyle.inputbox}
                            id="email"
                            name="email"
                            type="email"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.email}
                        />
                        {formik.touched.email && formik.errors.email ? (
                            <div className={loginstyle.error}>{formik.errors.email}</div>
                        ) : null}

                        <label htmlFor="password">Password</label>

                        <input
                            className={loginstyle.inputbox}
                            id="password"
                            name="password"
                            type="password"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.password}
                        />
                        {formik.touched.password && formik.errors.password ? (
                            <div className={loginstyle.error}>{formik.errors.password}</div>
                        ) : null}

                        {/*<label htmlFor="Work">Previous work Experience</label>*/}

                        {/*<input*/}
                        {/*    className={loginstyle.inputbox}*/}
                        {/*    id="Work"*/}
                        {/*    name="Work"*/}
                        {/*    type="Work"*/}
                        {/*    onChange={formik.handleChange}*/}
                        {/*    onBlur={formik.handleBlur}*/}
                        {/*    value={formik.values.Work}*/}
                        {/*/>*/}
                        {/*{formik.touched.Work && formik.errors.Work ? (*/}
                        {/*    <div className={loginstyle.error}>{formik.errors.Work}</div>*/}
                        {/*) : null}*/}

                        <label htmlFor="Skills">Skills</label>
                        <div className="skillscss">
                            <input
                                className={loginstyle.skill}
                                id="Skills"
                                name="s1"
                                type="text"
                                onChange={hangleChange}
                                onBlur={formik.handleBlur}
                                value={skills.s1}
                            />
                            {formik.touched.Skills && formik.errors.Skills ? (
                                <div className={loginstyle.error}>{formik.errors.Skills}</div>
                            ) : null}
                            <input
                                className={loginstyle.skill}
                                id="Skills"
                                name="s2"
                                type="text"
                                onChange={hangleChange}
                                onBlur={formik.handleBlur}
                                value={skills.s2}
                            />


                            <input
                                className={loginstyle.skill}
                                id="Skills"
                                name="s3"
                                type="text"
                                onChange={hangleChange}
                                onBlur={formik.handleBlur}
                                value={skills.s3}
                            />


                        </div>

                    </div>

                    <div className={loginstyle.rightside}>
                        <label htmlFor="LastName">Last Name</label>

                        <input
                            className={loginstyle.inputbox}
                            id="LastName"
                            name="LastName"
                            type="LastName"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.LastName}
                        />
                        {formik.touched.LastName && formik.errors.LastName ? (
                            <div className={loginstyle.error}>{formik.errors.LastName}</div>
                        ) : null}

                        <label htmlFor="Country">Country </label>

                        <input
                            className={loginstyle.inputbox}
                            id="Country"
                            name="Country"
                            type="Country"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.Country}
                        />
                        {formik.touched.Country && formik.errors.Country ? (
                            <div className={loginstyle.error}>{formik.errors.Country}</div>
                        ) : null}

                        <label htmlFor="Phonenum">Phone number</label>

                        <input
                            className={loginstyle.inputbox}
                            id="Phonenum"
                            name="Phonenum"
                            type="Phonenum"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.Phonenum}
                        />
                        {formik.touched.Phonenum && formik.errors.Phonenum ? (
                            <div className={loginstyle.error}>{formik.errors.Phonenum}</div>
                        ) : null}

                        <label htmlFor="">Educational qualification</label>

                        <input
                            className={loginstyle.inputbox}
                            id="Education"
                            name="Education"
                            type="Education"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.Education}
                        />
                        {formik.touched.Education && formik.errors.Education ? (
                            <div className={loginstyle.error}>{formik.errors.Education}</div>
                        ) : null}

                        <label htmlFor="repassword">Confirm Password </label>

                        <input
                            className={loginstyle.inputbox}
                            id="repassword"
                            name="repassword"
                            type="password"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.repassword}
                        />
                        {formik.touched.repassword && formik.errors.repassword ? (
                            <div className={loginstyle.error}>{formik.errors.repassword}</div>
                        ) : null}

                        <label form="workloaction">Work location</label>

                        <select id="workloaction" name="workloaction">
                            <option value="remote">Remote</option>
                            <option value="local">Local</option>
                            <option value="hybrid">Hybrid</option>
                        </select>
                    </div>
                </div>
                <div className={loginstyle.termsandconditions}>
                    <div className={loginstyle.footer}>
                        <div>
                            <input className={loginstyle.inputbox} type="checkbox"/>
                        </div>
                        <div>
                            <p>
                                Upload Your {"  "}
                                <a href="https://www.termsfeed.com/blog/sample-terms-and-conditions-template/">
                                    resume.
                                </a>
                            </p>
                        </div>
                    </div>
                    <div className={loginstyle.button}>
                        <button href="https://www.figma.com/file/9DXTPZBJdeOi0SaZ4EEy6k/Smart-India-Hackathon?node-id=503%3A67">
                            Make your resume
                        </button>
                        <button type="submit">Register</button>
                    </div>
                </div>

            </form>

        </div>
    );
}
