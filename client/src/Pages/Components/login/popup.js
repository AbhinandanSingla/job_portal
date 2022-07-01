import React from "react";
import { useState } from "react";
import "./popup.css";

function Popup(props) {
  const { errorMessages, setErrorMessages } = useState({});
  const { isSubmitted, setIsSubmitted } = useState(false);

  const database = [
    {
      username: "user1",
      password: "pass1",
    },
    {
      username: "user2",
      password: "pass2",
    },
  ];

  const error = [
    {
      uname: "invalid username",
      pass: "invalid password",
    },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    var { uname, pass } = document.forms[0];

    const userData = database.find((user) => user.username === uname.value);

    if (userData) {
      if (userData.password !== pass.value) {
        setErrorMessages({ name: "pass", message: error.pass });
      } else {
        setIsSubmitted(true);
        props.setTrigger(false);
      }
    } else {
      setErrorMessages({ name: "uname", message: error.uname });
    }
  };

  // const renderErrorMessage = (name) =>
  //   name === errorMessages.name && (
  //     <div className="error">{errorMessages.message}</div>
  //   );

  const renderForm = (
    <div className="login_form">
      <form onSubmit={handleSubmit}>
        <div className="login_name">
          <input type="text" name="uname" placeholder="Username" required />
          {/* {renderErrorMessage("uname")}; */}
        </div>
        <div className="login_password">
          <input type="password" name="pass" placeholder="Password" required />
          {/* {renderErrorMessage("pass")}; */}
        </div>

        <div className="submit_login_button">
          <input type="submit" />
        </div>

        <div className="register_button">
          <a href="#">register</a>
        </div>
      </form>
    </div>
  );

  return props.trigger ? (
    <div className="popup">
      <div className="popup-inner">
        <button className="close-btn" onClick={() => props.setTrigger(false)}>
          close
        </button>
        {/* {props.children} */}
        <h1>LOGIN</h1>
        {isSubmitted ? <div>Logged in</div> : renderForm}
      </div>
    </div>
  ) : (
    ""
  );
}

export default Popup;
