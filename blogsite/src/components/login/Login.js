import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';

const Login = () => {
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Logged In');
    console.log(userName);
    console.log(password);
    navigate('/profile'); // Navigate to the profile page
  };

  return (
    <div className='loginComponent'>
      <div className="container">
        <div className="form-container">
          <form onSubmit={handleSubmit}>
            <h1><span>Login</span></h1>
            <div>
              <label>UserName</label>
              <input type="text" value={userName} onChange={(e) => setUserName(e.target.value)} placeholder='Enter your user name' required/>
            </div>
            <div>
              <label>Password</label>
              <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder='Enter your password' required/>
            </div>
            <div className='submitBtn'>
              <button type="submit">Submit</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;