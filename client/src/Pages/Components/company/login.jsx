// import React, {useContext, useState} from "react";
// import companyModule from "../../../Assets/styles/company.module.css";
// import imageRight from "../../../Assets/Images/company/loginLeft.png";
// import {NavLink, useNavigate} from "react-router-dom";
// import logo from "../../../Assets/Images/common/logo.svg";
// import {UserContext} from "../../../hooks/userContext";


// export const Logincompany = () => {
//   return (
//     <div className={companyModule.loginContainer}>
//       <div className={companyModule.loginLeft}>
//         <img src={imageRight} alt="image-right" id={companyModule.imageleft} />
//         <div>
//           <NavLink to="/" className={companyModule.RozgarLink}>
//             <img src={logo} alt="" />
//             <h3>Rozgar.com</h3>
//           </NavLink>
//         </div>
//         {/* <div> */}
//         <h2>Welcome to</h2>
//         <h1>Rozgar.com</h1>
//         <p>
//           Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quo hic et
//           qui tempore? Commodi accusamus molestiae consectetur autem. Vero alias
//           earum aliquam optio quos nemo molestias cumque ullam provident natus!
//         </p>
//         {/* </div> */}
//       </div>
//       <div className={companyModule.loginRight}>
//         <h1>Log in</h1>

// export const Login_company = () => {
//     const [errorMessages, setErrorMessages] = useState('');
//     const [isSubmitted, setIsSubmitted] = useState(false);
//     const [userContext, setUserContext] = useContext(UserContext)
//     const navigate = useNavigate();


//     const [data, setData] = useState({
//         'username': '',
//         'password': ''
//     })

//     function hangleChange(e) {
//         setData((val) => ({
//             ...val, [e.target.name]: e.target.value
//         }))
//     }

//     function handleSubmit(e) {
//         e.preventDefault()
//         const genericErrorMessage = "Something went wrong! Please try again later."
//         fetch("http://127.0.0.1:8080/company/login", {
//             method: "POST",
//             credentials: "include",
//             headers: {"Content-Type": "application/json", 'Origin': 'http://localhost:3000'},
//             body: JSON.stringify({username: data.username, password: data.password}),
//         })
//             .then(async response => {
//                 if (!response.ok) {
//                     if (response.status === 400) {
//                         setErrorMessages("Please fill all the fields correctly!")
//                     } else if (response.status === 401) {
//                         setErrorMessages("Invalid email and password combination.")
//                     } else {
//                         setErrorMessages(genericErrorMessage)
//                     }
//                 } else {
//                     const data = await response.json()
//                     setUserContext(oldValues => {
//                         return {...oldValues, token: data.token}
//                     });
//                     setIsSubmitted(true);
//                     navigate('/');
//                 }
//             })
//             .catch(error => {
//                 setIsSubmitted(false)
//                 setErrorMessages(genericErrorMessage)
//             })
//     }

//     return (
//         <div className={companyModule.loginContainer}>
//             <div className={companyModule.loginLeft}>
//                 <img src={imageRight} alt="image-right" id={companyModule.imageleft}/>
//                 <div>
//                     <NavLink to="/" className={companyModule.RozgarLink}>
//                         <img src={logo} alt=""/>
//                         <h3>Rozgar.com</h3>
//                     </NavLink>
//                 </div>
//                 {/* <div> */}
//                 <h2>Welcome to</h2>
//                 <h1>Rozgar.com</h1>
//                 <p>
//                     Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quo hic et
//                     qui tempore? Commodi accusamus molestiae consectetur autem. Vero alias
//                     earum aliquam optio quos nemo molestias cumque ullam provident natus!
//                 </p>
//                 {/* </div> */}
//             </div>
//             <div className={companyModule.loginRight}>
//                 <h1>Log in</h1>

//                 <div className={companyModule.loginInputs}>
//                     <p>Account</p>
//                     <label htmlFor="name">
//                         <i className="zmdi zmdi-account zmdi-hc-2x"></i>
//                         <input
//                             type="text"
//                             name="username"
//                             id="name"
//                             placeholder="username"
//                             autoComplete="off"
//                             value={data.username}
//                             onChange={hangleChange}
//                         />
//                     </label>
//                     <label htmlFor="password">
//                         <i class="zmdi zmdi-lock zmdi-hc-2x"></i>
//                         <input
//                             type="password"
//                             name="password"
//                             id="password"
//                             placeholder="password"
//                             autoComplete="off"
//                             value={data.password}
//                             onChange={hangleChange}
//                         />
//                     </label>
//                     <a href="#">Forgot your password?</a>
//                 </div>

//                 <div className={companyModule.loginbtnDiv}>
//                     <div>
//                         <input type="checkbox"/>
//                         Remember me
//                     </div>
//                     <button onClick={handleSubmit}>
//                         {/*<NavLink to={"/company"}/>*/}
//                         Login
//                     </button>
//                 </div>

//                 <div className={companyModule.registerLinkDiv}>
//                     Don't have an account?
//                     <a href="#">Register Here</a>
//                 </div>
//             </div>
//         </div>
//     );
// };
