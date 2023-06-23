import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";
import api from "../../api/axiosConfig";

const Login = () => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Logged In");
    console.log(userName);
    console.log(password);

    const response = await api.post("/api/v1/user/login", {
      userName,
      password,
    });
    console.log(response);
    if (response.status === 200) {
      navigate("/profile"); // Navigate to the profile page
    } else if (response.status === 401) {
      alert("Invalid Credentials");
    } else if (response.status === 404) {
      alert("User not found");
    }
  };

  return (
    <div className="loginComponent">
      <div className="container">
        <div className="form-container">
          <form onSubmit={handleSubmit}>
            <h1>
              <span>Login</span>
            </h1>
            <div>
              <label>UserName</label>
              <input
                type="text"
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
                placeholder="Enter your user name"
                required
              />
            </div>
            <div>
              <label>Password</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your password"
                required
              />
            </div>
            <div className="submitBtn">
              <button type="submit">Submit</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
