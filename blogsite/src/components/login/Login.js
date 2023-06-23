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
    try {
      const requestBody = {
        username: userName,
        password: password,
      };
      const response = await api.post("/api/v1/user/login", requestBody);
      console.log(response);
      if (response.data === "success") {
        navigate("/profile"); // Navigate to the profile page
      } else if (response.data === "Wrong Password") {
        alert("Invalid Credentials");
      } else if (response.data === "User Not Found") {
        alert("User not found");
      }
    } catch (err) {
      console.log(err);
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
