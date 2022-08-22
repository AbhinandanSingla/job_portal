import React, {useContext, useState} from "react";
import {useFormik} from "formik";
import loginstyle from "../../../Assets/styles/register.module.css";
import {UserContext} from "../../../hooks/userContext";
import {useNavigate} from "react-router-dom";

export function Form() {
    const [userContext, setUserContext] = useContext(UserContext)
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [error, setError] = useState("")
    const validate = (values) => {
        const errors = {};

        if (!values.CompanyName) {
            errors.CompanyName = "Required";
        }

        if (!values.username) {
            errors.username = "Required";
        } else if (values.username.length < 4) {
            errors.username = "Must be 5 characters or more";
        }

        if (!values.phoneNumber) {
            errors.phoneNumber = "Required";
        } else if (values.phoneNumber.length < 10) {
            errors.phoneNumber = "Phone number must contain 10 digits ";
        }

        if (!values.password) {
            errors.password = "Required";
        } else if (values.password.length < 8) {
            errors.password = "Must be 8 characters or more";
        }

        if (!values.repassword) {
            errors.repassword = "Required";
        } else if (values.repassword !== values.password) {
            errors.repassword = "Password doesn't match";
        }

        if (!values.GSTIN) {
            errors.GSTIN = "Required";
        } else if (values.GSTIN.length < 15) {
            errors.repassword = "Number should be a 15 digit number";
        }

        if (!values.companyType) {
            errors.companyType = "Required";
        }

        return errors;
    };
    const navigate = useNavigate();
    const formik = useFormik({
        initialValues: {
            CompanyName: "",
            username: "",
            phoneNumber: "",
            password: "",
            repassword: "",
            companyType: "",
            GSTIN: "",
            appliedDate: Date.now().toString()
        },
        validate,
        onSubmit:
            (values) => {
                const genericErrorMessage = "Something went wrong! Please try again later."
                fetch("http://127.0.0.1:8080" + "/api/addCompany", {
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
                                setError("Invalid username and password combination.")
                            } else if (response.status === 500) {
                                console.log(response)
                                const data = await response.json()
                                if (data.message) setError(data.message || genericErrorMessage)
                            } else {
                                setError(genericErrorMessage)
                            }
                        } else {
                            // const data = await response.json()
                            // setUserContext(oldValues => {
                            //     return {...oldValues, ...data}
                            // })
                            alert('Please wait till admin gave you access')
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
                <h1>Create your account</h1>
            </div>

            <form onSubmit={formik.handleSubmit}>
                <div className={loginstyle.structure}>
                    <div className={loginstyle.leftside}>
                        <label htmlFor="CompanyName">Company Name</label>
                        <input
                            className={loginstyle.inputboxc}
                            id="CompanyName"
                            name="CompanyName"
                            type="CompanyName"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.CompanyName}
                        />
                        {formik.touched.CompanyName && formik.errors.CompanyName ? (
                            <div className={loginstyle.error}>{formik.errors.CompanyName}</div>
                        ) : null}


                        <label htmlFor="username">Company Email</label>

                        <input
                            className={loginstyle.inputboxc}
                            id="username"
                            name="username"
                            type="email"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.username}
                        />
                        {formik.touched.username && formik.errors.username ? (
                            <div className={loginstyle.error}>{formik.errors.username}</div>
                        ) : null}

                        <label htmlFor="phoneNumber">Phone number</label>

                        <input
                            className={loginstyle.inputboxc}
                            id="phoneNumber"
                            name="phoneNumber"
                            type="phoneNumber"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.phoneNumber}
                        />
                        {formik.touched.phoneNumber && formik.errors.phoneNumber ? (
                            <div className={loginstyle.error}>{formik.errors.phoneNumber}</div>
                        ) : null}

                        <label htmlFor="companyType">Company Type </label>

                        <input
                            className={loginstyle.inputboxc}
                            id="companyType"
                            name="companyType"
                            type="companyType"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.companyType}
                        />
                        {formik.touched.companyType && formik.errors.companyType ? (
                            <div className={loginstyle.error}>{formik.errors.companyType}</div>
                        ) : null}


                        <label htmlFor="GSTIN">GSTIN number</label>

                        <input
                            className={loginstyle.inputboxc}
                            id="GSTIN"
                            name="GSTIN"
                            type="GSTIN"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.GSTIN}
                        />
                        {formik.touched.GSTIN && formik.errors.GSTIN ? (
                            <div className={loginstyle.error}>{formik.errors.GSTIN}</div>
                        ) : null}

                        <div className="passcss">
                            <label htmlFor="password">Password</label>
                            <br></br>
                            <input
                                className={loginstyle.inputboxp}
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

                            <label htmlFor="repassword">Confirm Password </label>

                            <input
                                className={loginstyle.inputboxp}
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
                        </div>

                    </div>
                </div>
                <div className={loginstyle.termsandconditions}>
                    <div className={loginstyle.footer}>
                        <div>
                            <input className={loginstyle.inputboxt} type="checkbox"/>
                        </div>
                        <div>
                            <p> I have read and agree to the Terms of Service
                            </p>
                        </div>
                    </div>

                </div>
                <div className={loginstyle.buttonc}>
                    <button type="submit">Create Account</button>
                </div>
            </form>

        </div>
    );
}
