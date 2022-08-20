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
        const errors    = {};

        if (!values.CompanyName) {
            errors.CompanyName = "Required";
        }       

        if (!values.Companyemail) {
            errors.Companyemail = "Required";
        } else if (values.Companyemail.length < 4) {
            errors.Companyemail = "Must be 5 characters or more";
        }

        if (!values.Phonenum) {
            errors.Phonenum = "Required";
        } else if (values.Phonenum.length < 10) {
            errors.Phonenum = "Phone number must contain 10 digits ";
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

        if (!values.gsnum) {
            errors.gsnum = "Required";
        } else if (values.gsnum.length< 15) {
            errors.repassword = "Number should be a 15 digit number";
        }
        
        if (!values.CompanyType) {
            errors.CompanyType = "Required";
        }

        return errors;
    };
    const navigate = useNavigate();
    const formik = useFormik({
        initialValues: {
            CompanyName: "",
            Companyemail: "",
            Phonenum: "",
            password: "",
            repassword: "",
            CompanyType :"",
            gsnum:""
            
        },
        validate,
        onSubmit: (values) => {
            const genericErrorMessage = "Something went wrong! Please try again later."
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
                            setError("Invalid Companyemail and password combination.")
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
                                          

                        <label htmlFor="Companyemail">Company Email</label>

                        <input
                            className={loginstyle.inputboxc}
                            id="Companyemail"
                            name="Companyemail"
                            type="Companyemail"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.Companyemail}
                        />
                        {formik.touched.Companyemail && formik.errors.Companyemail ? (
                            <div className={loginstyle.error}>{formik.errors.Companyemail}</div>
                        ) : null}

                        <label htmlFor="Phonenum">Phone number</label>

                        <input
                            className={loginstyle.inputboxc}
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

                        <label htmlFor="CompanyType">Company Type </label>

                        <input
                            className={loginstyle.inputboxc}
                            id="CompanyType"
                            name="CompanyType"
                            type="CompanyType"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.CompanyType}
                        />
                        {formik.touched.CompanyType && formik.errors.CompanyType ? (
                            <div className={loginstyle.error}>{formik.errors.CompanyType}</div>
                        ) : null}

                        
                        <label htmlFor="gsnum">GSTIN number</label>

                        <input
                            className={loginstyle.inputboxc}
                            id="gsnum"
                            name="gsnum"
                            type="gsnum"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.gsnum}
                        />
                        {formik.touched.gsnum && formik.errors.gsnum ? (
                            <div className={loginstyle.error}>{formik.errors.gsnum}</div>
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
                            <p>  I have read and agree to the Terms of Service                           
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
