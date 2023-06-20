import React from 'react'
import './Login.css'
import {Link} from 'react-router-dom'

const Login = () => {
  return (
    <div className='loginComponent'>
      <div className="container">
                <div className="form-container">
                    <form>
                        <h1><span>Login</span></h1>
                        <div>
                            <label>UserName</label>
                            <input type="text" placeholder='Enter your user name' required/>
                        </div>
                        <div>
                            <label>Password</label>
                            <input type="password" placeholder='Enter your password' required/>
                        </div>
                        <div className='submitBtn'>
                          <button><Link to={'/profile'}>Submit</Link></button>
                        </div>
                    </form>
                </div>
            </div>
    </div>
  )
}

export default Login