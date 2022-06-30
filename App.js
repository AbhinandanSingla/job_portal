import React, { useState } from "react";
import Loginn from "./Components/Loginn";
import "./index.css";

function App() {
  const adminUser = {
    userName: "admin22",
    password: "admin123",
  };

  const [user, setUser] = useState({ name: "", email: "" });
  const [error, setError] = useState("");

  const Login = (details) => {
    console.log(details);

    if (
      details.name === adminUser.userName &&
      details.password === adminUser.password
    ) {
      console.log("Loggen in");
    } else {
      console.log("Details do not match");
      setError("Details do not match!");
    }
    setUser({ name: details.name, password: details.password });
  };
  const Logout = () => {
    setUser({ name: "", password: "" });
  };

  return (
    <div className="App">
      {user.name !== "" ? (
        <div className="Welcome">
          <h2>
            Welcome,<span>{user.name}</span>
          </h2>
          <button onClick={Logout}>Logout</button>
        </div>
      ) : (
        <Loginn Login={Login} error={error} />
      )}
    </div>
  );
}

export default App;
